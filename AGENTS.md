# AGENTS.md

Personal GitHub Pages site (https://alexey-avdeev.com). Single-page static HTML — no build system, no package manager, no CI, no tests.

## Deploy

- `master` is production: any push to `master` is live immediately (GitHub Pages user site). No PR preview, no review gate.
- `CNAME` at repo root pins the custom domain — never delete or move it.

## Styles: SCSS is source, CSS is compiled output

- `assets/sass/` is the source; `assets/css/main.css` (+ `ie8.css`, `ie9.css`, `noscript.css`) are compiled artifacts — both are committed.
- Editing only `.scss` does nothing on the live site; editing only `.css` is lost on the next compile. Change the SCSS, recompile, and commit both:
  `sass assets/sass/main.scss assets/css/main.css` — same for the three other entrypoints (`ie8`, `ie9`, `noscript`); use `--no-source-map` to match the current tree (no `.map` files).
- Template is HTML5 UP "Identity" (old skel framework, legacy `@import` sass syntax). Modern dart-sass compiles it but emits deprecation warnings — expected, don't "fix" the imports as part of unrelated changes.

## Don't touch

- Analytics are intentional, inline in `index.html`: GTM `GTM-P6SW86D` + Yandex.Metrika `29136765`.
- `yandex_719c3d8a381534e7.html` (root) is domain-ownership verification — don't delete.
- IE shims (`assets/js/html5shiv.js`, `respond.min.js`, `PIE.htc`, conditional-comment CSS/JS in `index.html`) look obsolete but are part of the template — removing them is a product decision, not cleanup.

## Verify

- No lint/test pipeline. Serve locally (`python3 -m http.server`) and check the page.
- `index.html` is Prettier-formatted (`.prettierrc`: 2 spaces, width 120). `404.html` is a standalone page with inline styles and is not Prettier-formatted — don't reformat it as a drive-by.
