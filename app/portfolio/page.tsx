import type { Metadata } from "next";
import { PortfolioGallery } from "./portfolio-gallery";
import { CtaBlock } from "@/components/cta-block";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u2014 \u0410\u043B\u044C\u044F\u043D\u0441 \u041C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 | \u0424\u043E\u0442\u043E \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0440\u0430\u0431\u043E\u0442",
  description:
    "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043D\u0430\u0442\u044F\u0436\u043D\u044B\u0445 \u043F\u043E\u0442\u043E\u043B\u043A\u043E\u0432 \u0432 \u0420\u043E\u0441\u0442\u043E\u0432\u0435-\u043D\u0430-\u0414\u043E\u043D\u0443. \u041C\u0430\u0442\u043E\u0432\u044B\u0435, \u0433\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0435, \u0441\u0430\u0442\u0438\u043D\u043E\u0432\u044B\u0435, \u0442\u043A\u0430\u043D\u0435\u0432\u044B\u0435 \u043F\u043E\u0442\u043E\u043B\u043A\u0438, \u0441\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438, \u0442\u0435\u043D\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C.",
};

export default function PortfolioPage() {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            {"\u041D\u0430\u0448\u0438 \u0440\u0430\u0431\u043E\u0442\u044B"}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            {"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432"}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {"\u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u2014 \u043E\u0442 \u0437\u0430\u043C\u0435\u0440\u0430 \u0434\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0443\u0431\u043E\u0440\u043A\u0438 \u2014 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0441 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C\u044E. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043F\u043E\u0442\u043E\u043B\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440\u044B."}
          </p>
        </div>
      </section>

      {/* Gallery with filters */}
      <PortfolioGallery />

      {/* CTA */}
      <CtaBlock
        title={"\u041D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442?"}
        description={"\u0412\u044B\u0437\u043E\u0432\u0438\u0442\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041E\u043D \u043F\u0440\u0438\u0432\u0435\u0437\u0451\u0442 \u043E\u0431\u0440\u0430\u0437\u0446\u044B, \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0437\u0430\u043C\u0435\u0440 \u0438 \u043D\u0430\u0437\u043E\u0432\u0451\u0442 \u0442\u043E\u0447\u043D\u0443\u044E \u0446\u0435\u043D\u0443."}
      />
    </article>
  );
}
