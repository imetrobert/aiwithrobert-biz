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

Prices: the home-page Pricing section (`pricing-*`, `price1-4-*` keys) is the one place with prices; also in `llms.txt`. Change a price in index.html + js/i18n.js (en+fr) + llms.txt together. The toolkit's Proposal builder has its own copy (FX_PRICE in imetrobert/aiwithrobert-toolkit index.html): keep them equal. The before/after examples section (`#examples`, `ba-*` keys) quotes the Workflow Setup starting price ($2,000) in `ba-math-text`: update it with any price change. Its examples are labelled illustrations, never client results; keep each one to things a low-cost plan can do (no "runs by itself" claims). Discovery-call model otherwise. Brand: navy #11304c, gold #c9a227, gold text #8a6d0b.
Version strings: never edit the `?v=` values; `scripts/stamp_assets.py` sets them from file contents (CI runs it).
Logo: `logo.svg` is the source; `logo.PNG` a 512×512 transparent export; icons from `scripts/build_favicons.py`
(note: its 16px bulb-only step was written for the blue/teal seniors bubble — re-check the 16px icon if you re-run it
with the gold logo).

**Indexing (live since launch):** pages are indexable (no `noindex`), `sitemap.xml` lists `/` and `/fr/` with hreflang (bump `lastmod` on content changes), `robots.txt` advertises it, and `.github/workflows/indexnow.yml` pings IndexNow on every content push (key file `<key>.txt` at the repo root must stay published).

## Service pages and articles — generated, edit the data file

Pages at `services/<slug>/` and `articles/<slug>/` (EN) and `fr/services/…`, `fr/articles/…` (FR) are **generated** by
`python3 scripts/build_pages.py` from `scripts/pages_data.py`. Edit wording in the data file, never the generated HTML.
The script also refreshes the `PAGES:START/END` block in `sitemap.xml` and the `## More pages` section of `llms.txt`;
the IndexNow workflow submits every sitemap URL. The footer link row is `footer-pages` (i18n, EN/FR). Keep the same rules
as the home page: no prices beyond the home-page starting prices, no invented clients or results, independence note naming Bell Canada.

## Contact form: removed (history)

The old contact form and its "Help me prepare" block no longer exist (2026-11-12); `js/form.js` is two no-op functions. The only form is
the free feasibility check (below). Its saved fields keep the old names the toolkit reads: `team_size`, `tool_chatgpt|claude|gemini|copilot|none|unsure`,
`personal_info` (yes/no/not-sure), and `need_writing|documents|reuse|own_data|schedule|automatic|images|office_files|research`
(= write, files, reuse, own, sched, auto, img, office, web). Keep those names stable.

## JSON-LD wording changes

The French page builder (`scripts/build_fr_page.py`, `FR_SUBS`) matches exact English JSON-LD strings in `index.html`. If you reword a JSON-LD string, update the matching entry in `FR_SUBS` too, or the Build Assets workflow fails. Run `python3 scripts/build_fr_page.py` locally before pushing.

## At-capacity mode (waitlist instead of inbound requests)

`js/capacity.js` is a standalone script (NOT in `js/bundle.js`) loaded on every page, including the generated service and
guide pages (`scripts/build_pages.py`). It calls the public Supabase RPC `site_capacity('business')`; the owner switches the
mode on/off and schedules it in the toolkit ("Site availability"). When on: `data-cap="hide"` elements are hidden (phone
link, booking button, contact form, discovery box), `data-cap="wait"` buttons become "Join the waitlist", `data-cap="swap"`
call-to-action boxes become a short notice, and the contact section shows the notice + waitlist form (RPC `join_waitlist`,
rows read in the toolkit's Waitlist screen). Notice wording EN/FR lives inside `capacity.js` (CONFIG/COMMON). New inbound CTA
or phone link on the page? Add the right `data-cap` attribute. The phone stays in JSON-LD/NAP on purpose. Tables and
functions: `migration/site_capacity.sql` in the toolkit repo.

## Free feasibility check (main call to action)

`js/feascheck.js` is a standalone script (NOT in `js/bundle.js`), loaded on the home page only. It renders the form and the instant
result into `<div id="feas-check">` in the contact section, in both open and at-capacity modes. Wording EN/FR, the booking link and
the 3-need limit live inside that file (T / CONFIG); only the heading and intro are i18n keys (`feas-title`, `feas-intro`).
Verdicts come from the capability table: public RPC `public_caps` (published from the toolkit), with the `SNAPSHOT` in the file as
fallback. The result shows verdicts only, on purpose: no how-to, conditions, plan comparison or prices. Each check is saved with
`submit_inquiry` (`extra.kind = "feasibility"`; same `team_size`, `tool_*`, `need_*`, `personal_info` names as the contact form) and
becomes a lead in the toolkit by itself; at capacity it also calls `join_waitlist`. A visitor arriving with `utm_source`/`utm_campaign` in the URL (the imetrobert.com blog links do this) has them saved as `extra.source`, shown on the lead's note. It is the ONLY form on the site (2026-11-12): the old
contact form, its "Help me prepare" block and the at-capacity waitlist form were removed, `js/form.js` is now two no-op functions,
and other questions go by email (`contact-other` line, Speaking button = mailto). The two contact-form sections above describe
the removed form and are kept only as history for the field names. Short links: `/feasibility/`, `/feasability/`, `/faisabilite/`
(noindex redirects, also on aiwithrobert.com). Table/function: `migration/feasibility_public.sql` in the toolkit repo.
