import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemsSection } from "@/components/problems-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CalculatorSection } from "@/components/calculator-section";
import { GallerySection } from "@/components/gallery-section";
import { ReviewsSection } from "@/components/reviews-section";
import { StepsSection } from "@/components/steps-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <ComparisonSection />
      <CalculatorSection />
      <GallerySection />
      <ReviewsSection />
      <StepsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingCta />
    </main>
  );
}
