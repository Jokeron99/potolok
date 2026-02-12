import Image from "next/image";
import Link from "next/link";
import { Check, X, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CtaBlock } from "@/components/cta-block";
import type { ServiceData } from "@/lib/services-data";

interface ServicePageTemplateProps {
  service: ServiceData;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {"Главная"}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full mb-4 sm:mb-5">
                {`от ${service.priceFrom} ${service.priceUnit}`}
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4 sm:mb-5 leading-tight">
                {service.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 max-w-lg text-base sm:text-lg">
                {service.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto"
                >
                  <Link href="/#contact">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {"\u0412\u044B\u0437\u0432\u0430\u0442\u044C \u0437\u0430\u043C\u0435\u0440\u0449\u0438\u043A\u0430"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto"
                >
                  <Link href="/#calculator">
                    {"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"}
                  </Link>
                </Button>
              </div>
              <ul className="flex flex-col gap-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery mini */}
            <div className="grid grid-cols-2 gap-3">
              {service.galleryImages.slice(0, 2).map((src, i) => (
                <div
                  key={src}
                  className={`relative rounded-xl overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
                >
                  <Image
                    src={src}
                    alt={`${service.shortTitle} \u2014 \u043F\u0440\u0438\u043C\u0435\u0440 ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
              {service.galleryImages[2] && (
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <Image
                    src={service.galleryImages[2]}
                    alt={`${service.shortTitle} \u2014 \u043F\u0440\u0438\u043C\u0435\u0440 3`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-5">
                {"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.description}
              </p>
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-3">
                  {"\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F:"}
                </h3>
                <ul className="flex flex-col gap-2">
                  {service.suitableFor.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Pros */}
              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  {"\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {service.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  {"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {service.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 text-destructive/60 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
            {"\u0426\u0435\u043D\u044B"}
          </h2>
          <div className="border border-border rounded-xl overflow-x-auto">
            <Table className="min-w-[400px]">
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="text-foreground font-semibold">{"\u0423\u0441\u043B\u0443\u0433\u0430"}</TableHead>
                  <TableHead className="text-foreground font-semibold text-right">{"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {service.prices.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell>
                      <span className="text-foreground">{p.name}</span>
                      {p.note && (
                        <span className="block text-xs text-muted-foreground mt-0.5">
                          {p.note}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-accent whitespace-nowrap">
                      {p.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {"* \u0422\u043E\u0447\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u043C\u0435\u0440\u0430. \u0426\u0435\u043D\u0430 \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435 \u0438 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F."}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
            {"\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"}
          </h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {service.faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-background border border-border rounded-xl px-5"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock
        title={`\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C ${service.shortTitle.toLowerCase()}`}
        description={"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0435\u0437\u0434 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0430 \u0441 \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C\u0438. \u0422\u043E\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0451\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u0438 \u0444\u0438\u043A\u0441\u0430\u0446\u0438\u044F \u0446\u0435\u043D\u044B \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435."}
      />
    </article>
  );
}
