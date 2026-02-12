"use client";

import Image from "next/image";
import { Shield, Clock, CreditCard, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Clock, label: "Монтаж за 1 день" },
  { icon: Shield, label: "Гарантия 15 лет" },
  { icon: CreditCard, label: "Оплата по факту" },
  { icon: Sun, label: "Не желтеют" },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Text content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium w-fit">
              <Shield className="h-4 w-4" />
              {"Гарантия 15 лет по договору"}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
              {"Идеально ровные потолки "}
              <span className="text-accent">{"без пыли"}</span>
              {" и запаха"}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {"Монтаж со строительным пылесосом \u2014 обои останутся чистыми. Премиальные полотна с UV-защитой не желтеют. Замер и расчёт \u2014 бесплатно."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
                onClick={() => scrollTo("calculator")}
              >
                {"Рассчитать стоимость"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-border text-foreground hover:bg-secondary"
                onClick={() => scrollTo("contact")}
              >
                {"Вызвать замерщика \u2014 0 \u20BD"}
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              {"Светильники в подарок + скидка 2 500\u20BD при заказе до 28 февраля"}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-ceiling.jpg"
              alt="Современная гостиная с натяжным потолком"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center gap-1 text-center"
                  >
                    <badge.icon className="h-5 w-5 text-accent" />
                    <span className="text-xs font-medium text-foreground">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
