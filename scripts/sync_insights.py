#!/usr/bin/env python3
"""Bake the latest blog issue (title, link, date) into the Insights section of index.html.

Reads https://www.imetrobert.com/blog/feed.xml (public RSS, newest first) and rewrites the text between
<!-- INSIGHTS:START --> and <!-- INSIGHTS:END -->. Run daily by .github/workflows/sync-insights.yml; commits only on change.
If the feed cannot be read the page is left as it is (a stale title is better than a broken section).
The blog is English only, so the French page shows the same English title; its label and note are i18n keys.
Usage: python3 scripts/sync_insights.py [--feed FILE_OR_URL]
"""
import html
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

FEED = "https://www.imetrobert.com/blog/feed.xml"
UTM = "?utm_source=biz-site&utm_campaign=insights-latest"
START, END = "<!-- INSIGHTS:START -->", "<!-- INSIGHTS:END -->"


def latest(src):
    if src.startswith("http"):
        raw = urllib.request.urlopen(urllib.request.Request(src, headers={"User-Agent": "aiwithrobert-biz-sync"}), timeout=30).read()
    else:
        raw = open(src, "rb").read()
    item = ET.fromstring(raw).find("channel/item")
    if item is None:
        raise ValueError("feed has no items")
    title = (item.findtext("title") or "").strip()
    link = (item.findtext("link") or "").strip()
    when = parsedate_to_datetime(item.findtext("pubDate")).strftime("%B %Y") if item.findtext("pubDate") else ""
    if not title or not link.startswith("https://www.imetrobert.com/blog/"):
        raise ValueError("unexpected feed item")
    return title, link, when


def block(title, link, when):
    d = f'<span class="insights-date">{html.escape(when)}</span>' if when else ""
    return f'{START}<a href="{html.escape(link + UTM, quote=True)}" rel="noopener" class="insights-title-link">{html.escape(title)}</a>{d}{END}'


def main():
    src = sys.argv[sys.argv.index("--feed") + 1] if "--feed" in sys.argv else FEED
    try:
        title, link, when = latest(src)
    except Exception as e:
        print(f"Insights: feed not read ({e}); page left as is.")
        return 0
    s = open("index.html", encoding="utf-8").read()
    new = re.sub(re.escape(START) + ".*?" + re.escape(END), lambda m: block(title, link, when), s, count=1, flags=re.S)
    if new == s:
        print("Insights: already up to date.")
        return 0
    open("index.html", "w", encoding="utf-8").write(new)
    print(f"Insights: latest issue is now '{title}' ({when}).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
