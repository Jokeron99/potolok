import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Когда лучше делать потолок: до или после обоев?",
    a: "Можно и так, и так. Но мы рекомендуем сначала клеить обои. Мы работаем с пылесосом, поэтому стены останутся чистыми. Если делать потолок до обоев \u2014 есть риск испачкать его клеем при поклейке.",
  },
  {
    q: "Насколько опустится потолок?",
    a: "Стандартный отступ \u2014 4\u20135 см. Если планируются встроенные светильники, потолок опустится на высоту цоколя лампы (6\u20138 см). Мы используем лазерный уровень, чтобы сохранить максимум высоты.",
  },
  {
    q: "Сколько времени занимает установка?",
    a: "Монтаж в комнате 15\u201320 м\u00B2 длится 3\u20136 часов. Вся квартира \u2014 1\u20132 дня. Мы работаем быстро и аккуратно.",
  },
  {
    q: "Что лучше \u2014 ПВХ или ткань?",
    a: "ПВХ защищает от протечек, легко моется, подходит для ванной и кухни. Ткань \u2014 прочнее, \u00ABдышит\u00BB и подходит для неотапливаемых помещений. Наш технолог поможет выбрать.",
  },
  {
    q: "Что делать если затопили соседи?",
    a: "ПВХ-потолок выдерживает до 100 л/м\u00B2 воды. Мы приедем, аккуратно сольём воду \u2014 и полотно восстановится. Это бесплатно в рамках гарантии.",
  },
  {
    q: "Можно ли ставить натяжной потолок в ванной?",
    a: "Да! ПВХ-потолки влагостойкие и герметичные, отлично подходят для влажных помещений. Они не впитывают запахи и легко моются.",
  },
  {
    q: "Есть ли рассрочка?",
    a: "Да, мы предоставляем рассрочку без процентов на 3 месяца. Без банка, без переплаты. Подробности уточняйте у менеджера.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-2 sm:mb-3">
            {"FAQ"}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            {"Частые вопросы"}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-accent py-4 sm:py-5 text-sm sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
