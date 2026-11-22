import Image from "next/image";
import { ArrowDown, BadgeCheck, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { PRODUCTS, formatBRL, formatUSD, savingsPct } from "@/lib/store";

export function Hero() {
  const p = PRODUCTS[0];

  return (
    <section className="relative overflow-hidden">
      {/* decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sun/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-60 h-[380px] w-[380px] rounded-full bg-money/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-money opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-money" />
            </span>
            Novos achados chegando toda semana
          </span>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Original dos EUA.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Preço justo</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded-sm bg-sun sm:h-5" />
            </span>{" "}
            em real.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A gente garimpa as melhores promoções nas lojas americanas, traz pra cá e te entrega
            produto <strong className="text-foreground">100% original</strong> — sem taxa de importação surpresa,
            sem esperar 60 dias e sem dor de cabeça com a alfândega.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#vitrine"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-money px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-money/25 transition-transform duration-200 hover:scale-[1.03]"
            >
              Ver a vitrine
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#calculadora"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold transition-colors hover:bg-muted"
            >
              Quanto eu economizo?
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-money" aria-hidden /> Nota da loja americana
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-money" aria-hidden /> Garantia de originalidade
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4.5 w-4.5 text-money" aria-hidden /> Pronta entrega
            </li>
          </ul>
        </div>

        {/* Price "ticket" visual */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 top-8 h-full w-full rotate-[-6deg] rounded-3xl bg-ink/90" aria-hidden />
          <div className="relative rotate-[2deg] rounded-3xl border border-border bg-card p-5 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div className="relative overflow-hidden rounded-2xl bg-muted">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, 90vw"
                  className="object-cover"
                />
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-sun px-3 py-1 text-xs font-extrabold text-ink">
                -{savingsPct(p)}% vs. lojas BR
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Preço nos EUA
                </p>
                <p className="font-display text-2xl font-bold tabular-nums">{formatUSD(p.usdFull)}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-money">
                  Aqui no Garimpo
                </p>
                <p className="font-display text-2xl font-bold tabular-nums text-money">{formatBRL(p.brl)}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-dashed border-border px-3 py-2.5 text-sm">
              <span className="text-muted-foreground">Nas lojas brasileiras</span>
              <span className="font-semibold tabular-nums text-muted-foreground line-through">
                {formatBRL(p.brlStore)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category marquee */}
      <div className="overflow-hidden border-y border-border bg-ink py-3 text-white" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-sm font-bold uppercase tracking-widest">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Tênis", "Headphones", "Relógios", "Óculos", "Smartwatches", "Mochilas", "Câmeras", "Perfumes"].map(
              (c) => (
                <span key={`${k}-${c}`} className="flex items-center gap-10">
                  {c}
                  <span className="text-sun">✦</span>
                </span>
              )
            )
          )}
        </div>
      </div>
    </section>
  );
}
