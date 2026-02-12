"use client";

import { useState } from "react";
import { ArrowRight, Calculator, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

type Step = 1 | 2 | 3 | 4;

const roomTypes = [
  { id: "bathroom", label: "Ванная", area: "3\u201310 м\u00B2" },
  { id: "kitchen", label: "Кухня / Коридор", area: "8\u201315 м\u00B2" },
  { id: "bedroom", label: "Спальня / Гостиная", area: "12\u201330 м\u00B2" },
  { id: "studio", label: "Квартира-студия", area: "25\u201345 м\u00B2" },
];

const materialTypes = [
  {
    id: "matte",
    label: "Матовый ПВХ",
    price: "от 320 \u20BD/м\u00B2",
    desc: "Классический, универсальный",
  },
  {
    id: "satin",
    label: "Сатин ПВХ",
    price: "от 330 \u20BD/м\u00B2",
    desc: "Мягкий блеск, дорогой вид",
  },
  {
    id: "glossy",
    label: "Глянцевый ПВХ",
    price: "от 350 \u20BD/м\u00B2",
    desc: "Визуально увеличивает пространство",
  },
  {
    id: "fabric",
    label: "Тканевый",
    price: "от 1 800 \u20BD/м\u00B2",
    desc: "Дышащий, премиум-класс",
  },
];

export function CalculatorSection() {
  const [step, setStep] = useState<Step>(1);
  const [room, setRoom] = useState("");
  const [material, setMaterial] = useState("");
  const [area, setArea] = useState([18]);
  const [lights, setLights] = useState([4]);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step < 4) setStep((step + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  if (submitted) {
    return (
      <section id="calculator" className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 lg:px-8 text-center">
          <div className="bg-accent/10 rounded-2xl p-8 lg:p-12">
            <Gift className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              {"Спасибо! Расчёт почти готов"}
            </h3>
            <p className="text-muted-foreground">
              {"Наш технолог перезвонит в течение 15 минут с точной стоимостью и подарком."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            <Calculator className="inline h-4 w-4 mr-1" />
            {"Калькулятор стоимости"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {"Ответьте на 3 вопроса и получите расчёт + подарок"}
          </h2>
        </div>

        <div className="bg-background border border-border rounded-2xl p-6 lg:p-10 shadow-sm">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  s <= step ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {"Куда планируете натяжной потолок?"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {"Выберите тип помещения"}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {roomTypes.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setRoom(r.id);
                      nextStep();
                    }}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      room === r.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/30"
                    }`}
                  >
                    <p className="font-medium text-foreground">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.area}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {"Какой материал предпочитаете?"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {"Выберите тип полотна"}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {materialTypes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setMaterial(m.id);
                      nextStep();
                    }}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      material === m.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/30"
                    }`}
                  >
                    <p className="font-medium text-foreground">{m.label}</p>
                    <p className="text-xs text-accent font-semibold">{m.price}</p>
                    <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                  </button>
                ))}
              </div>
              <button
                onClick={prevStep}
                className="text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors"
              >
                {"\u2190 Назад"}
              </button>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {"Уточните параметры"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {"Площадь и количество светильников"}
              </p>

              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {"Площадь помещения"}
                    </label>
                    <span className="text-sm font-bold text-accent">
                      {area[0]} {"м\u00B2"}
                    </span>
                  </div>
                  <Slider
                    value={area}
                    onValueChange={setArea}
                    min={3}
                    max={60}
                    step={1}
                    className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>3 {"м\u00B2"}</span>
                    <span>60 {"м\u00B2"}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {"Количество светильников"}
                    </label>
                    <span className="text-sm font-bold text-accent">
                      {lights[0]} {"шт"}
                    </span>
                  </div>
                  <Slider
                    value={lights}
                    onValueChange={setLights}
                    min={0}
                    max={20}
                    step={1}
                    className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{"0 шт"}</span>
                    <span>{"20 шт"}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {"\u2190 Назад"}
                </button>
                <Button
                  onClick={nextStep}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {"Далее"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {"Расчёт почти готов!"}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {"Оставьте телефон \u2014 пришлём точный расчёт с подарком"}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <div className="bg-accent/10 rounded-xl p-4 flex items-start gap-3">
                  <Gift className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {"Ваш подарок при заказе:"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {"Светильники бесплатно + скидка 2 500\u20BD"}
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full text-base py-6"
                >
                  {"Получить расчёт и подарок"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {"Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности"}
                </p>
              </form>

              <button
                onClick={prevStep}
                className="text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors"
              >
                {"\u2190 Назад"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
