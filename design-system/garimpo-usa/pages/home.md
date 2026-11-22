# Home page — overrides to MASTER.md

Rules here override MASTER.md for the landing page (`src/app/page.tsx`).

## Color
- Keep the brand palette from `src/app/globals.css`: money green `#0B6E4F` (primary — darker than MASTER `#059669` so white text passes 4.5:1), warm cream background `#FAF7F0`, highlight yellow `#FFD23F` for savings callouts.
- Urgency orange: MASTER accent `#EA580C` darkened to `#C2410C` (`--urgency`) so white badge text passes 4.5:1. Use only for scarcity ("Última unidade").
- Red is reserved for "importando sozinho" cost totals.

## Typography
- Rubik (display/headings) + Nunito Sans (body), per MASTER. Minimum text size 12px in site sections.

## Pattern
- Feature-Rich Showcase + Social Proof: Hero → Vitrine → Perks → Grid → Calculadora → Como funciona → Depoimentos → FAQ → CTA.
- CTA repetition: header, hero, every product card, final CTA, sticky mobile bar.

## Motion
- Showcase autoplay has a pause control and is disabled under `prefers-reduced-motion`; all framer-motion respects `MotionConfig reducedMotion="user"`.
