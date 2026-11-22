import {
  BadgeCheck,
  ChevronDown,
  CreditCard,
  Camera,
  MessageCircle,
  PackageCheck,
  Plane,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { STORE, whatsappLink } from "@/lib/store";

const STEPS = [
  {
    icon: Search,
    title: "A gente garimpa",
    text: "Monitoramos outlets e promoções das lojas americanas todos os dias, atrás das melhores oportunidades.",
  },
  {
    icon: Plane,
    title: "Compra e traz",
    text: "Compramos direto nas lojas oficiais dos EUA e trazemos tudo pra cá, dentro da lei.",
  },
  {
    icon: BadgeCheck,
    title: "Confere tudo",
    text: "Cada produto é inspecionado: originalidade, estado, caixa e acessórios.",
  },
  {
    icon: Truck,
    title: "Chega até você",
    text: "Você paga em real, no Pix ou parcelado, e recebe rapidinho em qualquer lugar do Brasil.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-sun">Como funciona</p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Do outlet americano direto pra sua casa.
        </h2>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <span className="font-display text-6xl font-extrabold text-white/10" aria-hidden>0{i + 1}</span>
              <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-sun text-ink">
                <s.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const PERKS = [
  { icon: ShieldCheck, title: "100% original", text: "Comprado em loja oficial, com nota americana. Se não for original, devolvemos seu dinheiro." },
  { icon: CreditCard, title: "Pix ou até " + STORE.installments + "x", text: "Pague em real, sem IOF e sem variação do dólar depois da compra." },
  { icon: PackageCheck, title: "Sem taxa surpresa", text: "O preço que você vê é o que você paga. Nada de imposto na hora de receber." },
  { icon: ShoppingBag, title: "Encomenda sob pedido", text: "Quer algo que não está na vitrine? Manda pra gente que a gente caça na próxima promoção." },
];

export function Perks() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((p) => (
          <div key={p.title} className="rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-money/10 text-money">
              <p.icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Os produtos são originais mesmo?",
    a: "Sim. Compramos apenas em lojas oficiais e outlets autorizados nos Estados Unidos e guardamos a nota de compra. Você pode pedir foto da nota antes de fechar.",
  },
  {
    q: "Por que é mais barato que nas lojas brasileiras?",
    a: "Porque compramos quando o produto está em promoção lá fora. Repassamos perto do preço cheio americano convertido em real — que ainda fica bem abaixo do preço praticado no Brasil.",
  },
  {
    q: "Vou pagar alguma taxa de importação?",
    a: "Não. O valor anunciado já é o final. O produto já está no Brasil quando você compra.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: `Pix (com desconto) ou cartão de crédito em até ${STORE.installments}x.`,
  },
  {
    q: "Vocês trazem produtos sob encomenda?",
    a: "Sim! Fale com a gente no WhatsApp com o link do produto e avisamos assim que ele entrar em promoção.",
  },
  {
    q: "Como funciona a numeração dos tênis e roupas?",
    a: "Os tamanhos seguem o padrão americano. Antes da compra, te passamos a tabela de conversão e ajudamos a escolher.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-money">Dúvidas</p>
        <h2 className="mt-2 text-center font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="mt-10 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card px-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="-mt-1 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-money px-6 py-14 text-center text-white sm:px-12">
          <div aria-hidden className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-sun/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-ink/40 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Não quer perder o próximo achado?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-white/85">
            Entre na nossa lista VIP no WhatsApp e receba os produtos novos antes de todo mundo.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink("Oi! Quero entrar na lista VIP de achadinhos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-sun px-6 py-3.5 text-sm font-extrabold text-ink transition-transform hover:scale-[1.04]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Entrar na lista VIP
            </a>
            <a
              href={`https://instagram.com/${STORE.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white/10"
            >
              <Camera className="h-4 w-4" aria-hidden />@{STORE.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border pt-10 pb-28 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row">
        <p className="font-display font-extrabold text-foreground">
          Garimpo<span className="text-money">USA</span>
        </p>
        <p className="text-center">
          Preços sujeitos à disponibilidade de estoque. Câmbio de referência apenas informativo.
        </p>
        <p>© {new Date().getFullYear()} {STORE.name}</p>
      </div>
    </footer>
  );
}
