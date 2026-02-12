import { AlertTriangle, Droplets, Eye, Hammer } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Трещины и пятна",
    description:
      "Подкрашиваете каждый год, но трещины на стыках плит появляются снова и снова.",
  },
  {
    icon: Droplets,
    title: "Риск затопления",
    description:
      "Соседи забудут выключить кран \u2014 и ваш ремонт с мебелью будут испорчены навсегда.",
  },
  {
    icon: Eye,
    title: "Визуальный шум",
    description:
      'Кривые углы, торчащие провода и неровности плит перекрытия "давят" и портят уют.',
  },
  {
    icon: Hammer,
    title: "Бесконечный ремонт",
    description:
      "Делать потолок гипсокартоном \u2014 это недели грязи, пыли и жизни на стройке.",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 sm:mb-3">
            {"Знакомая ситуация?"}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            {"Почему откладывать ремонт \u2014 плохая идея"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
