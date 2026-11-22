import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ShowcaseSection } from "@/components/site/showcase-section";
import { ProductGrid } from "@/components/site/product-grid";
import { ImportCalculator } from "@/components/site/import-calculator";
import { SocialProof } from "@/components/site/social-proof";
import { MobileCta } from "@/components/site/mobile-cta";
import { HowItWorks, Perks, Faq, FinalCta, Footer } from "@/components/site/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <ShowcaseSection />
        <Perks />
        <ProductGrid />
        <ImportCalculator />
        <HowItWorks />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
