# mefinx.com

The marketing site for [mefinx](https://mefinx.app), the personal CRM you talk to. Built with
SvelteKit and Tailwind CSS, prerendered to static HTML and served from a Cloudflare Worker.

It replaces the earlier EmDash version ([shixish/mefinx-site](https://github.com/shixish/mefinx-site)),
with the same look and copy and no CMS.

## Local development

Needs Node 22 or later and pnpm.

```sh
pnpm install
pnpm dev              # http://localhost:5173
pnpm check            # svelte-check, plus the Worker's types
pnpm build            # writes the static site to build/
pnpm preview:worker   # build, then serve it through wrangler as production does
```

## Where things live

| Path                    | What                                                              |
| ----------------------- | ----------------------------------------------------------------- |
| `src/lib/content.ts`    | All of the site's copy: nav, hero, conversation, features, FAQ    |
| `src/lib/components/`   | One component per section, plus header, footer and `<head>` tags  |
| `src/routes/layout.css` | Tailwind setup and the brand tokens (`@theme`)                    |
| `src/lib/reveal.ts`     | Fade-in-on-scroll attachment used by every section                |
| `static/`               | Logo, icons and the hero graph, copied from the app repo          |
| `worker/index.ts`       | Redirects www to the bare domain; everything else is static files |
| `wrangler.jsonc`        | Worker config and the mefinx.com custom domains                   |

The site is dark-only, like the app. Brand colours mirror the app's `styles.css`: the logo's cyan,
magenta and amber, and the graph's colours for people (blue), places (amber) and events (green).
Claims about the app should be checkable against the app repo (its README and `/privacy` page);
don't add invented quotes or pricing.

Feature icons are [Phosphor](https://phosphoricons.com) icons imported as components through
`unplugin-icons` (`~icons/ph/<name>`); only the ones imported ship.

## Deploying

CI builds every push and pull request. Pushes to `main` deploy with `wrangler deploy` once the repo
has `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` Actions secrets; until then the deploy step
is skipped.

`pnpm deploy` builds and deploys from a local machine logged in with `wrangler login`.

The Worker is named `mefinx-com` and owns `mefinx.com` and `www.mefinx.com` as custom domains.
The old EmDash Worker (`mefinx-site`) still exists with no domains attached, and its repo's CI is
disabled so it can't take them back. It, and its D1 database, R2 bucket and KV namespace, can be
deleted once nothing there is needed.
