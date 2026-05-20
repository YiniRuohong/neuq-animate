#!/usr/bin/env node
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const domains = [
  "neuq-ani.me",
  "www.neuq-ani.me",
  "oc.neuq-ani.me",
  "laser.neuq-ani.me",
  "api.neuq-ani.me",
];

const urls = [
  "https://neuq-ani.me/",
  "https://www.neuq-ani.me/",
  "https://oc.neuq-ani.me/",
  "https://laser.neuq-ani.me/",
  "https://api.neuq-ani.me/health",
];

const goedgeNodes = [
  { region: "US", ip: "45.202.240.235" },
  { region: "JP", ip: "103.232.213.191" },
  { region: "HK", ip: "103.247.29.99" },
  { region: "SG", ip: "47.236.2.125" },
];

const originIp = "202.61.246.240";

async function run(command, args, options = {}) {
  const started = Date.now();
  try {
    const result = await execFileAsync(command, args, {
      timeout: options.timeout ?? 20_000,
      maxBuffer: options.maxBuffer ?? 1024 * 1024,
      env: { ...process.env, ...options.env },
    });
    return {
      ok: true,
      command: [command, ...args].join(" "),
      ms: Date.now() - started,
      stdout: result.stdout.trim(),
      stderr: result.stderr.trim(),
    };
  } catch (error) {
    return {
      ok: false,
      command: [command, ...args].join(" "),
      ms: Date.now() - started,
      stdout: error.stdout?.trim() ?? "",
      stderr: error.stderr?.trim() ?? error.message,
      code: error.code ?? null,
      signal: error.signal ?? null,
    };
  }
}

function parseHttpStatus(output) {
  const matches = [...output.matchAll(/^HTTP\/\S+\s+(\d+)/gm)].map((m) =>
    Number(m[1]),
  );
  return matches.at(-1) ?? null;
}

async function checkUrl(url) {
  const result = await run(
    "curl",
    ["--noproxy", "*", "-fsSI", "--max-time", "15", url],
    { timeout: 20_000 },
  );
  return {
    url,
    ok: result.ok,
    status: parseHttpStatus(result.stdout),
    ms: result.ms,
    error: result.ok ? null : result.stderr,
    headers: result.stdout.split("\n").slice(0, 12),
  };
}

async function checkNode(node) {
  const result = await run(
    "curl",
    [
      "--noproxy",
      "*",
      "-fsS",
      "--max-time",
      "15",
      "--resolve",
      `api.neuq-ani.me:443:${node.ip}`,
      "https://api.neuq-ani.me/health",
    ],
    { timeout: 20_000 },
  );
  return {
    ...node,
    ok: result.ok && result.stdout.includes('"ok":true'),
    ms: result.ms,
    body: result.stdout,
    error: result.ok ? null : result.stderr,
  };
}

async function digDomain(domain) {
  const result = await run("dig", ["@1.1.1.1", "+short", domain, "A"], {
    timeout: 10_000,
  });
  return {
    domain,
    ok: result.ok,
    ips: result.stdout ? result.stdout.split(/\s+/).filter(Boolean) : [],
    error: result.ok ? null : result.stderr,
  };
}

async function recentActions() {
  const fallback = await run(
    "gh",
    [
      "run",
      "list",
      "--repo",
      "YiniRuohong/neuq-animate",
      "--workflow",
      "Cloudflare fallback",
      "--limit",
      "3",
    ],
    { timeout: 20_000 },
  );
  const deploy = await run(
    "gh",
    [
      "run",
      "list",
      "--repo",
      "YiniRuohong/neuq-animate",
      "--workflow",
      "Deploy production",
      "--limit",
      "5",
    ],
    { timeout: 20_000 },
  );
  return { fallback, deploy };
}

function classify({ urls: urlResults, nodes, dns, actions }) {
  const red = [];
  const warn = [];
  const ok = [];

  for (const item of urlResults) {
    if (item.ok && item.status && item.status < 500) ok.push(`${item.url} HTTP ${item.status}`);
    else red.push(`${item.url} failed: ${item.error ?? `HTTP ${item.status ?? "unknown"}`}`);
  }

  const healthyNodes = nodes.filter((node) => node.ok);
  const unhealthyNodes = nodes.filter((node) => !node.ok);
  if (healthyNodes.length > 0) ok.push(`GoEdge healthy nodes: ${healthyNodes.map((n) => `${n.region}/${n.ip}`).join(", ")}`);
  if (healthyNodes.length === 0) red.push("No healthy GoEdge node responded to api.neuq-ani.me/health");
  for (const node of unhealthyNodes) {
    warn.push(`GoEdge ${node.region}/${node.ip} unhealthy or unreachable: ${node.error ?? node.body}`);
  }

  const dnsIps = new Set(dns.flatMap((entry) => entry.ips));
  const healthyIps = new Set(healthyNodes.map((node) => node.ip));
  for (const entry of dns) {
    if (entry.ips.length === 0) red.push(`${entry.domain} has no public A records from 1.1.1.1`);
  }
  for (const ip of dnsIps) {
    if (ip === originIp) {
      warn.push(`DNS includes origin ${originIp}; this is expected only during Cloudflare fallback mode`);
    } else if (!healthyIps.has(ip)) {
      warn.push(`DNS includes ${ip}, but this run did not confirm it healthy`);
    }
  }
  for (const node of healthyNodes) {
    if (!dnsIps.has(node.ip)) warn.push(`Healthy GoEdge ${node.region}/${node.ip} is not currently in public DNS`);
  }

  if (actions.fallback.ok) ok.push(`GitHub fallback runs available: ${actions.fallback.stdout.split("\n")[0]}`);
  else warn.push(`Could not read Cloudflare fallback workflow via gh: ${actions.fallback.stderr}`);

  if (actions.deploy.ok) ok.push(`GitHub deploy runs available: ${actions.deploy.stdout.split("\n")[0]}`);
  else warn.push(`Could not read deploy workflows via gh: ${actions.deploy.stderr}`);

  return { ok, warn, red };
}

const [urlResults, nodes, dns, actions] = await Promise.all([
  Promise.all(urls.map(checkUrl)),
  Promise.all(goedgeNodes.map(checkNode)),
  Promise.all(domains.map(digDomain)),
  recentActions(),
]);

const summary = classify({ urls: urlResults, nodes, dns, actions });

const report = {
  checkedAt: new Date().toISOString(),
  baseline: {
    domains,
    originIp,
    goedgeNodes,
    expectedMode: "GoEdge DNS-only when healthy; Cloudflare proxied origin only during fallback",
  },
  urls: urlResults,
  goedgeNodeHealth: nodes,
  publicDnsA: dns,
  githubActions: {
    fallback: actions.fallback.ok ? actions.fallback.stdout.split("\n") : { error: actions.fallback.stderr },
    deploy: actions.deploy.ok ? actions.deploy.stdout.split("\n") : { error: actions.deploy.stderr },
  },
  summary,
};

console.log(JSON.stringify(report, null, 2));
