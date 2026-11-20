The marketing site for **mefinx**, the personal CRM at https://mefinx.app, served at **mefinx.com**.
SvelteKit (Svelte 5 runes) + Tailwind CSS v4, fully prerendered with `adapter-static` and served by
a Cloudflare Worker with static assets. See README.md for layout and deployment.

## Commands

```bash
pnpm dev      # Vite dev server
pnpm check    # svelte-check + worker typecheck
pnpm lint     # prettier --check
pnpm build    # static site into build/
```

## Rules

- Copy lives in `src/lib/content.ts`, not in components.
- Imports from `src/lib` use the `#lib/...` alias with the `.ts` extension (`#lib/content.ts`).
- Brand tokens are in the `@theme` block of `src/routes/layout.css`; use them (`text-muted`,
  `border-line`, `bg-gradient-brand`, ...) instead of raw colours.
- The site is dark-only. Sections fade in with `data-reveal {@attach reveal}`.
- There is no pricing, testimonials or contact page; don't add invented quotes or plans. Claims
  about the app should be checkable against the app repo (its README and `/privacy` page).
