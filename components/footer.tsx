"use client";

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AM</span>
              </div>
              <div>
                <p className="text-sm font-bold text-background leading-tight">
                  {"Альянс Мастеров"}
                </p>
                <p className="text-xs text-background/60 leading-tight">
                  {"Натяжные потолки"}
                </p>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              {"Премиальные натяжные потолки с гарантией 15 лет в Ростове-на-Дону."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-background mb-4">{"Навигация"}</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Преимущества", id: "benefits" },
                { label: "Калькулятор", id: "calculator" },
                { label: "Работы", id: "gallery" },
                { label: "Отзывы", id: "reviews" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-background/60 hover:text-accent transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-background mb-4">{"Услуги"}</p>
            <nav className="flex flex-col gap-2 text-sm">
              {[
                { label: "Матовые потолки", href: "/uslugi/matovye" },
                { label: "Глянцевые потолки", href: "/uslugi/glyancevye" },
                { label: "Сатиновые потолки", href: "/uslugi/satinovye" },
                { label: "Тканевые потолки", href: "/uslugi/tkanevye" },
                { label: "Световые линии", href: "/uslugi/svetovye-linii" },
                { label: "Теневой профиль", href: "/uslugi/tenevoj-profil" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-background/60 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-background mb-4">{"Контакты"}</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+79381332812"
                className="flex items-center gap-2 text-sm text-background/80 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 text-accent" />
                +7 (938) 133-28-12
              </a>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 text-accent" />
                {"Ростов-на-Дону"}
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Clock className="h-4 w-4 text-accent" />
                {"Пн\u2013Вс: 08:00\u201319:00"}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            {"\u00A9 2026 \u0410\u043B\u044C\u044F\u043D\u0441 \u041C\u0430\u0441\u0442\u0435\u0440\u043E\u0432. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."}
          </p>
          <Link href="/privacy" className="text-xs text-background/40 hover:text-accent transition-colors">
            {"Политика конфиденциальности"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
