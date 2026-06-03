import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { RequestForm } from "@/components/site/RequestForm";

const media = ["Вода", "Газ", "Нефть", "Нефтепродукты"] as const;

export default function SelectorPage() {
  const [m, setM] = useState<(typeof media)[number]>("Вода");
  const [pressure, setPressure] = useState("1.0");
  const [diameter, setDiameter] = useState(100);
  const [temp, setTemp] = useState("80");
  const [qty, setQty] = useState(10);
  const [shown, setShown] = useState(false);

  const match = useMemo(() => {
    return PRODUCTS.reduce((acc, p) =>
      Math.abs(p.dn - diameter) < Math.abs(acc.dn - diameter) ? p : acc,
    );
  }, [diameter]);

  return (
    <>
      <Helmet>
        <title>AI-подбор задвижек — TEMIR QAZYNA XXI</title>
        <meta
          name="description"
          content="Интеллектуальный калькулятор подбора стальных клиновых задвижек по среде, давлению, диаметру и температуре."
        />
        <link rel="canonical" href="/selector" />
        <meta property="og:title" content="AI-подбор арматуры" />
        <meta property="og:url" content="/selector" />
      </Helmet>

      <section className="border-b border-border bg-gradient-hero pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Sparkles className="h-3.5 w-3.5" /> AI-подбор
          </div>
          <h1 className="mt-4 font-display text-5xl font-black md:text-6xl">
            Подберите <span className="text-gradient-gold">арматуру за 30 секунд</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Ответьте на 5 вопросов — система предложит модель и отправит заявку нашему инженеру.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="glass rounded-3xl p-8 lg:col-span-3">
            <Field label="Рабочая среда">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {media.map((x) => (
                  <button
                    key={x}
                    type="button"
                    onClick={() => setM(x)}
                    className={`rounded-md border px-3 py-2.5 text-sm font-semibold transition ${
                      m === x
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-border bg-surface text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </Field>

            <Field label={`Диаметр условный: DN${diameter}`}>
              <input
                type="range"
                min={50}
                max={200}
                step={10}
                value={diameter}
                onChange={(e) => setDiameter(+e.target.value)}
                className="w-full accent-[oklch(0.78_0.13_78)]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>DN50</span>
                <span>DN200</span>
              </div>
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Давление, МПа">
                <input
                  value={pressure}
                  onChange={(e) => setPressure(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm"
                />
              </Field>
              <Field label="Температура, °C">
                <input
                  value={temp}
                  onChange={(e) => setTemp(e.target.value)}
                  className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm"
                />
              </Field>
            </div>

            <Field label="Количество, шт.">
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(+e.target.value)}
                className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm"
              />
            </Field>

            <button
              onClick={() => setShown(true)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-glow"
            >
              Подобрать арматуру <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-2">
            {shown ? (
              <div className="glass rounded-3xl p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-gold">
                  Рекомендуемая модель
                </div>
                <h3 className="mt-2 font-display text-2xl font-black">{match.name}</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <Row k="Среда" v={m} />
                  <Row k="Давление" v={`${pressure} МПа`} />
                  <Row k="Температура" v={`${temp} °C`} />
                  <Row k="Количество" v={`${qty} шт.`} />
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {match.features.slice(0, 2).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-6">
                  <div className="mb-3 text-sm font-bold">Отправить заявку менеджеру:</div>
                  <RequestForm
                    compact
                    defaultProduct={`${match.name}, ${qty} шт., ${m}, ${pressure} МПа`}
                  />
                </div>
              </div>
            ) : (
              <div className="glass grid h-full place-items-center rounded-3xl p-10 text-center">
                <div>
                  <Sparkles className="mx-auto h-10 w-10 text-gold" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Заполните параметры — здесь появится рекомендация и форма быстрой заявки.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-border/50 pb-1.5">
      <span>{k}</span>
      <span className="font-semibold text-foreground">{v}</span>
    </div>
  );
}
