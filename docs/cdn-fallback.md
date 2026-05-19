# CDN Fallback

Production normally uses Cloudflare DNS-only records pointing at GoEdge edge nodes.
The DNS-only records use a short TTL so failover propagates quickly.

If GoEdge is attacked or all GoEdge nodes are unavailable, the scheduled GitHub
Actions fallback workflow checks GoEdge every 5 minutes and can switch DNS to
Cloudflare proxied origin mode.

- `mode=auto`: check GoEdge health; remove unhealthy GoEdge nodes; if all GoEdge
  nodes are unavailable, switch to Cloudflare proxied origin mode.
- `mode=cloudflare`: replace public DNS with proxied Cloudflare A records to the origin.
- `mode=goedge`: restore DNS-only A records to GoEdge nodes.

Required GitHub Secrets:

- `CF_API_TOKEN`: Cloudflare API token with DNS edit permission for `neuq-ani.me`.
- `CF_ZONE_ID`: Cloudflare zone id for `neuq-ani.me`.

Current constants:

- Origin: `202.61.246.240`
- GoEdge nodes:
  - US: `45.202.240.235`
  - JP: `103.232.213.191`
  - HK: `103.247.29.99`
  - SG: `47.236.2.125`
  - DE: `202.61.246.240`
- Domains:
  - `neuq-ani.me`
  - `www.neuq-ani.me`
  - `oc.neuq-ani.me`
  - `laser.neuq-ani.me`
  - `api.neuq-ani.me`

The scheduled workflow intentionally does not automatically restore from
Cloudflare mode back to GoEdge mode. Restore manually with `mode=goedge` after
confirming the attack or outage is over.

For second-level failover and always-on Cloudflare cleaning, use Cloudflare Load
Balancing instead of DNS-only records: Cloudflare should become the first layer,
with GoEdge as the default origin pool and the source server as the fallback
origin pool.
