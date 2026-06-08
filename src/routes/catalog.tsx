import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import valveImg from "@/assets/valve-product.jpg";
import { CATEGORIES } from "@/lib/products";
import { RequestForm } from "@/components/site/RequestForm";
import { useState } from "react";

export default function CatalogPage() {
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <Helmet>
        <title>Каталог запорной арматуры до DN2600 — TEMIR QAZYNA XXI</title>
        <meta name="description" content="Каталог запорной арматуры: клиновые задвижки, обратные и регулирующие клапаны, переключающие устройства, арматура для нефтегаза, энергетики и водоснабжения. До DN2600. Сертификат CT-KZ." />
        <link rel="canonical" href="/catalog" />
        <meta property="og:title" content="Каталог продукции — TEMIR QAZYNA XXI" />
        <meta property="og:url" content="/catalog" />
      </Helmet>

      <section className="border-b border-border bg-gradient-hero pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Каталог</div>
          <h1 className="mt-3 font-display text-5xl font-black md:text-6xl">
            Запорная арматура <span className="text-gradient-gold">до DN2600</span>
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Восемь направлений продукции: клиновые задвижки, обратные и регулирующие клапаны, переключающие устройства, а также отраслевые решения для нефтегаза, энергетики и водоснабжения. Производство по стандарту СТ ТОО 210340015379-01-2025. Сертификат CT-KZ. Гарантия 24 месяца.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-gold/40 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold leading-tight">{c.name}</h3>
              <div className="mt-2 text-xs text-muted-foreground">{c.range}</div>
            </a>
          ))}
        </div>
      </section>

      {/* DETAILED CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="space-y-12">
          {CATEGORIES.map((c, idx) => (
            <article
              id={c.id}
              key={c.id}
              className={`grid items-center gap-8 rounded-3xl border border-border bg-surface p-6 shadow-elevated md:p-10 lg:grid-cols-2 ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-graphite">
                <img src={valveImg} alt={c.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                <div className="absolute right-4 top-4 rounded-md bg-gradient-gold px-3 py-1 text-sm font-black text-gold-foreground shadow-glow">{c.range}</div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold">
                  <c.icon className="h-3.5 w-3.5" /> Направление
                </div>
                <h2 className="mt-3 font-display text-3xl font-black">{c.name}</h2>
                <p className="mt-4 text-muted-foreground">{c.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {f}</li>
                  ))}
                </ul>
                <a
                  href="#request"
                  onClick={() => setSelected(c.name)}
                  className="mt-7 inline-flex rounded-md bg-gradient-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-glow"
                >
                  Запросить цену
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-gold/30 bg-gold/5 p-8 md:p-12 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-gold">Индивидуальные заказы</div>
          <h2 className="mt-3 font-display text-2xl font-black md:text-3xl">
            Мы постоянно расширяем линейку продукции и готовы рассматривать индивидуальные технические требования заказчиков.
          </h2>
          <a href="#request" className="mt-6 inline-flex rounded-md bg-gradient-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-glow">
            Обсудить ваш проект
          </a>
        </div>
      </section>

      <section id="request" className="border-t border-border bg-gradient-hero py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center font-display text-3xl font-black md:text-4xl">Запросить КП</h2>
          <p className="mt-3 text-center text-muted-foreground">Ответим в течение 30 минут с ценами и сроками.</p>
          <div className="glass mt-8 rounded-3xl p-6 md:p-10">
            <RequestForm defaultProduct={selected} />
          </div>
        </div>
      </section>
    </>
  );
}
