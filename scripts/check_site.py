#!/usr/bin/env python3
"""
check_site.py — one command that catches the mistakes a content edit usually makes.

Run after any edit (cheap, prints OK or the exact problem):
    python3 scripts/check_site.py
It checks: generated bundle/CSS match their sources; asset ?v= stamps are current;
JSON-LD blocks parse; every #anchor link has a target; phone and email are the same
everywhere; every price on the home page also appears in llms.txt; no stray
placeholder text. (Text agreement between index.html and js/i18n.js is the job of
scripts/check_content_sync.py; the CI also runs it.)
Exit code 0 = clean, 1 = problems.
"""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
bad = []


def read(p):
    return (ROOT / p).read_text(encoding="utf-8")


def cat(files):
    return "".join(read(f) for f in files)


# 1. generated files match their sources (CI rebuilds them; locally run the build)
js_src = ["js/i18n.js", "js/language.js", "js/form.js", "js/ui.js", "js/main.js"]
css_src = ["css/base.css", "css/nav.css", "css/hero.css", "css/sections.css", "css/footer.css", "css/responsive.css"]
if cat(js_src) != read("js/bundle.js"):
    bad.append("js/bundle.js is out of date: cat js/i18n.js js/language.js js/form.js js/ui.js js/main.js > js/bundle.js (CI does this on push)")
if cat(css_src) != read("css/styles.css"):
    bad.append("css/styles.css is out of date: cat the six css/*.css files in order (CI does this on push)")

# 2. cache-busting stamps current
for a in ["css/styles.css", "js/bundle.js", "js/capacity.js", "js/feascheck.js"]:
    h = hashlib.sha1((ROOT / a).read_bytes()).hexdigest()[:8]
    if a + "?v=" + h not in read("index.html"):
        bad.append(f"index.html: {a} version is not current ({h}); run python3 scripts/stamp_assets.py")

# 3. JSON-LD parses
idx = read("index.html")
for i, m in enumerate(re.finditer(r'<script type="application/ld\+json">(.*?)</script>', idx, re.S), 1):
    try:
        json.loads(m.group(1))
    except Exception as e:
        bad.append(f"index.html JSON-LD block {i} is not valid JSON: {e}")

# 4. anchors point somewhere
ids = set(re.findall(r'\bid="([^"]+)"', idx))
for a in sorted(set(re.findall(r'href="#([^"]+)"', idx))):
    if a not in ids:
        bad.append(f'index.html: link to #{a} but no element has id="{a}"')

# 5. contact facts identical everywhere
everything = {p: read(p) for p in ["index.html", "js/i18n.js", "js/language.js", "llms.txt"]}
for p, t in everything.items():
    for ph in set(re.findall(r"\(?\b(\d{3})[\)\s.-]+(\d{3})[\s.-]+(\d{4})\b", t)):
        if "".join(ph) != "5142508491":
            bad.append(f"{p}: unexpected phone number {'-'.join(ph)} (expected 514-250-8491)")
    for em in set(re.findall(r"[\w.+-]+@[\w-]+(?:\.[\w-]+)*\.[A-Za-z]+", t)):
        if em.lower() not in ("biz@aiwithrobert.com",):
            bad.append(f"{p}: unexpected email {em} (expected biz@aiwithrobert.com)")

# 6. every price on the home page is also in llms.txt
en = read("js/i18n.js").split("fr: {")[0] if "fr: {" in read("js/i18n.js") else read("js/i18n.js")
prices = set(re.findall(r"'(?:price\d-amt|pricing-also)':\s*'([^']*\$[\d,]+[^']*)'", en))
for pr in re.findall(r"\$\d[\d,]*\d", " ".join(prices)):
    if pr not in read("llms.txt"):
        bad.append(f"price {pr} is on the home page but not in llms.txt")
if "$2,000" not in re.search(r"'ba-math-text':\s*'([^']*)'", en).group(1):
    bad.append("ba-math-text no longer quotes the $2,000 Workflow Setup price: update it with the price")

# 7. placeholders
for p in ["index.html", "js/i18n.js"]:
    for w in ("TODO", "FIXME", "lorem ipsum"):
        if w.lower() in read(p).lower():
            bad.append(f"{p} contains '{w}'")

if bad:
    print("PROBLEMS:")
    print("\n".join(" - " + b for b in bad))
    sys.exit(1)
print("OK: bundle/CSS current, versions stamped, JSON-LD valid, anchors resolve, phone/email/prices consistent")
