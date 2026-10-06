# AGENTS.md

Personal GitHub Pages site (https://alexey-avdeev.com).

## Deploy

- `master` is production: any push to `master` is live immediately (GitHub Pages user site). No PR preview, no review gate.
- Active development happens in the `redesign` branch. Do **not** merge/push `redesign` to `master` without explicit approval.
- `CNAME` at repo root pins the custom domain — never delete or move it.

## Stack

- **Eleventy 3.x (ESM)** generates static HTML from `src/` into `_site/`.
- **Tailwind CSS 4.x** is compiled via PostCSS (`@tailwindcss/postcss`) from `src/styles/main.css` to `_site/assets/css/main.css`.
- Nunjucks templates live in `src/_includes/` and `src/_layouts/`.
- Site data (title, contacts, talks) lives in `src/_data/`.

## Build

```bash
npm install
npm run build   # css + site → _site/
npm start       # dev server with watch
```

## Don't touch

- Analytics are intentional: GTM `GTM-P6SW86D` + Yandex.Metrika `29136765`, inline in templates.
- `yandex_719c3d8a381534e7.html` (root) is domain-ownership verification — don't delete.
- `CNAME`, `robots.txt`, `favicon.ico`, `apple-touch-icon.png` are preserved as-is.

## Verify

- `npm run build` must pass with no errors.
- Check `_site/` structure, open `_site/index.html` locally, and confirm links + responsive layout.
