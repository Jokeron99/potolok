"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 sm:mb-3">
              {"Бесплатный замер"}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-background text-balance mb-4 sm:mb-6">
              {"Вызовите технолога \u2014 бесплатно"}
            </h2>
            <p className="text-sm sm:text-base text-background/70 leading-relaxed mb-6 sm:mb-8 max-w-md">
              {"Это ни к чему вас не обязывает. Если цена или условия не устроят \u2014 мы просто пожмём руки и уедем."}
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">
                    {"Точная смета \u00ABпод ключ\u00BB"}
                  </p>
                  <p className="text-sm text-background/60">
                    {"Без скрытых доплат и сюрпризов"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">
                    {"Каталог образцов"}
                  </p>
                  <p className="text-sm text-background/60">
                    {"Потрогаете фактуру и выберете цвет"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-background">
                    {"Замер лазерным оборудованием"}
                  </p>
                  <p className="text-sm text-background/60">
                    {"Точность до миллиметра"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-background/10">
              <a
                href="tel:+79381332812"
                className="flex items-center gap-2 text-background font-semibold hover:text-accent transition-colors"
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

          {/* Right: Form */}
          <div className="bg-background/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-background/10">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-background mb-2">
                  {"Заявка отправлена!"}
                </h3>
                <p className="text-background/70">
                  {"Перезвоним в течение 15 минут"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold text-background mb-2">
                  {"Оставьте заявку на выезд"}
                </h3>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm text-background/60 mb-1 block"
                  >
                    {"Как вас зовут?"}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван"
                    required
                    className="w-full rounded-xl border border-background/20 bg-background/5 px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-sm text-background/60 mb-1 block"
                  >
                    {"Телефон"}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full rounded-xl border border-background/20 bg-background/5 px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full text-base py-6"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {"Вызвать технолога бесплатно"}
                </Button>

                <p className="text-xs text-center text-background/40">
                  {"Ваши данные в безопасности. Мы не передаём их третьим лицам."}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
