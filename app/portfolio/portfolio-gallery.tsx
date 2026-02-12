"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Category = "all" | "matovye" | "glyancevye" | "satinovye" | "tkanevye" | "svetovye" | "tenevoj";

interface WorkItem {
  src: string;
  title: string;
  type: string;
  category: Category[];
  area: string;
}

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "\u0412\u0441\u0435 \u0440\u0430\u0431\u043E\u0442\u044B" },
  { id: "matovye", label: "\u041C\u0430\u0442\u043E\u0432\u044B\u0435" },
  { id: "glyancevye", label: "\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0435" },
  { id: "satinovye", label: "\u0421\u0430\u0442\u0438\u043D\u043E\u0432\u044B\u0435" },
  { id: "tkanevye", label: "\u0422\u043A\u0430\u043D\u0435\u0432\u044B\u0435" },
  { id: "svetovye", label: "\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438" },
  { id: "tenevoj", label: "\u0422\u0435\u043D\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C" },
];

const works: WorkItem[] = [
  {
    src: "/images/work-1.jpg",
    title: "\u0421\u043F\u0430\u043B\u044C\u043D\u044F \u0432 \u0416\u041A \u00AB\u0412\u0435\u0440\u0435\u0441\u0430\u0435\u0432\u043E\u00BB",
    type: "\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A, 6 \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u043E\u0432",
    category: ["matovye"],
    area: "18 \u043C\u00B2",
  },
  {
    src: "/images/work-2.jpg",
    title: "\u041A\u0443\u0445\u043D\u044F \u043D\u0430 \u041B\u0435\u0432\u0435\u043D\u0446\u043E\u0432\u043A\u0435",
    type: "\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A \u0441 \u043F\u0430\u0440\u044F\u0449\u0438\u043C \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u043C",
    category: ["glyancevye", "tenevoj"],
    area: "14 \u043C\u00B2",
  },
  {
    src: "/images/work-3.jpg",
    title: "\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0420\u043E\u0441\u0442\u043E\u0432\u0430",
    type: "\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438, \u0442\u0435\u043D\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    category: ["svetovye", "tenevoj"],
    area: "28 \u043C\u00B2",
  },
  {
    src: "/images/work-4.jpg",
    title: "\u0412\u0430\u043D\u043D\u0430\u044F \u0432 \u0411\u0430\u0442\u0430\u0439\u0441\u043A\u0435",
    type: "\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A, 4 \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0430",
    category: ["matovye"],
    area: "5 \u043C\u00B2",
  },
  {
    src: "/images/work-5.jpg",
    title: "\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F \u0432 \u0416\u041A \u00AB\u0421\u0443\u0432\u043E\u0440\u043E\u0432\u0441\u043A\u0438\u0439\u00BB",
    type: "\u0422\u0440\u0435\u043A\u043E\u0432\u043E\u0435 \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435, \u0442\u0435\u043D\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    category: ["tenevoj"],
    area: "8 \u043C\u00B2",
  },
  {
    src: "/images/work-6.jpg",
    title: "\u0414\u0435\u0442\u0441\u043A\u0430\u044F \u043D\u0430 \u0421\u0435\u0432\u0435\u0440\u043D\u043E\u043C",
    type: "\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438, \u043A\u043E\u043D\u0442\u0443\u0440\u043D\u0430\u044F \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430",
    category: ["svetovye"],
    area: "16 \u043C\u00B2",
  },
  {
    src: "/images/work-7.jpg",
    title: "\u041A\u0443\u0445\u043D\u044F-\u0433\u043E\u0441\u0442\u0438\u043D\u0430\u044F \u0432 \u0416\u041A \u00AB\u041A\u0440\u0430\u0441\u043D\u044B\u0439\u00BB",
    type: "\u0413\u043B\u044F\u043D\u0446\u0435\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A, LED-\u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430",
    category: ["glyancevye", "tenevoj"],
    area: "32 \u043C\u00B2",
  },
  {
    src: "/images/work-8.jpg",
    title: "\u0421\u043F\u0430\u043B\u044C\u043D\u044F \u0432 \u0410\u043A\u0441\u0430\u0439\u0435",
    type: "\u0421\u0430\u0442\u0438\u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A, \u0442\u0435\u043D\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    category: ["satinovye", "tenevoj"],
    area: "22 \u043C\u00B2",
  },
  {
    src: "/images/work-9.jpg",
    title: "\u041E\u0444\u0438\u0441 \u043D\u0430 \u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0421\u0430\u0434\u043E\u0432\u043E\u0439",
    type: "\u0421\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438, \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0437\u043E\u0440",
    category: ["svetovye"],
    area: "45 \u043C\u00B2",
  },
  {
    src: "/images/work-10.jpg",
    title: "\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F \u0432 \u0416\u041A \u00AB\u0417\u0430\u043F\u0430\u0434\u043D\u044B\u0439\u00BB",
    type: "\u041F\u0430\u0440\u044F\u0449\u0438\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439",
    category: ["tenevoj"],
    area: "35 \u043C\u00B2",
  },
  {
    src: "/images/work-11.jpg",
    title: "\u0421\u0442\u043E\u043B\u043E\u0432\u0430\u044F \u0432 \u0447\u0430\u0441\u0442\u043D\u043E\u043C \u0434\u043E\u043C\u0435",
    type: "\u0422\u043A\u0430\u043D\u0435\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A Descor",
    category: ["tkanevye"],
    area: "24 \u043C\u00B2",
  },
  {
    src: "/images/work-12.jpg",
    title: "\u0412\u0430\u043D\u043D\u0430\u044F \u0432 \u0416\u041A \u00AB\u041C\u0430\u043B\u0438\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E\u00BB",
    type: "\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u043F\u043E\u0442\u043E\u043B\u043E\u043A, \u0442\u043E\u0447\u0435\u0447\u043D\u044B\u0435 \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0438",
    category: ["matovye"],
    area: "6 \u043C\u00B2",
  },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? works
      : works.filter((w) => w.category.includes(activeCategory));

  return (
    <>
      {/* Filter tabs */}
      <section className="pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((work) => (
              <button
                key={work.src}
                onClick={() => setSelectedWork(work)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer text-left"
              >
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/60 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-bold text-background">{work.title}</p>
                  <p className="text-xs text-background/80">{work.type}</p>
                  <p className="text-xs text-accent font-medium mt-1">{work.area}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                {"\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0440\u0430\u0431\u043E\u0442 \u0432 \u044D\u0442\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedWork && (
            <>
              <div className="relative aspect-[16/10]">
                <Image
                  src={selectedWork.src}
                  alt={selectedWork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <div className="p-6">
                <DialogTitle className="font-serif text-xl font-bold text-foreground mb-1">
                  {selectedWork.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm">
                  {selectedWork.type}
                  {" \u2022 "}
                  {selectedWork.area}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
