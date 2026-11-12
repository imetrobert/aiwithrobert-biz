# biz.aiwithrobert.com — content editing guide

Static site, same architecture as seniors.aiwithrobert.com (repo imetrobert/aiwithrobert). Edit only
**`index.html`** and **`js/i18n.js`** for content. Never hand-edit generated files:
`fr/index.html`, `js/bundle.js`, `css/styles.css` (CI rebuilds them on push to `main`;
locally: `python3 scripts/build_fr_page.py`).

**Golden rule:** any element with `data-i18n="key"` must have the same English text in `index.html`
and in `js/i18n.js` (`en`), plus a `fr` entry. Check with `python3 scripts/check_content_sync.py`.

Key prefixes: `nav-`, `hero-`, `stat-`, `opp-` (the "already paying for AI" section), `entity-aside`/`geo-summary`, `service1-4-`, `process-`/`step1-3-`,
`speaking-`, `about-`/`exp-`, `contact-`/`form-`/`free-call-`/`success-`, `faq-q-`/`faq-a-`, `footer-`.

Facts repeated for SEO (update all): phone 514-250-8491, email biz@aiwithrobert.com — in `index.html`
(meta, JSON-LD, aside blocks, contact, footer NAP), `js/i18n.js` (en + fr), `js/language.js` (title/description
strings, must match `<head>` and `scripts/build_fr_page.py`), `llms.txt`.

No public prices (discovery-call model). Brand: navy #11304c, gold #c9a227, gold text #8a6d0b.
Logo: `logo.svg` is the source; `logo.PNG` a 512×512 transparent export; icons from `scripts/build_favicons.py`
(note: its 16px bulb-only step was written for the blue/teal seniors bubble — re-check the 16px icon if you re-run it
with the gold logo).

**Indexing (live since launch):** pages are indexable (no `noindex`), `sitemap.xml` lists `/` and `/fr/` with hreflang (bump `lastmod` on content changes), `robots.txt` advertises it, and `.github/workflows/indexnow.yml` pings IndexNow on every content push (key file `<key>.txt` at the repo root must stay published).

## Service pages and articles — generated, edit the data file

Pages at `services/<slug>/` and `articles/<slug>/` (EN) and `fr/services/…`, `fr/articles/…` (FR) are **generated** by
`python3 scripts/build_pages.py` from `scripts/pages_data.py`. Edit wording in the data file, never the generated HTML.
The script also refreshes the `PAGES:START/END` block in `sitemap.xml` and the `## More pages` section of `llms.txt`;
the IndexNow workflow submits every sitemap URL. The footer link row is `footer-pages` (i18n, EN/FR). Keep the same rules
as the home page: no prices, no invented clients or results, independence note naming Bell Canada.

## Contact form: optional "Help me prepare" fields

The `<details class="prep">` block in the contact form (all optional, never in `reqFields` in `js/form.js`) collects what
the toolkit's Feasibility check needs, so Robert can enter an inquiry there before the call. Field names arrive in the
formsubmit.co email as: `team_size` (1 / 2-5 / 6-20 / 21+), `tool_chatgpt|claude|gemini|copilot|none|unsure`,
`personal_info` (yes / no / not-sure), and `need_*` checkboxes that map to Feasibility needs:
`need_writing`=write, `need_documents`=files, `need_reuse`=reuse, `need_own_data`=own, `need_schedule`=sched,
`need_automatic`=auto, `need_images`=img, `need_office_files`=office, `need_research`=web.
(Privacy `personal_info` = priv; team_size = team and the number of users.) Keep these names stable; the labels are i18n keys `form-need-*`, `form-tool-*`, `form-team-*`, `form-privacy-*`.
