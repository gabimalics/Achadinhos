"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, Plane } from "lucide-react";
import { STORE, formatBRL, whatsappLink } from "@/lib/store";

const LINKS = [
  { href: "#vitrine", label: "Vitrine" },
  { href: "#produtos", label: "Produtos" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-ink text-xs font-medium tracking-wide text-white/85">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-x-5 gap-y-1 px-4 py-2 flex-wrap text-center">
          <span>
            Câmbio de referência: <strong className="text-sun">US$ 1 = {formatBRL(STORE.usdToBrl)}</strong>
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline">Envio para todo o Brasil</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline">Pix ou até {STORE.installments}x</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2.5" aria-label="Garimpo USA, início">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-money text-white">
              <Plane className="h-4.5 w-4.5 -rotate-12" aria-hidden />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Garimpo<span className="text-money">USA</span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink("Oi! Quero ver os produtos disponíveis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chamar no WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav aria-label="Menu móvel" className="border-t border-border bg-background px-4 pb-4 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink("Oi! Quero ver os produtos disponíveis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-money px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Chamar no WhatsApp
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
