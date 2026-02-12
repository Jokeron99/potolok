"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">AM</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-foreground">
              {"Альянс Мастеров"}
            </p>
            <p className="text-xs text-muted-foreground leading-tight">
              {"Натяжные потолки"}
            </p>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "Преимущества", id: "benefits" },
            { label: "Калькулятор", id: "calculator" },
            { label: "Работы", id: "gallery" },
            { label: "Отзывы", id: "reviews" },
            { label: "Этапы", id: "steps" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+79515100351"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-accent" />
            +7 (951) 510-03-51
          </a>
          <Button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {"Бесплатный замер"}
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4">
          <nav className="flex flex-col gap-3">
            {[
              { label: "Преимущества", id: "benefits" },
              { label: "Калькулятор", id: "calculator" },
              { label: "Работы", id: "gallery" },
              { label: "Отзывы", id: "reviews" },
              { label: "Этапы", id: "steps" },
              { label: "FAQ", id: "faq" },
              { label: "Контакты", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm py-2 text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+79515100351"
              className="flex items-center gap-2 text-sm font-semibold text-accent py-2"
            >
              <Phone className="h-4 w-4" />
              +7 (951) 510-03-51
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
