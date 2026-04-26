# Briefing for Claude Code

## Project
Personal website for Adrian Majail — .NET Tech Lead & AI Builder.
Static site hosted on GitHub Pages at https://amajail.github.io

## Stack
- Astro (static output, `output: 'static'`)
- Tailwind CSS
- GitHub Pages deployment via GitHub Actions

## Design
Terminal / code aesthetic — dark theme only.

Tokens:
- bg: #0d1117
- surface: #161b22
- accent: #00ff9f        (terminal green — primary)
- accent-2: #38bdf8      (cyan — secondary)
- text: #e6edf3
- muted: #7d8590
- border: #30363d
- font-body: Inter, system-ui
- font-mono: 'JetBrains Mono', 'Fira Code', monospace

## Internationalization (i18n)
The site supports two languages: English (default) and Spanish.

URL structure:
- `/en/` → English
- `/es/` → Spanish
- `/`    → redirect to browser language (en fallback)

Astro i18n config:
```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: { prefixDefaultLocale: true }
}
```

Content files per language:
- `content/en/*.md` → English content
- `content/es/*.md` → Spanish content

Language switcher: visible in the nav bar (EN / ES toggle).
It should preserve the current page when switching (e.g. /en/about ↔ /es/about).

UI strings to translate (nav, buttons, labels):
| Key | EN | ES |
|---|---|---|
| nav.about | About | Sobre mí |
| nav.experience | Experience | Experiencia |
| nav.projects | Projects | Proyectos |
| nav.certifications | Certifications | Certificaciones |
| nav.contact | Contact | Contacto |
| hero.cta_primary | See my work | Ver mi trabajo |
| hero.cta_secondary | Get in touch | Contacto |
| experience.present | Present | Presente |
| certifications.active | Active | Activa |
| certifications.renew | Renew by | Renovar antes de |
| certifications.in_progress | In progress | En progreso |
| contact.availability | Open to consulting & speaking | Abierto a consultoría y charlas |

## Pages
1. `/[lang]/` — Hero with fake terminal block, CTA buttons, social links
2. `/[lang]/about` — Bio, skill tags, currently exploring, personal section, values
3. `/[lang]/experience` — Vertical timeline with stats bar
4. `/[lang]/projects` — Card grid with stack tags and highlight badge
5. `/[lang]/certifications` — Cert cards, MS Learn stats, in-progress section
6. `/[lang]/contact` — Centered section with icon + link cards

## Content location
```
content/
├── en/
│   ├── 01-hero.md
│   ├── 02-about.md
│   ├── 03-experience.md
│   ├── 04-projects.md
│   ├── 05-certifications.md
│   └── 06-contact.md
└── es/
    ├── 01-hero.md
    ├── 02-about.md
    ├── 03-experience.md
    ├── 04-projects.md
    ├── 05-certifications.md
    └── 06-contact.md
```

## GitHub Pages setup
- Repo: amajail/amajail.github.io
- Branch: gh-pages (auto-deployed via Action on push to main)
- GitHub Action file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Key UX notes
- Mobile responsive
- Terminal-style decorative elements: blinking cursor `_`, `>` prompts, monospace labels
- Smooth scroll, active nav state per page
- Dark only (no light mode toggle)
- Language switcher in nav: `EN | ES`

## Build order (suggested)
1. `npm create astro@latest` — minimal template, inside THIS folder
2. `npx astro add tailwind`
3. Configure `astro.config.mjs` with i18n + static output + site URL
4. Create base Layout with nav (language switcher) + footer
5. Build pages one by one reading content files
6. Add GitHub Action at `.github/workflows/deploy.yml`
7. Enable GitHub Pages in repo settings (source: GitHub Actions)
