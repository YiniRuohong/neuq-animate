# neuq-animate

火占术动漫社首页，生产域名为 `https://neuq-ani.me/`。

## Development

首页导航、ACGN 导视、QQ 群入口、社团工具页、近期活动、作品方向与页脚信息统一在 `src/home-content.js` 中维护。

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

- `main`: GitHub Actions 构建后同步到源站 `/opt/neuq-ani/laser_webpanel/deploy/sites/huozhanshu`。
- `preview` / `develop` / `test`: 可通过 Vercel workflow 生成预览部署。

生产部署需要仓库 Secrets：

- `ORIGIN_SSH_HOST`
- `ORIGIN_SSH_USER`
- `ORIGIN_SSH_KEY`
- `ORIGIN_SSH_PORT` optional, default `22`

Vercel 预览需要仓库 Secrets：

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
