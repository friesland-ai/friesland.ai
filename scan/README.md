# AI-Geletterdheidsscan

Interactieve zelfevaluatietool voor docenten, instructeurs, praktijkopleiders en onderwijsteams, gebaseerd op het officiële **UNESCO AI Competency Framework for Teachers (2024)**.

Het project bevat **twee volledig losstaande versies**:
1. **[Friesland.AI Huisstijl](index.html)** (`index.html`) &mdash; Uitgevoerd in de officiële huisstijl van [www.friesland.ai](https://www.friesland.ai).
2. **[Firda MBO Huisstijl](firda.html)** (`firda.html`) &mdash; Het origineel in de herkenbare Firda huisstijl (Spruce groen, Hemelblauw & Goudgeel).

Er zijn bewust **geen koppelingen of wisselopties** tussen beide versies op de sites zelf; beide bestanden opereren 100% autonoom.

---

## 🌟 1. Friesland.AI Versie (`index.html`)

- **Officiële Friesland.AI Merkidentiteit**:
  - Kleurenpalet: Fries Blauw (`#244994`), Pompeblêd Rood (`#c73326`), lichte subtiele achtergronden en slate neutralen.
  - Typografie: Headings & Display in `Outfit`, interface & broodtekst in `Inter`.
  - Ambient background glows (`.bg-glow-blue` en `.bg-glow-red`).
  - Officieel Friesland.AI beeldmerk met pompeblêd-contour en neurale netwerklijnen.
  - 3D-tilt hero visual card met subtiele interne radial glow.
  - Spindiagram (Radar Chart): Jouw AI-profiel in Fries Blauw en streefniveau 4.0 in Pompeblêd Rood.
  - Officiële donkere Friesland.AI footer (`#0f172a`) met links naar de Teachbooks Hub en www.friesland.ai.

---

## 🌿 2. Firda Versie (`firda.html`)

- **Originele Firda Huisstijl**:
  - Kleurenpalet: Spruce donkergroen (`#3A5757`), Zacht Hemelblauw (`#95CDEA`) en Warm Goudgeel (`#FFCD00`).
  - Typografie: `Plus Jakarta Sans`.
  - Originele Firda badge- en kaartaccenten, MBO-beroepsspecifieke voorbeelden en archetype-profielen (*AI-Pionier in het MBO*, *AI-Toepasser*, *AI-Verkenner*).
  - Volledig zelfstandig bestand via `css/firda.css` en `js/firda.js`.

---

## 🚀 Lokaal Gebruik

Je kunt beide scans direct openen in elke moderne webbrowser:
- **Friesland.AI versie**: dubbelklik op `index.html`
- **Firda versie**: dubbelklik op `firda.html`

Of start een lokale webserver met Python:
```bash
python3 -m http.server 8000
```
Open vervolgens:
- `http://localhost:8000/index.html` voor Friesland.AI
- `http://localhost:8000/firda.html` voor Firda

---

## 📁 Bestandsstructuur

```
AI geletterheid scan/
├── index.html              # Friesland.AI versie (autonoom)
├── firda.html              # Firda MBO versie (autonoom)
├── css/
│   ├── styles.css          # Friesland.AI CSS (Outfit, Inter, #244994, #c73326)
│   └── firda.css           # Firda CSS (Plus Jakarta Sans, #3A5757, #95CDEA, #FFCD00)
├── js/
│   ├── app.js              # Friesland.AI app logica & radar chart
│   └── firda.js            # Firda app logica & radar chart
├── assets/
│   ├── friesland-ai-logo.png # Officieel Friesland.AI logo
│   ├── favicon.svg         # Friesland.AI vector icoon
│   └── favicon-firda.svg   # Firda vector icoon
└── README.md               # Documentatie
```

---

## 📚 Referenties

- **UNESCO AI CFT (2024)**: [AI Competency Framework for Teachers](https://unesdoc.unesco.org/ark:/48223/pf0000391104)
- **Friesland.AI**: [www.friesland.ai](https://www.friesland.ai)
