#!/usr/bin/env python3
"""Build the Geo Quiz game from src/shell.html plus the pixel scenes in design/.

Outputs:
  dist/artifact.html  - page body for a claude.ai artifact (no doctype/head)
  ../index.html       - standalone page for GitHub Pages
"""
import base64
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent
DESIGN = ROOT / "design"


def scene(file, start_marker):
    text = (DESIGN / file).read_text(encoding="utf-8")
    start = text.index(start_marker)
    end = text.index("</svg>", start) + len("</svg>")
    svg = text[start:end]
    svg = re.sub(r' style="animation-duration: \{\{dur\}\}"', "", svg)
    svg = re.sub(r'^<svg width="\d+" height="\d+"', "<svg", svg)
    svg = svg.replace("{{accent2}}", "#B8341F").replace("{{accent}}", "#2A62A6")
    assert "{{" not in svg, f"unfilled hole in {file}"
    return svg


COIN = ('<svg class="pix" width="{s}" height="{s}" viewBox="0 0 8 8" aria-hidden="true">'
        '<path fill="#F2B632" d="M2 0h4v1H2z M1 1h6v1H1z M0 2h8v4H0z M1 6h6v1H1z M2 7h4v1H2z"></path>'
        '<path fill="#B7791F" d="M4 2h1v4H4z"></path><path fill="#FFFFFF" d="M2 2h1v1H2z"></path></svg>')
HEART_O = ('M1 0h3v1H1z M5 0h3v1H5z M0 1h1v3H0z M4 1h1v1H4z M8 1h1v3H8z M1 4h1v1H1z M7 4h1v1H7z '
           'M2 5h1v1H2z M6 5h1v1H6z M3 6h1v1H3z M5 6h1v1H5z M4 7h1v1H4z')
HEART_F = 'M1 1h3v1H1z M5 1h3v1H5z M1 2h7v2H1z M2 4h5v1H2z M3 5h3v1H3z M4 6h1v1H4z'


def heart(outline, fill, shine):
    extra = '<path fill="#FFD9CF" d="M2 1h1v1H2z"></path>' if shine else ""
    return (f'<svg class="pix" width="27" height="24" viewBox="0 0 9 8" aria-hidden="true">'
            f'<path fill="{outline}" d="{HEART_O}"></path><path fill="{fill}" d="{HEART_F}"></path>{extra}</svg>')


body = (ROOT / "src" / "shell.html").read_text(encoding="utf-8")
digits = base64.b64encode((ROOT / "src" / "digits-silkscreen.woff2").read_bytes()).decode()
NUMFONT = "".join(
    f"@font-face{{font-family:'{name}';src:url(data:font/woff2;base64,{digits}) format('woff2');"
    f"unicode-range:U+0030-0039;size-adjust:{adjust}%}}"
    for name, adjust in (("GQNum", 110), ("GQNumD", 160))
)
parts = {
    "/*NUMFONT*/": NUMFONT,
    "/*BANK*/": (ROOT / "src" / "bank.js").read_text(encoding="utf-8"),
    "<!--MAIN_SVG-->": scene("Main.dc.html", '<svg width="336" height="180"'),
    "<!--DEFEAT_SVG-->": scene("Defeat.dc.html", '<svg width="336" height="252"'),
    "<!--VICTORY_SVG-->": scene("Victory.dc.html", '<svg width="336" height="252"'),
    "<!--COIN24-->": COIN.format(s=24),
    "<!--COIN18-->": COIN.format(s=18),
    "<!--HEART_LIGHT-->": heart("#FFF6DE", "#B8341F", True),
    "<!--HEART_EMPTY-->": heart("#2B1D14", "#DCC89F", False),
}
for key, value in parts.items():
    assert key in body, key
    body = body.replace(key, value)

(ROOT / "dist").mkdir(exist_ok=True)
(ROOT / "dist" / "artifact.html").write_text(body, encoding="utf-8")

page = ('<!doctype html>\n<html lang="pl">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<meta name="description" content="Pikselowy quiz geograficzny: flagi i ciekawostki, 3 życia, combo i 50/50.">\n'
        '</head>\n<body>\n' + body + '\n</body>\n</html>\n')
(ROOT.parent / "index.html").write_text(page, encoding="utf-8")
print("built", len(body), "bytes")
