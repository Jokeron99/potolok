import { X, Check } from "lucide-react";

const competitorItems = [
  'Скрытые доплаты. Цена вырастает на объекте из-за "сложных стен"',
  "Грязь и пыль. Сверлят без пылесоса, строительная пыль на мебели",
  "Опасные железные баллоны. Экономят на безопасности",
  "Без договора. Претензии предъявить некому",
];

const ourItems = [
  "Фикс-прайс. Сумма в договоре окончательная. Ноль доплат",
  "Чистый монтаж. Перфораторы с пылесборниками, мастера в бахилах",
  "Взрывобезопасно. Современные композитные баллоны",
  "Официальный договор с гарантией 15 лет",
];

export function ComparisonSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            {"Сравнение"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {'Почему выбирают нас, а не "частников с Авито"?'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Competitors */}
          <div className="rounded-xl border border-border bg-background p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">
                {"Обычная бригада"}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {competitorItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="rounded-xl border-2 border-accent bg-background p-6 lg:p-8 relative">
            <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {"Альянс Мастеров"}
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">
                {"Наш подход"}
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {ourItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
