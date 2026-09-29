---
name: geo-quiz
description: Rules and workflow for the Geo Quiz Pixel game in this repo. Use whenever adding, editing or fact-checking quiz questions or pixel flags, changing game logic, levels or question drawing, touching the pixel scenes, or rebuilding and republishing the game.
---

# Geo Quiz Pixel

A pixel-art (SNES-style) geography quiz: flags and text questions, 3 lives, combo, one 50/50 per game, 8-bit sounds, animated biplane scenes, local record and a shared ranking on claude.ai. The owner talks in Polish; all game copy is Polish.

## Files

- `geo-quiz/src/bank.js` – question bank (`FLAGS`, `FACTS`), level rules (`ALLOWED`), repeat damping and `buildRound`.
- `geo-quiz/src/shell.html` – styles, screens, game logic, sound, ranking. Placeholders (`<!--MAIN_SVG-->`, `/*BANK*/`, `/*NUMFONT*/` …) are filled by the build.
- `geo-quiz/design/*.dc.html` – the approved design canvas screens; the pixel scenes are copied from here. Do not redraw them.
- `geo-quiz/src/digits-silkscreen.woff2` – Silkscreen subset for digits 0–9 only (Pixelify Sans digits are unreadable: 1/7 and 2/5/8 look alike).
- `geo-quiz/build.py` – builds `geo-quiz/dist/artifact.html` (claude.ai page body) and `index.html` (standalone page for GitHub Pages).

## Question format (bank.js)

Flag row: `[name, level, spec, [3 wrong answers], capital | null, note]`. The fact text is generated as „To flaga: X. Stolica: Y. note”.
Text row: `[level, question, answer, [3 wrong answers], fact shown after answering]`.
Levels: `'easy'` (Chill), `'normal'`, `'hard'` (Hardkor). Keep per-level counts roughly balanced; new batches go in equal parts per level.

## Level rules (do not break)

Defined in `ALLOWED`:
- Chill draws only easy.
- Normal draws normal, and easy with lower weight.
- Hardkor draws hard, and normal with lower weight.

A question may migrate at most ONE level up, never down. Easy never appears in Hardkor; hard never appears in Chill or Normal.
Repeat damping: each question already shown in this browser session gets weight × `REPEAT_FACTOR` (0.08) per showing (sessionStorage key `gq-seen`). Chill repeats sooner because it only has the easy pool; the fix for that is more easy questions, not changing the rule.

## Choosing difficulty

Harder = farther from Europe, more exotic, less talked about (Tuvalu is harder than USA). Easy = Polish/European basics and world-famous facts.

## Fact accuracy bar

- Numbers may be rounded (a peak height need not match to the metre).
- No oversimplification that changes the meaning. The owner's example: saying Sweden has „over 10 000 islands” when it has ~267 000 is wrong. Give the real order of magnitude and name the source or caveat when figures are disputed (e.g. Mont Blanc summit border).
- Politically disputed capitals: state the fact neutrally or omit the capital (Israel uses `null`).
- Wrong answers must be unambiguous: no near-identical flags as distractors (Chad/Romania, Netherlands/Luxembourg), no option that is also a correct reading of the question (e.g. „Kenia” for a mountain → „Mount Kenya”).
- Fact-check every new or edited question before publishing; use web search when available for figures that change over time.

## Pixel flags

The cloth is 60×40 units (`w: 40` for square flags). `spec` supports `bg`, `h` / `v` bands (`eq(...)` for equal widths or `[color, weight]` pairs), Nordic `cross`, `circle`, and `shapes`: `rect`, `poly`, `circle`, `star` (cx, cy, R, rotation°), `line` (x1, y1, x2, y2, thickness). Shapes rasterise to single paths (separate 1-unit rects caused scaling seams).
Do NOT add flags with text (Saudi Arabia, Iraq, Afghanistan), detailed coats of arms (Mexico, Portugal), ornaments (Belarus) or small writing (Brazil). If a pixel version would differ too much from the real flag, drop it. Render a sheet of all flags and look at it before publishing.

## Style

Paper-map palette (ink `#2B1D14`, paper `#F4E6C4`, blue `#2A62A6`, red `#B8341F`, gold `#F2B632`), thick ink borders, hard shadows, Press Start 2P for display text, Pixelify Sans for body, Silkscreen for digits. The owner likes the slow 3–5 frame „GIF” animations with a funny, fierce pilot — keep new art in that spirit and consistent with the canvas.

## Workflow after any change

1. Edit `geo-quiz/src/bank.js` / `shell.html` (never edit `index.html` or `dist/` by hand).
2. `python3 geo-quiz/build.py`
3. Validate in headless Chromium (`executablePath: '/opt/pw-browsers/chromium'`, `playwright-core` in the scratchpad): no page errors; every question has 3 distinct wrong answers ≠ answer; unique ids; many `window.__geoQuiz.buildRound(cat, level)` runs never break the level rules and always return 10 questions. Screenshot new flags.
4. Commit and push to the working branch.
5. Republish both claude.ai artifacts from the built file:
   - with shared ranking (declares `capabilities: {db: {}}`, keep it): https://claude.ai/artifact/M1A2wRXfV8kDmMkazF5Nyx
   - public, no ranking (shared „anyone with the link”; publish without the db capability): https://claude.ai/artifact/6WhF8NVbEgGqaTbVvegM92
   From another conversation pass the URL as `url` (read it first), or a new artifact is created.
Design canvas (reference only): https://claude.ai/artifact/8rpZ65kpTYoKLUgq6LMgZV
