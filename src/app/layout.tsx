import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Rubik } from "next/font/google";
import { MotionProvider } from "@/components/site/motion-provider";
import "./globals.css";

// Font pairing from the UI/UX Pro Max design system (e-commerce: Rubik / Nunito Sans)
const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"] });
const rubik = Rubik({ variable: "--font-rubik", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garimpo USA · Originais dos EUA com preço justo em real",
  description:
    "Produtos originais comprados nos Estados Unidos e vendidos no Brasil em reais, sem taxa de importação surpresa.",
};

export const viewport: Viewport = {
  themeColor: "#0b6e4f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} ${rubik.variable} antialiased`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
