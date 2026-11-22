"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageOff, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CATEGORIES,
  PRODUCTS,
  STORE,
  formatBRL,
  formatUSD,
  installment,
  productMessage,
  savingsPct,
  whatsappLink,
  type Product,
} from "@/lib/store";

function ProductImage({ p }: { p: Product }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${p.accentColor}33, ${p.accentColor}11)` }}
      >
        <ImageOff className="h-8 w-8 text-muted-foreground" aria-hidden />
      </div>
    );
  }
  return (
    <Image
      src={p.image}
      alt={p.name}
      fill
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export function ProductGrid() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");
  const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <section id="produtos" className="scroll-mt-20 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-money">Pronta entrega</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Todos os achadinhos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Estoque limitado: quando acaba, acabou. O próximo lote depende da próxima promoção lá fora.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Categorias">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={cn(
                "min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors duration-200",
                cat === c
                  ? "border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <ProductImage p={p} />
                  <span className="absolute left-3 top-3 rounded-full bg-sun px-2.5 py-1 text-xs font-extrabold text-ink">
                    <span className="sr-only">Desconto de </span>-{savingsPct(p)}%
                  </span>
                  {p.stock <= 2 && (
                    <span className="absolute right-3 top-3 rounded-full bg-urgency px-2.5 py-1 text-xs font-bold text-white">
                      {p.stock === 1 ? "Última!" : `Últimas ${p.stock}`}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{p.category}</p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-tight">{p.name}</h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-md bg-muted px-1.5 py-0.5 font-semibold">EUA {formatUSD(p.usdFull)}</span>
                    <span>
                      <span className="sr-only">Nas lojas brasileiras: </span>
                      <span className="line-through">{formatBRL(p.brlStore)}</span>
                    </span>
                  </div>

                  <p className="mt-2 font-display text-2xl font-extrabold tabular-nums text-money">{formatBRL(p.brl)}</p>
                  <p className="text-xs text-muted-foreground">
                    ou {STORE.installments}x de {installment(p.brl)}
                  </p>

                  <a
                    href={whatsappLink(productMessage(p))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink px-4 text-sm font-bold transition-colors duration-200 hover:bg-ink hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-ink"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Quero esse<span className="sr-only">: {p.name}</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
