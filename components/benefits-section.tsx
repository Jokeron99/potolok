import { Sun, Droplets, Gauge, ShieldCheck, Banknote, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Sun,
    title: "Не желтеет и не выцветает",
    description:
      "Полотна с UV-защитой. Белый остаётся идеально белым даже через 15 лет.",
  },
  {
    icon: Droplets,
    title: "Спасение от затопления",
    description:
      "1 м\u00B2 полотна выдерживает до 100 литров воды. Сольём \u2014 и потолок как новый.",
  },
  {
    icon: Gauge,
    title: "Не провисает",
    description:
      "Усиленный алюминиевый профиль по периметру. Полотно натянуто идеально.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасный монтаж",
    description:
      "Современные композитные баллоны вместо опасных железных. Не взрываются.",
  },
  {
    icon: Banknote,
    title: "Фиксированная цена",
    description:
      "Сумма в договоре \u2014 окончательная. Никаких доплат и скрытых расходов.",
  },
  {
    icon: Sparkles,
    title: "Чистый монтаж",
    description:
      "Перфораторы с пылесборниками. Мастера в бахилах. Обои останутся чистыми.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 sm:mb-3">
            {"Долговечность и качество"}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            {"Потолок, который выглядит как новый даже через 15 лет"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative bg-background rounded-xl p-6 border border-border hover:border-accent/40 transition-all hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
