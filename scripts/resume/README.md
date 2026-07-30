# Resume Repository Structure

## Purpose

Enable AI-friendly, source-controlled resume management. Keep editable data separate from rendered output so updates can be made quickly without touching PDF layouts.

## Repository: `mohammad-fahad/resume`

## Recommended Structure

```
resume/
├── src/
│   ├── data/
│   │   ├── personal.json          # Name, email, phone, links
│   │   ├── summary.json           # Professional summary / tagline
│   │   ├── experience.json        # Work history (array of roles)
│   │   ├── education.json         # Degrees and certifications
│   │   ├── skills.json            # Grouped technical skills
│   │   └── projects.json          # Featured projects
│   ├── templates/
│   │   └── main.json              # Section ordering, layout config
│   └── render.js                  # Generates PDF from data + template
├── output/
│   └── mohammad-fahad-resume.pdf  # Generated PDF (gitignored)
├── scripts/
│   └── build.sh                   # Install deps + generate PDF
├── render.config.js               # PDF styling (fonts, colors, spacing)
├── package.json                   # Dependencies (e.g., puppeteer, react-pdf)
├── .github/
│   └── workflows/
│       └── generate.yml           # Auto-generate PDF on push to main
└── README.md
```

## Why This Works

- **Data in JSON** — AI can parse and update structured data trivially.
- **Template separate from data** — Change layout without rewriting content.
- **Auto-generated PDF** — Never hand-edit a PDF again. CI handles it.
- **Git-tracked changes** — Full history of what changed and when.

## Suggested Tools

- **Template engine:** JSON Resume (open standard) or custom `react-pdf`
- **PDF generation:** Puppeteer, `react-pdf/renderer`, or Typst
- **CI:** GitHub Actions — install deps, generate PDF, commit back or upload as artifact

## Quick Start

```bash
mkdir resume && cd resume
npm init -y
npm install @react-pdf/renderer
# Create src/data/*.json files
# Create src/render.js
# Run: node src/render.js
```
