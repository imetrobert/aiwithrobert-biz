# Common edits — recipes (biz.aiwithrobert.com)

Every recipe ends the same way: run `python3 scripts/check_site.py` and `python3 scripts/check_content_sync.py`
(or just push to `main`: CI rebuilds the bundle, CSS, versions, French page and generated pages, runs both checks and
commits the result). Never hand-edit `fr/index.html`, `js/bundle.js`, `css/styles.css`, `services/`, `articles/`, `fr/services/`,
`fr/articles/`, and never touch the `?v=` numbers.

Rule for any visible text with `data-i18n="key"`: change the SAME English text in `index.html` AND in `js/i18n.js` (en),
and write the French in `js/i18n.js` (fr). Find a key fast: `grep -n "key-name" index.html js/i18n.js`.

## Change a price
Keys: `price1-amt` to `price4-amt` (Assessment, Workflow Setup, Team Training, Starter Bundle), `pricing-also` (talks, monthly
support, extra help), `pricing-note`. Edit in `index.html` + `js/i18n.js` (en + fr), then ALSO:
- `llms.txt` Pricing line
- FAQ answer `faq-a-cost` (if it quotes the number)
- `ba-math-text` (before/after section) if the Workflow Setup price ($2,000) changes
- JSON-LD `"price"` / offer fields near the top of `index.html` (and `FR_SUBS` in `scripts/build_fr_page.py` if you reword a JSON-LD string)
- the toolkit's `FX_PRICE` (repo aiwithrobert-toolkit) and the invoicing app's `BUSINESS_SERVICES` (`src/lib/services.js`) must stay equal.
`check_site.py` fails if a home-page price is missing from `llms.txt`.

## Add or change a before/after example (`#examples`)
Cards use keys `ba1-` to `ba6-` (`-title`, `-before`, `-after`, `-worth`). To add card 7: copy one `<div class="ba-card">` in
`index.html`, add four `ba7-*` keys in `js/i18n.js` (en + fr), keep the "Illustration: N a week, M minutes saved on each, is X hours a week" line
(hours stay inside the "two to three hours" in `ba-math-text`). Examples are illustrations, never client results, and must be doable
on a low-cost plan (no "runs by itself" claims). The grid is three columns, so keep the count a multiple of three. Subtitle key `ba-subtitle` says how many.

## Add an FAQ
Add `faq-q-<name>` and `faq-a-<name>` in `index.html` (the FAQ section), `js/i18n.js` (en + fr) and the FAQPage JSON-LD in `index.html`
(the French JSON-LD is rebuilt from i18n by `build_fr_page.py`).

## Reword the hero, a section title or a button
`grep -n 'data-i18n="hero-' index.html` (prefixes: `nav-`, `hero-`, `stat-`, `opp-`, `ba-`, `pricing-`/`price1-4-`, `service1-4-`, `process-`/`step1-3-`, `speaking-`,
`about-`/`exp-`, `feas-`/`contact-`, `faq-q-`/`faq-a-`, `footer-`). Meta title/description also live in `js/language.js` and must match `<head>`.

## Change the feasibility check (the one form)
All in `js/feascheck.js`: wording EN/FR (`T`), the booking link and the 3-need limit (`CONFIG`), the verdict fallback table (`SNAPSHOT`).
Live verdicts come from the toolkit ("Publish this table to the website"); only the heading and intro are i18n keys (`feas-title`, `feas-intro`).
The result shows verdicts only, never how-to, conditions, plan comparison or prices.

## Change the booking link / email / phone
Booking link: `BOOKING` in `js/feascheck.js`. Email `biz@aiwithrobert.com` and phone 514-250-8491 repeat in `index.html` (meta, JSON-LD,
asides, contact line, footer NAP), `js/i18n.js`, `js/language.js`, `llms.txt`. `check_site.py` fails on any other phone or email.

## Add or edit a service page or a guide
Edit `scripts/pages_data.py` only (EN and FR blocks), then `python3 scripts/build_pages.py` (CI also runs it). It rebuilds the pages, the
`PAGES:START/END` block in `sitemap.xml` and `## More pages` in `llms.txt`. No prices beyond the home-page starting prices; no invented clients or
results; keep the independence note naming Bell Canada.

## Capacity (waitlist) mode wording
Inside `js/capacity.js` (CONFIG/COMMON, EN + FR). On/off and schedule are in the toolkit's Site availability. A new inbound button or phone link needs a `data-cap` attribute.

## Logo / colours
Brand navy #11304c, gold #c9a227, gold text #8a6d0b. `logo.svg` is the source, `logo.PNG` the 512x512 export, icons from `scripts/build_favicons.py`
(re-check the 16px icon after re-running it).

## After any content change
Bump `<lastmod>` for `/` and `/fr/` in `sitemap.xml`. The IndexNow workflow pings search engines on push.
