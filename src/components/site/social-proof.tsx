import { Quote, Star } from "lucide-react";
import { SOCIAL_PROOF_IS_EXAMPLE, STATS, TESTIMONIALS } from "@/lib/store";

export function SocialProof() {
  return (
    <section aria-labelledby="social-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-money">Quem compra, volta</p>
            <h2 id="social-title" className="mt-2 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Clientes de todo o Brasil já garimparam com a gente.
            </h2>
          </div>
          <dl className="grid grid-cols-3 gap-3 sm:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card px-4 py-3 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold tabular-nums text-money sm:text-3xl">{s.value}</dd>
                <dd className="text-xs font-semibold text-muted-foreground" aria-hidden>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {SOCIAL_PROOF_IS_EXAMPLE && (
          <p className="mt-8 inline-flex rounded-full border border-dashed border-urgency px-4 py-2 text-sm font-semibold text-urgency">
            Exemplo ilustrativo: números e depoimentos fictícios, a serem trocados pelos reais.
          </p>
        )}

        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-sun" aria-hidden />
                <div className="flex gap-0.5" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sun text-sun" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-money/10 font-display font-bold text-money"
                    aria-hidden
                  >
                    {t.name[0]}
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold">{t.name}</span>
                    <span className="text-muted-foreground">
                      {t.city} · comprou {t.product}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
