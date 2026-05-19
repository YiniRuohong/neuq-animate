# CDN Fallback

Production normally uses Cloudflare DNS-only records pointing at GoEdge edge nodes.

If GoEdge is attacked or all GoEdge nodes are unavailable, use the manual GitHub
Actions fallback workflow in this repository:

- `mode=cloudflare`: replace public DNS with proxied Cloudflare A records to the origin.
- `mode=goedge`: restore DNS-only A records to GoEdge nodes.

Required GitHub Secrets:

- `CF_API_TOKEN`: Cloudflare API token with DNS edit permission for `neuq-ani.me`.
- `CF_ZONE_ID`: Cloudflare zone id for `neuq-ani.me`.

Current constants:

- Origin: `202.61.246.240`
- GoEdge nodes: `47.236.2.125`, `103.232.213.191`
- Domains:
  - `neuq-ani.me`
  - `www.neuq-ani.me`
  - `oc.neuq-ani.me`
  - `laser.neuq-ani.me`
  - `api.neuq-ani.me`

This workflow is deliberately manual. Full automatic failover should be done with
Cloudflare Load Balancing health checks or a separate monitor that triggers the
same DNS replacement logic.

