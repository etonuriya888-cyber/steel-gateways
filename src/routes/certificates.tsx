import { Helmet } from "react-helmet-async";
import { Award, X } from "lucide-react";
import { useState } from "react";

const certs = [
  { title: "Сертификат CT-KZ · DN50–DN100", code: "KZ.7500016.07.01.04125" },
  { title: "Сертификат CT-KZ · DN150–DN200", code: "KZ.7500016.07.01.04126" },
  { title: "СТ ТОО 210340015379-01-2025", code: "Собственный стандарт" },
  { title: "Декларация о соответствии ТР ТС", code: "EAC 032/2013" },
];

export default function CertificatesPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Сертификаты CT-KZ — TEMIR QAZYNA XXI</title>
        <meta name="description" content="Действующие сертификаты CT-KZ на стальные клиновые задвижки. Подтверждение казахстанского происхождения продукции." />
        <link rel="canonical" href="/certificates" />
        <meta property="og:title" content="Сертификаты — TEMIR QAZYNA XXI" />
        <meta property="og:url" content="/certificates" />
      </Helmet>

      <section className="border-b border-border bg-gradient-hero pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Документы</div>
          <h1 className="mt-3 font-display text-5xl font-black md:text-6xl">
            Сертификаты <span className="text-gradient-gold">и качество</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Вся продукция изготавливается и сертифицируется в Казахстане. Подтверждённый статус казахстанского производителя.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <button
              key={c.code}
              onClick={() => setOpen(i)}
              className="group text-left"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-graphite p-6 transition group-hover:border-gold/40 group-hover:shadow-glow">
                <div className="grid h-full place-items-center">
                  <Award className="h-20 w-20 text-gold/40 transition group-hover:text-gold" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-xs text-muted-foreground">{c.code}</div>
                  <div className="mt-1 font-display text-sm font-bold">{c.title}</div>
                </div>
                <div className="absolute right-3 top-3 rounded-md bg-gold/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                  Действует
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-6 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <div className="relative w-full max-w-2xl rounded-3xl border border-border bg-surface p-10 shadow-elevated" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-md border border-border hover:bg-accent">
              <X className="h-4 w-4" />
            </button>
            <Award className="mx-auto h-32 w-32 text-gold" />
            <h3 className="mt-6 text-center font-display text-2xl font-black">{certs[open].title}</h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">{certs[open].code}</p>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Полный скан сертификата предоставляется по запросу. Свяжитесь с нами — мы пришлём оригинал в PDF.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
