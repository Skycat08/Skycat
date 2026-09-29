# Geo Quiz Pixel

Pikselowy quiz geograficzny w stylu gier z SNES-a: flagi i ciekawostki, 3 życia, combo, koło ratunkowe 50/50, dźwięki 8-bit generowane w przeglądarce i animowane sceny z pilotem dwupłatowca.

Zagraj: otwórz `index.html` w przeglądarce albo włącz GitHub Pages dla tego repozytorium (Settings → Pages → gałąź z plikiem `index.html`, folder `/ (root)`).

## Jak to działa

- 10 pytań na rundę, losowanych z bazy 111 pytań (57 flag + 54 ciekawostki). Pytania, które już padły w tej sesji przeglądarki, mają dużo mniejszą szansę na ponowne wylosowanie.
- Poziom zmienia trudność pytań: Chill bierze tylko łatwe, Normal normalne i czasem łatwe, Hardkor trudne i czasem normalne. Pytanie może przejść najwyżej o jeden poziom w górę, nigdy w dół.
- Punkty: 100 / 150 / 200 za odpowiedź (zależnie od poziomu) plus 50 za każdy krok combo, maksymalnie +200.
- 3 błędy kończą grę ekranem porażki. Przejście 10 pytań daje ekran zwycięstwa.
- Rekord zapisuje się w przeglądarce gracza. Wspólny ranking działa tylko w wersji gry opublikowanej na claude.ai.

## Pliki

- `index.html` – gotowa gra (samodzielna strona, bez zależności poza fontami Google).
- `geo-quiz/src/shell.html` – kod gry: style, ekrany, logika, baza pytań.
- `geo-quiz/design/` – projekt ekranów z canvasa (źródło pikselowych scen).
- `geo-quiz/build.py` – skleja grę ze scenami z projektu: `python3 geo-quiz/build.py`.
- `geo-quiz/dist/artifact.html` – ta sama gra w formie strony dla claude.ai.
- Cyfry: font Silkscreen (SIL Open Font License), osadzony tylko dla znaków 0–9.
