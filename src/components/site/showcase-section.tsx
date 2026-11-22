"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CreditCard, Flame, MessageCircle, Pause, Play, Tag } from "lucide-react";
import { ProductHoverShowcase, type ProductItem } from "@/components/ui/product-hover-showcase";
import {
  PRODUCTS,
  STORE,
  formatBRL,
  formatUSD,
  installment,
  productMessage,
  savingsPct,
  usdInBrl,
  whatsappLink,
} from "@/lib/store";

export function ShowcaseSection() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(true);
  const autoplay = playing && !reduceMotion;
  const featured = PRODUCTS.slice(0, 6);
  const active = featured[index];

  const items: ProductItem[] = useMemo(
    () =>
      featured.map((p) => ({
        id: p.id,
        name: p.name,
        nameLines: p.nameLines,
        tagline: p.tagline,
        description: p.description,
        price: formatBRL(p.brl),
        image: p.image,
        thumbnail: p.image.replace("w=900", "w=240"),
        accentColor: p.accentColor,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const usdBrl = usdInBrl(active.usdFull);
  const max = active.brlStore;

  const bars = [
    { label: "Lojas brasileiras", value: active.brlStore, cls: "bg-neutral-300 dark:bg-neutral-700" },
    { label: `Preço cheio EUA (${formatUSD(active.usdFull)})`, value: usdBrl, cls: "bg-neutral-400 dark:bg-neutral-500" },
    { label: "Garimpo USA", value: active.brl, cls: "bg-money" },
  ];

  return (
    <section id="vitrine" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-money">
              <Flame className="h-4 w-4" aria-hidden /> Vitrine da semana
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Toque e descubra.
            </h2>
          </div>
          <div className="flex max-w-sm flex-col gap-3 md:items-end">
            <p className="text-muted-foreground md:text-right">
              Cada peça foi garimpada numa promoção americana. Você paga perto do preço cheio dos EUA — bem abaixo do
              que cobram por aqui.
            </p>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPlaying((v) => !v)}
                aria-pressed={!playing}
                className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-border bg-card px-4 text-sm font-semibold transition-colors duration-200 hover:bg-muted md:self-end"
              >
                {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
                {playing ? "Pausar vitrine" : "Rodar vitrine"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
          <ProductHoverShowcase
            products={items}
            selectedIndex={index}
            onSelect={(i) => setIndex(i)}
            autoplay={autoplay}
            autoplayInterval={4500}
            buyButtonText="Quero esse"
            onBuyClick={() => window.open(whatsappLink(productMessage(active)), "_blank", "noopener")}
          />

          {/* Price breakdown panel synced with the showcase */}
          <aside className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Tag className="h-3.5 w-3.5" aria-hidden /> Raio-x do preço
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-1 flex-col"
              >
                <h3 className="mt-3 font-display text-2xl font-bold">{active.name}</h3>

                <div className="mt-6 space-y-4">
                  {bars.map((b) => (
                    <div key={b.label}>
                      <div className="mb-1.5 flex items-baseline justify-between gap-2 text-sm">
                        <span className="text-muted-foreground">{b.label}</span>
                        <span className="font-semibold tabular-nums">{formatBRL(b.value)}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className={`h-full rounded-full ${b.cls}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(b.value / max) * 100}%` }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-sun/90 p-4 text-ink">
                  <p className="text-xs font-bold uppercase tracking-widest">Você economiza</p>
                  <p className="font-display text-3xl font-extrabold tabular-nums">
                    {formatBRL(active.brlStore - active.brl)}{" "}
                    <span className="text-lg font-bold">({savingsPct(active)}%)</span>
                  </p>
                </div>

                <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4" aria-hidden />
                  ou {STORE.installments}x de {installment(active.brl)}
                </p>

                <p className="mt-1 text-sm font-bold text-urgency">
                  {active.stock === 1 ? "Última unidade!" : `Só ${active.stock} unidades disponíveis`}
                </p>

                <a
                  href={whatsappLink(productMessage(active))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02] dark:bg-white dark:text-ink"
                >
                  <MessageCircle className="h-4 w-4" />
                  Reservar pelo WhatsApp
                </a>
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
