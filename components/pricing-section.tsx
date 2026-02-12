"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Однокомнатная",
    area: "~33 м\u00B2",
    price: "от 13 500",
    features: [
      "Полотно ПВХ премиум",
      "Монтаж под ключ",
      "6 светильников в подарок",
      "Гарантия 15 лет",
    ],
    popular: false,
  },
  {
    title: "Двухкомнатная",
    area: "~48 м\u00B2",
    price: "от 19 800",
    features: [
      "Полотно ПВХ премиум",
      "Монтаж под ключ",
      "10 светильников в подарок",
      "Гарантия 15 лет",
      "Санузел в подарок",
    ],
    popular: true,
  },
  {
    title: "Трёхкомнатная",
    area: "~65 м\u00B2",
    price: "от 27 500",
    features: [
      "Полотно ПВХ премиум",
      "Монтаж под ключ",
      "15 светильников в подарок",
      "Гарантия 15 лет",
      "Санузел в подарок",
      "Карниз для штор",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            {"Цены"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {"Потолки во всю квартиру \u2014 выгодно"}
          </h2>
          <p className="text-muted-foreground mt-3">
            {"Точную стоимость рассчитаем после бесплатного замера"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative rounded-xl border p-6 lg:p-8 flex flex-col ${
                pkg.popular
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-border bg-background"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {"Популярный выбор"}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {pkg.title}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.area}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-serif font-bold text-foreground">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground ml-1">{"\u20BD"}</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollTo("contact")}
                className={`w-full ${
                  pkg.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {"Получить смету"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
