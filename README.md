# BARBEAR

A cinematic, multi-page performance sportswear storefront for **BARBEAR — Built in the Emirates**.

The experience is designed as a premium global-sportswear flagship: oversized editorial typography, performance-led storytelling, responsive product merchandising, and a lightweight custom motion system.

## Experience

- Full-screen cinematic landing experience
- Scroll-triggered reveal animation system
- RAF-based parallax and section progress effects
- Responsive full-screen mobile navigation
- Men and women collection experiences
- Full collection shop
- Performance / technology editorial page
- Brand story page
- Dynamic product detail pages
- Responsive layouts from mobile through ultrawide
- Reduced-motion accessibility support

## Routes

- `/` — flagship home
- `/men` — men's collection
- `/women` — women's collection
- `/shop` — complete Drop 01 catalogue
- `/performance` — BARBEAR Performance Lab
- `/story` — brand origin and design code
- `/product/[slug]` — product detail experience

## Stack

- Next.js 16 / App Router
- React 19
- Next Image
- CSS animation + transitions
- Intersection Observer reveal system
- requestAnimationFrame parallax system

The interaction layer intentionally avoids a large animation dependency so the site remains quick while retaining rich motion and scroll choreography.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Brand assets

BARBEAR product and editorial imagery lives in `public/products` and `public/editorial`. The primary brand mark is implemented as an adaptive vector component in `components/Logo.js`.
