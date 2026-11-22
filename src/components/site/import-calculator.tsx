"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Calculator, CheckCircle2 } from "lucide-react";
import { STORE, formatBRL } from "@/lib/store";

/**
 * Estimativa simplificada de quanto custa importar sozinho uma compra acima de US$ 50.
 * As regras de tributação mudam com frequência — ajuste as alíquotas abaixo se necessário.
 */
const SHIPPING_USD = 25;
const IOF = 0.035; // IOF em compras internacionais no cartão
const II = 0.6; // imposto de importação para compras acima de US$ 50
const ICMS = 0.17; // ICMS (varia por estado)
const MIN = 50;
const MAX = 1000;
const clamp = (v: number) => (Number.isFinite(v) ? Math.min(MAX, Math.max(0, v)) : MIN);

function estimate(usd: number) {
  const base = (usd + SHIPPING_USD) * STORE.usdToBrl;
  const iof = base * IOF;
  const ii = base * II;
  const icms = ((base + ii) / (1 - ICMS)) * ICMS;
  const total = base + iof + ii + icms;
  return { base, iof, ii, icms, total };
}

export function ImportCalculator() {
  const [usd, setUsd] = useState(150);
  const e = estimate(usd);
  const ours = usd * STORE.usdToBrl;
  const diff = e.total - ours;

  const rows = [
    { label: `Produto + frete (US$ ${SHIPPING_USD}) convertido`, value: e.base },
    { label: "IOF do cartão (3,5%)", value: e.iof },
    { label: "Imposto de importação (60%)", value: e.ii },
    { label: "ICMS (17%)", value: e.icms },
  ];

  return (
    <section id="calculadora" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-money">
            <Calculator className="h-4 w-4" aria-hidden /> Calculadora
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Importar sozinho compensa?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Arraste o valor do produto em dólar e veja quanto ele chegaria na sua porta comprando direto do site
            americano — com frete, IOF e impostos.
          </p>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label htmlFor="usd-input" className="text-sm font-semibold text-muted-foreground">
                Preço do produto nos EUA
              </label>
              <div className="flex items-center rounded-xl border border-border bg-background focus-within:outline focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-[var(--ring)]">
                <span className="pl-3 font-display text-lg font-bold text-muted-foreground" aria-hidden>
                  US$
                </span>
                <input
                  id="usd-input"
                  type="number"
                  inputMode="decimal"
                  min={MIN}
                  max={MAX}
                  value={usd}
                  onChange={(ev) => setUsd(clamp(Number(ev.target.value)))}
                  className="h-12 w-28 bg-transparent px-2 font-display text-2xl font-bold tabular-nums outline-none focus-visible:outline-none"
                />
              </div>
            </div>
            <input
              id="usd"
              type="range"
              min={MIN}
              max={MAX}
              step={5}
              value={usd}
              aria-label="Ajustar preço do produto nos EUA"
              aria-valuetext={`${usd} dólares`}
              onChange={(ev) => setUsd(Number(ev.target.value))}
              className="mt-5 h-6 w-full accent-[var(--money)]"
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground" aria-hidden>
              <span>US$ {MIN}</span>
              <span>US$ {MAX.toLocaleString("pt-BR")}</span>
            </div>
          </div>

          <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            Estimativa simplificada, só para comparação. Alíquotas e regras de importação mudam e variam por estado.
          </p>
        </div>

        <div className="grid gap-4">
          <p className="sr-only" aria-live="polite">
            Importando sozinho: cerca de {formatBRL(e.total)}. Com o Garimpo USA: cerca de {formatBRL(ours)}. Economia de {formatBRL(diff)}.
          </p>
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Importando sozinho</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {rows.map((r) => (
                <li key={r.label} className="flex justify-between gap-3">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-medium tabular-nums">{formatBRL(r.value)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
              <span className="font-semibold">Total estimado</span>
              <span className="font-display text-2xl font-extrabold tabular-nums text-red-600 dark:text-red-400">
                {formatBRL(e.total)}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">+ 15 a 60 dias de espera e risco de extravio.</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white">
            <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-money/50 blur-2xl" />
            <p className="relative text-xs font-bold uppercase tracking-widest text-sun">Com o Garimpo USA</p>
            <div className="relative mt-3 flex items-baseline justify-between gap-3">
              <span className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-sun" aria-hidden /> Perto do preço cheio americano
              </span>
              <span className="font-display text-3xl font-extrabold tabular-nums">~{formatBRL(ours)}</span>
            </div>
            <motion.div
              key={Math.round(diff / 50)}
              initial={{ scale: 0.96, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative mt-5 rounded-2xl bg-sun p-4 text-ink"
            >
              <p className="text-xs font-bold uppercase tracking-widest">Fica no seu bolso</p>
              <p className="font-display text-3xl font-extrabold tabular-nums">{formatBRL(diff)}</p>
              <p className="text-sm font-medium">e o produto chega em dias, não em meses.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
