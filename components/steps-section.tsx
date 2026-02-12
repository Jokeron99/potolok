import { MessageSquare, Ruler, FileText, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Заявка",
    description:
      "Вы звоните или оставляете заявку на сайте. Мы связываемся для уточнения деталей.",
  },
  {
    icon: Ruler,
    num: "02",
    title: "Бесплатный замер",
    description:
      "Технолог приедет с каталогом образцов. Замер лазерным оборудованием. Точная смета на месте.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Договор",
    description:
      "Фиксируем цену, сроки и гарантию. Предоплата 30%, остальное \u2014 после монтажа.",
  },
  {
    icon: Wrench,
    num: "04",
    title: "Монтаж за 1 день",
    description:
      "Установка с пылесосом. Встроим светильники, скроем провода. Оставим чистоту и порядок.",
  },
];

export function StepsSection() {
  return (
    <section id="steps" className="py-10 sm:py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 sm:mb-3">
            {"Процесс"}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            {"4 шага к идеальному потолку"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 bg-background rounded-xl border border-border p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-3xl font-serif font-bold text-accent/20">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
