# React in HTML

Two starters for building React apps as plain HTML, with Tailwind and shadcn-style components.

| Path | What it is | Needs |
| --- | --- | --- |
| `index.html` | React page with no build step. Open it in a browser. | Internet (loads React, htm and Tailwind from CDNs) |
| `vite-app/` | Vite + React + Tailwind v4 + shadcn-style UI. `npm run build` produces one self-contained `dist/index.html`. | Node.js 20+ |

## 1. No-build page (`index.html`)

Double-click `index.html`, or serve it with any static server.

- React 19 comes from an import map.
- `htm` gives JSX-like templates in plain JavaScript, so no compiler is needed.
- Tailwind compiles styles in the browser. Theme colours are defined in the `@theme` block.

## 2. Vite single-file app (`vite-app/`)

```bash
cd vite-app
npm install
npm run dev      # development server
npm run build    # writes dist/index.html (one file, JS and CSS inlined)
npm run preview  # preview the build
```

Layout:

```
vite-app/
├── index.html
├── vite.config.js            # React, Tailwind, single-file output, "@/" alias
└── src/
    ├── main.jsx
    ├── App.jsx               # replace with your app
    ├── index.css             # Tailwind import and colour tokens (light and dark)
    ├── lib/utils.js          # cn() helper
    └── components/ui/        # Button and Card (shadcn-style, built with cva)
```

Add more shadcn-style components under `src/components/ui/`, following `button.jsx`.

## Conventions

- Components are small and do one job.
- Colours come from the CSS tokens in `index.css`, so light and dark mode both work.
- The `@/` import alias points to `vite-app/src`.
