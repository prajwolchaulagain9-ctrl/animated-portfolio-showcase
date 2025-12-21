<div align="center">

# Animated Portfolio Showcase

A modern, animated developer portfolio built with React, TypeScript, Tailwind CSS, and shadcn/ui — optimized for speed and designed for delightful interactions.

</div>


## ✨ Features

- Responsive layout for desktop, tablet, and mobile
- Smooth animations with Framer Motion and subtle particles
- Themed UI (light/dark) with accessible shadcn/ui components
- Project showcase, skills with progress bars, and contact section
- Fast builds and HMR with Vite

## 🧰 Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 (+ tailwind-merge, tailwindcss-animate)
- shadcn/ui (Radix UI)
- Framer Motion, Lucide Icons
- React Router, TanStack Query, Recharts

## 📦 Project Structure

```
src/
├─ components/
│  ├─ HeroSection.tsx
│  ├─ AboutSection.tsx
│  ├─ ProjectsSection.tsx
│  ├─ SkillsSection.tsx
│  ├─ ContactSection.tsx
│  └─ ui/                  # shadcn/ui primitives
├─ pages/
│  ├─ Index.tsx
│  └─ NotFound.tsx
├─ hooks/                  # custom hooks
├─ lib/                    # utilities
├─ App.tsx
├─ main.tsx
└─ index.css
```

Path alias: import from `@` to resolve `src` (configured in `vite.config.ts`).

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.0.0 (Vite 5 requires Node 18+)
- npm ≥ 9 (or pnpm/yarn)

### Install & Run (local)

```bash
# install deps
npm install

# start dev server (http://localhost:5173)
npm run dev

# type-check and lint
npm run lint
```

Optional (if you use Bun):

```bash
bun install
bun run dev
```

### Build & Preview

```bash
# production build to dist/
npm run build

# preview the production build locally
npm run preview
```

### Available Scripts

- `dev` — run the Vite dev server
- `build` — build for production
- `build:dev` — build in development mode (faster, unminified)
- `preview` — preview the production build
- `lint` — run ESLint across the project

## 🧑‍🎨 Customization

- Edit content:
	- `src/components/HeroSection.tsx` — name, title, intro
	- `src/components/AboutSection.tsx` — about text
	- `src/components/ProjectsSection.tsx` — projects
	- `src/components/SkillsSection.tsx` — skills
	- `src/components/ContactSection.tsx` — contact details
- Update metadata: `index.html` (title, meta)
- Branding/colors: `tailwind.config.ts`
- Assets: place images in `public/`

## 🌐 Deployment

### Vercel (recommended)

```bash
npm run build
# then import the repo on vercel.com and set output dir to "dist"
```

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

- Run `npm run build` and publish `dist/`
- For SPA routing, configure your host to serve `index.html` on 404s

## 🛠️ Troubleshooting

- Ensure Node 18+ (`node -v`). If not, upgrade via nvm or official installer.
- Port 5173 busy? Stop the other process or change the port in `vite.config.ts`.
- CSS not applying? Confirm Tailwind is loaded (`index.css`) and the classes exist.

## 📄 License

No license file is present in this repository. If you intend to open-source this project, add a `LICENSE` file (MIT is a common choice).

---

Built with ❤️

