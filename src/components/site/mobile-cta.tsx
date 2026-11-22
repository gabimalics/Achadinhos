import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/store";

/** Sticky bottom CTA on small screens (CTA repetition pattern). */
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a
        href={whatsappLink("Oi! Quero ver os produtos disponíveis.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-money text-sm font-bold text-white shadow-lg shadow-money/25"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        Falar no WhatsApp
      </a>
    </div>
  );
}
