import { useState } from "react";
import { BookOpen, Download, X, FileText, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CATALOGS, type Catalog } from "@/lib/catalogs";

type CatalogsProps = {
  title?: React.ReactNode;
  eyebrow?: string;
  description?: string;
};

export function Catalogs({
  title,
  eyebrow = "Библиотека документации",
  description = "Официальные каталоги продукции TEMIR QAZYNA XXI с чертежами, конструктивными схемами и техническими характеристиками. Открывайте прямо в браузере или скачивайте оригинальный PDF.",
}: CatalogsProps = {}) {
  const [active, setActive] = useState<Catalog | null>(null);

  return (
    <section id="catalogs" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.05] md:text-5xl">
              {title ?? (
                <>
                  Каталоги и <span className="text-gradient-gold">техническая документация</span>
                </>
              )}
            </h2>
            <p className="mt-5 text-muted-foreground">{description}</p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-semibold text-gold md:inline-flex">
            <ShieldCheck className="h-4 w-4" />
            Официальные документы производителя
          </div>
        </div>

        {/* Shelf */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl" />

          <ul className="hidden gap-x-8 gap-y-14 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {CATALOGS.map((c) => (
              <li key={c.id} className={c.featured ? "sm:col-span-2 lg:col-span-3" : undefined}>
                <CatalogBook catalog={c} onOpen={() => setActive(c)} featured={c.featured} />
              </li>
            ))}
          </ul>

          <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 -mx-6 px-6 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {CATALOGS.map((c) => (
              <li key={c.id} className="w-[75%] shrink-0 snap-center">
                <CatalogBook catalog={c} onOpen={() => setActive(c)} />
              </li>
            ))}
          </ul>

          <div className="pointer-events-none mt-4 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent sm:block" />
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Все материалы предоставлены производителем и публикуются в оригинальном виде без изменений.
        </p>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-6xl gap-0 overflow-hidden border-border bg-surface p-0 sm:rounded-2xl">
          {active && (
            <>
              <div className="flex items-center justify-between gap-4 border-b border-border bg-graphite/60 px-5 py-3">
                <DialogTitle className="flex min-w-0 items-center gap-3 text-left">
                  <FileText className="h-5 w-5 shrink-0 text-gold" />
                  <span className="truncate">
                    <span className="block truncate font-display text-sm font-bold">{active.title}</span>
                    <span className="block truncate text-xs text-muted-foreground">{active.subtitle}</span>
                  </span>
                </DialogTitle>
                <div className="flex items-center gap-2">
                  <a
                    href={active.pdf}
                    download={active.fileName}
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-3 py-2 text-xs font-bold text-gold-foreground shadow-glow transition hover:opacity-90"
                  >
                    <Download className="h-3.5 w-3.5" /> Скачать PDF
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Закрыть"
                    className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface transition hover:bg-surface-elevated"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="h-[80vh] w-full bg-black">
                <iframe
                  key={active.id}
                  src={`${active.pdf}#view=FitH`}
                  title={active.title}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function CatalogBook({
  catalog,
  onOpen,
  featured,
}: {
  catalog: Catalog;
  onOpen: () => void;
  featured?: boolean;
}) {
  return (
    <div className={`group relative ${featured ? "sm:grid sm:grid-cols-[minmax(0,320px)_1fr] sm:items-center sm:gap-10" : ""}`}>
      <button
        onClick={onOpen}
        className="relative block w-full [perspective:1400px] focus:outline-none"
        aria-label={`Открыть каталог: ${catalog.title} ${catalog.subtitle}`}
      >
        <div className="relative aspect-[3/4] w-full origin-left transition-all duration-500 ease-out will-change-transform [transform-style:preserve-3d] group-hover:-translate-y-2 group-hover:[transform:rotateY(-8deg)_translateZ(20px)]">
          <div className="pointer-events-none absolute -bottom-6 left-4 right-4 h-6 rounded-[50%] bg-black/70 opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-70 group-hover:blur-3xl" />
          <div
            className="absolute inset-y-0 left-0 w-[14px] rounded-l-[3px] bg-gradient-to-r from-black via-graphite to-graphite shadow-[inset_-1px_0_0_rgba(255,255,255,0.05)]"
            style={{ transform: "translateZ(-6px)" }}
          />
          <div className="absolute inset-0 overflow-hidden rounded-[6px] border border-border bg-surface shadow-elevated ring-1 ring-gold/10 transition-shadow duration-500 group-hover:shadow-glow group-hover:ring-gold/40">
            <img
              src={catalog.cover}
              alt={`Обложка каталога ${catalog.title} ${catalog.subtitle}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40" />
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-gold" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black via-black/90 to-black/0 px-3 pb-3 pt-8">
              <div className="min-w-0">
                <div className="truncate font-display text-[11px] font-black uppercase tracking-widest text-gold">
                  TEMIR QAZYNA XXI
                </div>
                <div className="mt-0.5 truncate text-[10px] text-white/70">{catalog.tag}</div>
              </div>
              <BookOpen className="h-4 w-4 shrink-0 text-gold" />
            </div>
            <div className="pointer-events-none absolute -inset-x-1 -top-1 h-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          </div>
          <div
            className="pointer-events-none absolute inset-y-1 right-0 w-[3px] rounded-r-[2px] bg-gradient-to-b from-white/30 via-white/60 to-white/20"
            style={{ transform: "translateZ(1px)" }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center opacity-0 transition-all duration-500 group-hover:translate-y-[-40%] group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-gold-foreground shadow-glow">
              <BookOpen className="h-3.5 w-3.5" /> Открыть каталог
            </span>
          </div>
        </div>
      </button>

      <div className={featured ? "mt-6 sm:mt-0" : "mt-6"}>
        {featured && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
            <ShieldCheck className="h-3 w-3" /> Сводный официальный каталог
          </div>
        )}
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
          {catalog.subtitle}
        </div>
        <h3 className={`mt-1.5 font-display font-bold leading-tight ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {catalog.title}
        </h3>
        <p className={`mt-2 text-sm text-muted-foreground ${featured ? "md:text-base" : "line-clamp-3"}`}>
          {catalog.description}
        </p>
        <div className="mt-3 flex items-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <ShieldCheck className="h-3 w-3 text-gold" /> Официальная документация производителя
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gold transition hover:underline"
          >
            <BookOpen className="h-3.5 w-3.5" /> Открыть
          </button>
          <a
            href={catalog.pdf}
            download={catalog.fileName}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" /> PDF
          </a>
        </div>
      </div>
    </div>
  );
}
