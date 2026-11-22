# Achadinhos

Site da **Garimpo USA**: produtos originais comprados em promoção nos EUA e revendidos no Brasil em reais.

Feito com Next.js 15, TypeScript, Tailwind CSS v4, estrutura shadcn, framer-motion e lucide-react.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 (site) e http://localhost:3000/demo (demo do componente de vitrine).

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram, câmbio, parcelas | `src/lib/store.ts` → `STORE` |
| Produtos, preços e fotos | `src/lib/store.ts` → `PRODUCTS` |
| Números e depoimentos (⚠️ exemplos — troque por reais) | `src/lib/store.ts` → `STATS`, `TESTIMONIALS` |
| Alíquotas da calculadora de importação | `src/components/site/import-calculator.tsx` |
| Cores e fontes | `src/app/globals.css`, `src/app/layout.tsx` |
| Seções da página | `src/components/site/` |
| Componente de vitrine | `src/components/ui/product-hover-showcase.tsx` |

## Design system

Gerado com UI/UX Pro Max e salvo em `design-system/garimpo-usa/` (`MASTER.md` + ajustes da home em `pages/home.md`).
