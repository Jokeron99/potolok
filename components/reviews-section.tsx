import { Star, MapPin } from "lucide-react";

const reviews = [
  {
    name: "Елена В.",
    location: 'ЖК "Вересаево"',
    text: "Очень переживала за новые обои и ламинат. Мастера приехали в бахилах, со стремянками с мягкими ножками. Пыли вообще не было! Потолок на кухне сделали за 3 часа. Рекомендую!",
    rating: 5,
  },
  {
    name: "Алексей М.",
    location: "Батайск",
    text: "Заказывал теневой профиль Еврокраб. Объездил 3 фирмы, везде заламывали цену. Здесь технолог сразу назвал адекватную стоимость, которая не изменилась в конце. Всё чётко!",
    rating: 5,
  },
  {
    name: "Марина К.",
    location: "Центр Ростова",
    text: "Боялась запаха химии, так как дома маленький ребёнок. Поставили премиальное полотно, запаха не было вообще! Спасибо за оперативность и аккуратность.",
    rating: 5,
  },
  {
    name: "Дмитрий С.",
    location: "Левенцовка",
    text: "Делали потолки во всей квартире \u2014 3 комнаты, кухня и коридор. Всё заняло 2 дня. Цена не изменилась с замера. Ребята профессионалы, однозначно буду рекомендовать.",
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            {"Отзывы"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {"Говорят ваши соседи"}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1">
                {`\u201C${review.text}\u201D`}
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
