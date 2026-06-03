import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import valveImg from "@/assets/valve-product.jpg";
import { PRODUCTS } from "@/lib/products";
import { RequestForm } from "@/components/site/RequestForm";
import { useState } from "react";

export default function CatalogPage() {
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <Helmet>
        <title>Каталог задвижек DN50–DN200 — TEMIR QAZYNA XXI</title>
        <meta
          name="description"
          content="Каталог стальных клиновых задвижек DN50, DN80, DN100, DN150, DN200. PN 1.6 МПа. Производство Казахстан, сертификат CT-KZ."
        />
        <link rel="canonical" href="/catalog" />
        <meta property="og:title" content="Каталог продукции — TEMIR QAZYNA XXI" />
        <meta property="og:url" content="/catalog" />
      </Helmet>

      <section className="border-b border-border bg-gradient-hero pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Каталог</div>
          <h1 className="mt-3 font-display text-5xl font-black md:text-6xl">
            Клиновые <span className="text-gradient-gold">стальные задвижки</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Полная линейка DN50–DN200 по стандарту СТ ТОО 210340015379-01-2025. Сертификат CT-KZ.
            Гарантия 24 месяца.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-12">
          {PRODUCTS.map((p, idx) => (
            <article
              id={p.id}
              key={p.id}
              className={`grid items-center gap-8 rounded-3xl border border-border bg-surface p-6 shadow-elevated md:p-10 lg:grid-cols-2 ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-graphite">
                <img
                  src={valveImg}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 rounded-md bg-gradient-gold px-3 py-1 text-sm font-black text-gold-foreground shadow-glow">
                  DN{p.dn}
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-black">{p.name}</h2>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <Spec label="Давление" value={p.pn} />
                  <Spec label="Вес" value={p.weight} />
                  <Spec label="Стр. длина" value={p.length} />
                  <Spec label="Температура" value={p.temp} />
                </div>
                <div className="mt-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">
                    Применение
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.application.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-border bg-graphite px-3 py-1 text-xs text-muted-foreground"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#request"
                  onClick={() => setSelected(p.name)}
                  className="mt-7 inline-flex rounded-md bg-gradient-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-glow"
                >
                  Запросить цену
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="request" className="border-t border-border bg-gradient-hero py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-3xl font-black md:text-4xl">Запросить КП</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Ответим в течение 30 минут с ценами и сроками.
          </p>
          <div className="glass mt-8 rounded-3xl p-6 md:p-10">
            <RequestForm defaultProduct={selected} />
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-graphite p-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-display font-bold">{value}</div>
    </div>
  );
}
