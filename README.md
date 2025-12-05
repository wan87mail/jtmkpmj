# JTMK Landing Page

Landing page untuk Jabatan Teknologi Maklumat & Komunikasi (JTMK).

## Requirements

- Node.js 18.17.1 or higher (20.3.0+ recommended)
- npm, pnpm, or yarn

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Facilities.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Programs.astro
│   │   └── Slider.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── aplikasi.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jtmkpmj
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start development server                 |
| `npm run start` | Start development server (alias)         |
| `npm run build` | Build for production                     |
| `npm run preview` | Preview production build locally       |

## Tech Stack

- [Astro](https://astro.build/) v4.16.0 - Static site generator
- TypeScript - Type safety