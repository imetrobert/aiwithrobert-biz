# Reference (moved out of CLAUDE.md to keep it short)

## (from CLAUDE.md) Service pages and articles — generated, edit the data file

Pages at `services/<slug>/` and `articles/<slug>/` (EN) and `fr/services/…`, `fr/articles/…` (FR) are **generated** by
`python3 scripts/build_pages.py` from `scripts/pages_data.py`. Edit wording in the data file, never the generated HTML.
The script also refreshes the `PAGES:START/END` block in `sitemap.xml` and the `## More pages` section of `llms.txt`;
the IndexNow workflow submits every sitemap URL. The footer link row is `footer-pages` (i18n, EN/FR). Keep the same rules
as the home page: no prices beyond the home-page starting prices, no invented clients or results, independence note naming Bell Canada.

## (from CLAUDE.md) The Briefing section (blog link)

`#insights` + nav item link to the Business-branded blog (www.imetrobert.com/blog/). The latest-issue line is baked by `scripts/sync_insights.py`
(daily workflow `sync-insights.yml`); keys `nav-insights`, `insights-*`. See `docs/common-edits.md`.

## (from CLAUDE.md) Contact form: removed (history)

The old contact form and its "Help me prepare" block no longer exist (2026-11-12); `js/form.js` is two no-op functions. The only form is
the free feasibility check (below). Its saved fields keep the old names the toolkit reads: `team_size`, `tool_chatgpt|claude|gemini|copilot|none|unsure`,
`personal_info` (yes/no/not-sure), and `need_writing|documents|reuse|own_data|schedule|automatic|images|office_files|research`
(= write, files, reuse, own, sched, auto, img, office, web). Keep those names stable. The check also has a tenth choice "Something else" (`need_other` = Yes plus the typed text in `need_other_text`, max 200 characters, counts toward the 3-need limit, never gets a verdict): the result says it will be read and, only when the site is open, that he replies within 1 to 2 business days; at capacity it promises no reply. The plan question also has an "Other" choice (`plan` = other, `plan_other_text`; wording `planOther`, `rOther`). Wording `otherPh`, `eOther`, `otherChip`, `sOtherOpen`, `sOtherCap` in feascheck.js.

## (from CLAUDE.md) JSON-LD wording changes

The French page builder (`scripts/build_fr_page.py`, `FR_SUBS`) matches exact English JSON-LD strings in `index.html`. If you reword a JSON-LD string, update the matching entry in `FR_SUBS` too, or the Build Assets workflow fails. Run `python3 scripts/build_fr_page.py` locally before pushing.

## (from CLAUDE.md) At-capacity mode (waitlist instead of inbound requests)

`js/capacity.js` is a standalone script (NOT in `js/bundle.js`) loaded on every page, including the generated service and
guide pages (`scripts/build_pages.py`). It calls the public Supabase RPC `site_capacity('business')`; the owner switches the
mode on/off and schedules it in the toolkit ("Site availability"). When on: `data-cap="hide"` elements are hidden (phone
link, booking button, contact form, discovery box), `data-cap="wait"` buttons become "Join the waitlist", `data-cap="swap"`
call-to-action boxes become a short notice, and the contact section shows the notice + waitlist form (RPC `join_waitlist`,
rows read in the toolkit's Waitlist screen). Notice wording EN/FR lives inside `capacity.js` (CONFIG/COMMON). New inbound CTA
or phone link on the page? Add the right `data-cap` attribute. The phone stays in JSON-LD/NAP on purpose. Tables and
functions: `migration/site_capacity.sql` in the toolkit repo.

## (from CLAUDE.md) Free feasibility check (main call to action)

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

## (from CLAUDE.md) Traffic from the blog and QR (utm tags; do not break)

Visits tagged `utm_source` / `utm_campaign` are saved on the lead by `js/feascheck.js` as `extra.source` ("source/campaign") and shown in the toolkit's "Where leads come from".
Tags in use: `linkedin/issue-YYYY-MM[-d1|-d2|-d3|-fr]` (LinkedIn posts), `imetrobert-blog/issue-YYYY-MM[-related]` (links inside blog issues), `imetrobert-blog/plans-page`, `imetrobert-blog/blog-home` and `imetrobert-blog/adoption-page` (buttons on the blog home and adoption-data page), `qr/talk`.
The blog's `scripts/promo_kit.py` (repo imetrobert.github.io, table `TARGETS`) links LinkedIn follow-up posts to the service/article pages by slug, and
`utils.RELATED_PAGES` there links three pages from each issue. **If you rename, remove or add a page in `scripts/pages_data.py`, update those two lists in the blog repo too**
(the blog's test only checks they point at biz.aiwithrobert.com, not that the page exists). Keep the `#feas-check` anchor on the home page.
