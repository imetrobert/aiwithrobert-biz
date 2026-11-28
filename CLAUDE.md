# biz.aiwithrobert.com — content editing guide

Static site, same architecture as seniors.aiwithrobert.com (repo imetrobert/aiwithrobert). Edit only
**`index.html`** and **`js/i18n.js`** for content. Never hand-edit generated files:
`fr/index.html`, `js/bundle.js`, `css/styles.css` (CI rebuilds them on push to `main`;
locally: `python3 scripts/build_fr_page.py`).

**After ANY edit run `python3 scripts/check_site.py` and `python3 scripts/check_content_sync.py`** (both print OK or the exact problem).
Push to `main` and CI does the rest on its own: rebuilds `js/bundle.js` and `css/styles.css`, stamps the `?v=` cache versions
(`scripts/stamp_assets.py`, content hash, never bump by hand), regenerates `fr/index.html` and all service/guide pages, runs both
checks, and commits the result. Step-by-step recipes for the likely edits (change a price, add an example card, new FAQ, reword a
headline, new service page) are in `docs/common-edits.md`: read that instead of exploring.

**Golden rule:** any element with `data-i18n="key"` must have the same English text in `index.html`
and in `js/i18n.js` (`en`), plus a `fr` entry. Check with `python3 scripts/check_content_sync.py`.

Key prefixes: `nav-`, `hero-`, `stat-`, `opp-` (the "already paying for AI" section), `entity-aside`/`geo-summary`, `service1-4-`, `process-`/`step1-3-`,
`speaking-`, `about-`/`exp-`, `contact-`/`form-`/`free-call-`/`success-`, `faq-q-`/`faq-a-`, `footer-`.

Facts repeated for SEO (update all): phone 514-250-8491, email biz@aiwithrobert.com — in `index.html`
(meta, JSON-LD, aside blocks, contact, footer NAP), `js/i18n.js` (en + fr), `js/language.js` (title/description
strings, must match `<head>` and `scripts/build_fr_page.py`), `llms.txt`.

**Freshness dates are automatic:** `scripts/stamp_dates.py` (run by CI) sets the home-page `lastmod` in `sitemap.xml` and the guide/service pages' `lastmod` and `dateModified` from the date of the last real edit (git history, ignoring the bot's `chore:` commits). `PUBLISHED` in the page builder is the fixed first-publication date. Never edit these dates by hand.

Prices: the home-page Pricing section (`pricing-*`, `price1-4-*` keys) is the one place with prices; also in `llms.txt`. Change a price in index.html + js/i18n.js (en+fr) + llms.txt together. The toolkit's Proposal builder has its own copy (FX_PRICE in imetrobert/aiwithrobert-toolkit index.html): keep them equal. The before/after examples section (`#examples`, `ba-*` keys) quotes the Workflow Setup starting price ($2,000) in `ba-math-text`: update it with any price change. Its examples are labelled illustrations, never client results; keep each one to things a low-cost plan can do (no "runs by itself" claims). Discovery-call model otherwise. Brand: navy #11304c, gold #c9a227, gold text #8a6d0b.
Version strings: never edit the `?v=` values; `scripts/stamp_assets.py` sets them from file contents (CI runs it).
Logo: `logo.svg` is the source; `logo.PNG` a 512×512 transparent export; icons from `scripts/build_favicons.py`
(note: its 16px bulb-only step was written for the blue/teal seniors bubble — re-check the 16px icon if you re-run it
with the gold logo).

**Indexing (live since launch):** pages are indexable (no `noindex`), `sitemap.xml` lists `/` and `/fr/` with hreflang (bump `lastmod` on content changes), `robots.txt` advertises it, and `.github/workflows/indexnow.yml` pings IndexNow on every content push (key file `<key>.txt` at the repo root must stay published).

If something breaks (red check, wrong result, no access): `docs/if-something-breaks.md` (open it first).

## Gotchas that break things (detail in the longer notes)
- Photos: portrait `profile.jpg` and hero `hero-business.jpg` in the repo root. Upload the new photo with the SAME file name; the "Make WebP and smaller copies" workflow rebuilds `profile.webp`, `hero-business.webp` and the 800-wide copies. English alt text is in `index.html`; the French hero alt is `HERO_ALT_FR` in `scripts/build_fr_page.py`. Recipe: `docs/common-edits.md` "Swap a photo".
- Hero: the headline is the `<h1>` with key `hero-title` (`index.html` line ~414, `js/i18n.js` en and fr), then `hero-tagline`, `hero-area-note`, `hero-cta`. Find any key with `grep -n 'hero-title' index.html js/i18n.js`. The headline text appears only in those places.
- Reword a JSON-LD string: update the matching `FR_SUBS` entry in `scripts/build_fr_page.py` too, or the build fails.
- Keep the `#feas-check` anchor, the feasibility form field names and the `utm_` tags; renaming a page in `scripts/pages_data.py` also needs the blog repo's `promo_kit.py` TARGETS and `utils.RELATED_PAGES` updated.
- New inbound button or phone link: add a `data-cap` attribute (at-capacity mode).

## Longer notes: `docs/reference.md`
Read only the section you need (`grep -n '^## ' docs/reference.md`):
- Service pages and articles — generated, edit the data file
- The Briefing section (blog link)
- Contact form: removed (history)
- JSON-LD wording changes
- At-capacity mode (waitlist instead of inbound requests)
- Free feasibility check (main call to action)
- Traffic from the blog and QR (utm tags; do not break)
