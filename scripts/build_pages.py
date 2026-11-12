#!/usr/bin/env python3
"""build_pages.py — generates the service pages and articles from scripts/pages_data.py.

Outputs (committed; do not hand-edit):
  services/<slug>/ and articles/<slug>/            English
  fr/services/<slug>/ and fr/articles/<slug>/      Quebec French
and refreshes the PAGES block in sitemap.xml and the "## More pages" section of llms.txt.
Run:  python3 scripts/build_pages.py
"""
import html, json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from pages_data import PAGES

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://biz.aiwithrobert.com"
PERSON = "https://www.imetrobert.com/#robert-simon"
BIZ = BASE + "/#business"
DATE = "2026-11-10"
EMAIL = "biz@aiwithrobert.com"
E = html.escape

UI = {
 "en": dict(lang="en", home="/", tag="for Business", back="← Back to the main page", related="Related reading",
            switch="Français", sitename="AI with Robert for Business", contact="/#contact",
            cta="Want to see where AI could save your team time? Book a free discovery call.", book="Book a free discovery call", write="Write",
            indep="AI with Robert for Business is an independent practice of Robert Simon. It is not affiliated with, sponsored by or endorsed by any employer, including Bell Canada.",
            byline="By Robert Simon · Greater Montréal", home_label="AI with Robert for Business — home", bc_home="Home",
            area="Greater Montréal", audience="Small businesses and professional practices of about 5 to 20 people", kinds={"service": "Service", "article": "Article"}),
 "fr": dict(lang="fr", home="/fr/", tag="pour entreprises", back="← Retour à la page principale", related="À lire aussi",
            switch="English", sitename="AI with Robert pour entreprises", contact="/fr/#contact",
            cta="Envie de voir où l’IA pourrait faire gagner du temps à votre équipe? Réservez un appel découverte gratuit.", book="Réserver un appel découverte gratuit", write="Écrire",
            indep="AI with Robert pour entreprises est une pratique indépendante de Robert Simon. Elle n’est affiliée à aucun employeur, ni commanditée ou approuvée par aucun d’eux, y compris Bell Canada.",
            byline="Par Robert Simon · Grand Montréal", home_label="AI with Robert pour entreprises — accueil", bc_home="Accueil",
            area="Grand Montréal", audience="Petites entreprises et pratiques professionnelles d’environ 5 à 20 personnes", kinds={"service": "Service", "article": "Article"}),
}
CSS = """*{box-sizing:border-box}body{margin:0;font:18px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#11304c;background:#fff}
a{color:#8a6d0b}header{background:#fbf6e3;border-bottom:1px solid #eadfae}.bar{max-width:46rem;margin:0 auto;padding:.7rem 1.1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.brand{display:flex;align-items:center;gap:.6rem;text-decoration:none;color:#11304c;font-weight:700}.brand img{width:44px;height:44px}.brand small{display:block;color:#8a6d0b;font-weight:600;font-size:.8rem}
.lang{font-size:.95rem;font-weight:600}main{max-width:46rem;margin:0 auto;padding:1.6rem 1.1rem 2.5rem}
h1{font-size:1.9rem;line-height:1.25;margin:.2rem 0 .8rem}h2{font-size:1.3rem;margin:1.8rem 0 .5rem;color:#11304c}.meta{color:#5b6b7b;font-size:.9rem;margin:0 0 1rem}
.lead{font-size:1.15rem}li{margin:.3rem 0}.cta{background:#fbf6e3;border:1px solid #eadfae;border-radius:12px;padding:1.1rem 1.2rem;margin:2rem 0}
.cta p{margin:0 0 .7rem;font-weight:600}.btn{display:inline-block;background:#c9a227;color:#11304c;text-decoration:none;font-weight:700;padding:.65rem 1.1rem;border-radius:8px;margin:.2rem .4rem .2rem 0}
.btn.alt{background:#fff;color:#11304c;border:2px solid #c9a227}.rel ul{padding-left:1.1rem}footer{border-top:1px solid #eadfae;background:#fdfaf0;padding:1.2rem 1.1rem;text-align:center;font-size:.85rem;color:#5b6b7b}footer p{max-width:40rem;margin:.3rem auto}
@media(max-width:480px){body{font-size:17px}h1{font-size:1.6rem}}"""

def folder(p, lang):   # services/<slug>/ or articles/<slug>/
    return {"service": "services", "article": "articles"}[p["kind"]]

def url(lang, p):
    d = p[lang]
    return f"{BASE}/{folder(p, lang)}/{d['slug']}/" if lang == "en" else f"{BASE}/fr/{folder(p, lang)}/{d['slug']}/"

def render(lang, p):
    d, u = p[lang], UI[lang]
    other = "fr" if lang == "en" else "en"
    here, there = url(lang, p), url(other, p)
    by_id = {x["id"]: x for x in PAGES}
    rel = "".join(f'<li><a href="{url(lang, by_id[i])}">{E(by_id[i][lang]["h1"])}</a></li>' for i in p["related"])
    faq = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": t}} for q, t in d["faq"]]
    if p["kind"] == "service":
        main = {"@type": "Service", "@id": here + "#service", "name": d["h1"], "description": d["desc"], "url": here,
                "provider": {"@id": BIZ}, "areaServed": {"@type": "AdministrativeArea", "name": u["area"]},
                "audience": {"@type": "Audience", "audienceType": u["audience"]}, "inLanguage": "en-CA" if lang == "en" else "fr-CA"}
    else:
        main = {"@type": "Article", "@id": here + "#article", "headline": d["h1"], "description": d["desc"],
                "inLanguage": "en-CA" if lang == "en" else "fr-CA", "datePublished": DATE, "dateModified": DATE,
                "mainEntityOfPage": here, "author": {"@id": PERSON}, "publisher": {"@id": BIZ}, "about": {"@id": BIZ}}
    graph = [main,
      {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": u["bc_home"], "item": BASE + u["home"]},
        {"@type": "ListItem", "position": 2, "name": d["h1"], "item": here}]},
      {"@type": "FAQPage", "mainEntity": faq}]
    ld = json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, indent=1)
    og_type = "article" if p["kind"] == "article" else "website"
    return f"""<!DOCTYPE html>
<html lang="{u['lang']}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#11304c">
<title>{E(d['title'])}</title>
<meta name="description" content="{E(d['desc'])}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="{here}">
<link rel="alternate" hreflang="{lang}" href="{here}">
<link rel="alternate" hreflang="{other}" href="{there}">
<link rel="alternate" hreflang="x-default" href="{url('en', p)}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="{og_type}">
<meta property="og:site_name" content="{E(u['sitename'])}">
<meta property="og:title" content="{E(d['title'])}">
<meta property="og:description" content="{E(d['desc'])}">
<meta property="og:url" content="{here}">
<meta property="og:image" content="{BASE}/og-share-1200x630.png">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">
{ld}
</script>
<style>{CSS}</style>
</head>
<body>
<header><div class="bar">
<a class="brand" href="{u['home']}" aria-label="{E(u['home_label'])}"><img src="/logo.PNG" alt="" width="44" height="44"><span>AI with Robert<small>{u['tag']}</small></span></a>
<a class="lang" href="{there}" hreflang="{other}" lang="{other}">{u['switch']}</a>
</div></header>
<main>
<p class="meta">{u['byline']}</p>
<h1>{E(d['h1'])}</h1>
<p class="lead">{d['intro']}</p>
{d['body']}
<div class="cta" data-cap="swap"><p>{u['cta']}</p>
<a class="btn" href="{u['contact']}">{u['book']}</a><a class="btn alt" href="mailto:{EMAIL}">{u['write']} {EMAIL}</a></div>
<nav class="rel" aria-label="{u['related']}"><h2>{u['related']}</h2><ul>{rel}</ul></nav>
<p><a href="{u['home']}">{u['back']}</a></p>
</main>
<footer><p>{u['indep']}</p><p data-cap="hide"><a href="mailto:{EMAIL}">{EMAIL}</a></p></footer>
<script defer src="/js/capacity.js?v=20261112b"></script>
</body>
</html>
"""

def write_pages():
    for p in PAGES:
        for lang in ("en", "fr"):
            d = p[lang]
            base = ROOT if lang == "en" else ROOT / "fr"
            out = base / folder(p, lang) / d["slug"] / "index.html"
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(render(lang, p), encoding="utf-8")
            assert len(d["desc"]) <= 175, (d["slug"], len(d["desc"]))

def sitemap():
    f = ROOT / "sitemap.xml"; s = f.read_text(encoding="utf-8")
    s = re.sub(r"\n?\s*<!-- PAGES:START -->.*?<!-- PAGES:END -->\n?", "\n", s, flags=re.S)
    blocks = []
    for p in PAGES:
        for lang in ("en", "fr"):
            blocks.append(f"""  <url>
    <loc>{url(lang, p)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="{url('en', p)}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="{url('fr', p)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="{url('en', p)}"/>
    <lastmod>{DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>""")
    block = "\n  <!-- PAGES:START -->\n" + "\n\n".join(blocks) + "\n  <!-- PAGES:END -->\n"
    s = s.replace("</urlset>", block + "\n</urlset>")
    f.write_text(s, encoding="utf-8")

def llms():
    f = ROOT / "llms.txt"; s = f.read_text(encoding="utf-8")
    s = re.sub(r"\n## More pages\n.*?<!-- PAGES:END -->\n", "\n", s, flags=re.S)
    lines = ["\n## More pages", "Dedicated pages for each service and common question, each in English and in French:"]
    for p in PAGES:
        lines.append(f"- {p['en']['h1']}: {url('en', p)} (French: {url('fr', p)})")
    lines.append("<!-- PAGES:END -->")
    marker = "\n## Independence"
    assert marker in s
    s = s.replace(marker, "\n".join(lines) + "\n" + marker, 1)
    f.write_text(s, encoding="utf-8")

if __name__ == "__main__":
    write_pages(); sitemap(); llms()
    print("OK — wrote", len(PAGES) * 2, "pages, sitemap.xml and llms.txt updated")
