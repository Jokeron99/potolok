import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaBlockProps {
  title?: string;
  description?: string;
}

export function CtaBlock({
  title = "\u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442?",
  description = "\u0412\u044B\u0437\u043E\u0432\u0438\u0442\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041E\u043D \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u0441 \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C\u0438, \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0437\u0430\u043C\u0435\u0440 \u0438 \u043D\u0430\u0437\u043E\u0432\u0451\u0442 \u0442\u043E\u0447\u043D\u0443\u044E \u0446\u0435\u043D\u0443.",
}: CtaBlockProps) {
  return (
    <section className="py-16 lg:py-20 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-background text-balance mb-4">
          {title}
        </h2>
        <p className="text-background/70 max-w-xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
          >
            <Link href="/#contact">
              <ArrowRight className="mr-2 h-4 w-4" />
              {"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6"
          >
            <a href="tel:+79515100351">
              <Phone className="mr-2 h-4 w-4" />
              +7 (951) 510-03-51
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
