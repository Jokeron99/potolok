"use client";

import { useState } from "react";
import Image from "next/image";

const works = [
  {
    src: "/images/work-1.jpg",
    title: "Спальня 18 м\u00B2",
    type: "Матовый потолок, 6 светильников",
  },
  {
    src: "/images/work-2.jpg",
    title: "Кухня 14 м\u00B2",
    type: "Глянцевый потолок с парящим профилем",
  },
  {
    src: "/images/work-3.jpg",
    title: "Гостиная 28 м\u00B2",
    type: "Световые линии, теневой профиль",
  },
  {
    src: "/images/work-4.jpg",
    title: "Ванная 5 м\u00B2",
    type: "Матовый потолок, 4 светильника",
  },
  {
    src: "/images/work-5.jpg",
    title: "Прихожая 8 м\u00B2",
    type: "Трековое освещение, теневой профиль",
  },
  {
    src: "/images/work-6.jpg",
    title: "Детская 16 м\u00B2",
    type: "Световые линии, контурная подсветка",
  },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            {"Портфолио"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {"Фото наших готовых работ"}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            {"Каждый проект \u2014 от замера до финальной уборки \u2014 выполнен с максимальной аккуратностью"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <button
              key={work.src}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={work.src}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className={`absolute inset-0 bg-foreground/60 flex flex-col justify-end p-5 transition-opacity ${
                  activeIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <p className="text-sm font-bold text-background">{work.title}</p>
                <p className="text-xs text-background/80">{work.type}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
