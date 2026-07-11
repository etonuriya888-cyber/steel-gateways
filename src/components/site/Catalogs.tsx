import { useState } from "react";
import { BookOpen, Download, X, FileText, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import cover150 from "@/assets/catalogs/class150-nps2-cover.jpg.asset.json";
import cover300 from "@/assets/catalogs/class300-nps3-cover.jpg.asset.json";
import cover900_3 from "@/assets/catalogs/class900-nps3-cover.jpg.asset.json";
import cover900_4 from "@/assets/catalogs/class900-nps4-cover.jpg.asset.json";
import cover900_8 from "@/assets/catalogs/class900-nps8-cover.jpg.asset.json";
import coverZms from "@/assets/catalogs/zms-65-210-cover.jpg.asset.json";

// PDFs live in /public/catalogs so they are served as static files in production (Vercel).
const pdf150 = { url: "/catalogs/class150-nps2.pdf" };
const pdf300 = { url: "/catalogs/class300-nps3.pdf" };
const pdf900_3 = { url: "/catalogs/class900-nps3.pdf" };
const pdf900_4 = { url: "/catalogs/class900-nps4.pdf" };
const pdf900_8 = { url: "/catalogs/class900-nps8.pdf" };
const pdfZms = { url: "/catalogs/zms-65-210.pdf" };


type Catalog = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  cover: string;
  pdf: string;
  fileName: string;
};

const CATALOGS: Catalog[] = [
  {
    id: "class150-nps2",
    title: "Литые стальные задвижки",
    subtitle: "ANSI Class 150 · NPS 2\"",
    description:
      "Технический паспорт клиновой литой задвижки: конструктивная схема, испытательные давления, применяемые стандарты API 600 / ANSI B16.34.",
    tag: "Class 150",
    cover: cover150.url,
    pdf: pdf150.url,
    fileName: "temirqazyna-class150-nps2.pdf",
  },
  {
    id: "class300-nps3",
    title: "Литые стальные задвижки",
    subtitle: "ANSI Class 300 · NPS 3\"",
    description:
      "Официальная техническая документация: разрезная схема задвижки, параметры гидроиспытаний и перечень применяемых отраслевых стандартов.",
    tag: "Class 300",
    cover: cover300.url,
    pdf: pdf300.url,
    fileName: "temirqazyna-class300-nps3.pdf",
  },
  {
    id: "class900-nps3",
    title: "Литая клиновая задвижка RTJ",
    subtitle: "ANSI Class 900 · NPS 3\"",
    description:
      "Полная спецификация: основные технические характеристики, присоединительные размеры RTJ-фланца ASME B16.5, материалы исполнения и рабочие давления.",
    tag: "Class 900 RTJ",
    cover: cover900_3.url,
    pdf: pdf900_3.url,
    fileName: "temirqazyna-class900-nps3-rtj.pdf",
  },
  {
    id: "class900-nps4",
    title: "Литая клиновая задвижка RTJ",
    subtitle: "ANSI Class 900 · NPS 4\"",
    description:
      "Инженерный каталог с чертежом в разрезе, таблицами присоединительных размеров и допустимых рабочих давлений в зависимости от температуры.",
    tag: "Class 900 RTJ",
    cover: cover900_4.url,
    pdf: pdf900_4.url,
    fileName: "temirqazyna-class900-nps4-rtj.pdf",
  },
  {
    id: "class900-nps8",
    title: "Литая клиновая задвижка RTJ",
    subtitle: "ANSI Class 900 · NPS 8\"",
    description:
      "Документация на задвижку большого диаметра: габаритные размеры, масса, материалы корпуса и уплотнений, условия эксплуатации до +538 °C.",
    tag: "Class 900 RTJ",
    cover: cover900_8.url,
    pdf: pdf900_8.url,
    fileName: "temirqazyna-class900-nps8-rtj.pdf",
  },
  {
    id: "zms-65-210",
    title: "Задвижка шиберная ЗМС 65×210",
    subtitle: "DN 65 · PN 21,0 МПа · RTJ 6B",
    description:
      "Техническая карта шиберной задвижки для нефти, газа и газоконденсата: конструкция, присоединительные размеры фланца RTJ 6B и рабочие параметры.",
    tag: "ЗМС · PN 21 МПа",
    cover: coverZms.url,
    pdf: pdfZms.url,
    fileName: "temirqazyna-zms-65-210.pdf",
  },
];

export function Catalogs() {
  const [active, setActive] = useState<Catalog | null>(null);

  return (
    <section id="catalogs" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Библиотека документации
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.05] md:text-5xl">
              Каталоги и <span className="text-gradient-gold">техническая документация</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Официальные каталоги продукции TEMIR QAZYNA XXI с чертежами, конструктивными схемами и техническими характеристиками. Открывайте прямо в браузере или скачивайте оригинальный PDF.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-xs font-semibold text-gold md:inline-flex">
            <ShieldCheck className="h-4 w-4" />
            Официальные документы производителя
          </div>
        </div>

        {/* Shelf */}
        <div className="relative">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl" />

          {/* Desktop / tablet grid */}
          <ul className="hidden gap-x-8 gap-y-14 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {CATALOGS.map((c) => (
              <li key={c.id}>
                <CatalogBook catalog={c} onOpen={() => setActive(c)} />
              </li>
            ))}
          </ul>

          {/* Mobile horizontal swipe */}
          <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 -mx-6 px-6 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {CATALOGS.map((c) => (
              <li key={c.id} className="w-[75%] shrink-0 snap-center">
                <CatalogBook catalog={c} onOpen={() => setActive(c)} />
              </li>
            ))}
          </ul>

          {/* Wooden/steel shelf line — desktop only */}
          <div className="pointer-events-none mt-4 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent sm:block" />
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Все материалы предоставлены производителем и публикуются в оригинальном виде без изменений.
        </p>
      </div>

      {/* PDF Viewer */}
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

function CatalogBook({ catalog, onOpen }: { catalog: Catalog; onOpen: () => void }) {
  return (
    <div className="group relative">
      {/* Book */}
      <button
        onClick={onOpen}
        className="relative block w-full [perspective:1400px] focus:outline-none"
        aria-label={`Открыть каталог: ${catalog.title} ${catalog.subtitle}`}
      >
        <div
          className="relative aspect-[3/4] w-full origin-left transition-all duration-500 ease-out will-change-transform [transform-style:preserve-3d] group-hover:-translate-y-2 group-hover:[transform:rotateY(-8deg)_translateZ(20px)]"
        >
          {/* Shadow beneath */}
          <div className="pointer-events-none absolute -bottom-6 left-4 right-4 h-6 rounded-[50%] bg-black/70 opacity-40 blur-2xl transition-all duration-500 group-hover:opacity-70 group-hover:blur-3xl" />

          {/* Spine (left edge) */}
          <div
            className="absolute inset-y-0 left-0 w-[14px] rounded-l-[3px] bg-gradient-to-r from-black via-graphite to-graphite shadow-[inset_-1px_0_0_rgba(255,255,255,0.05)]"
            style={{ transform: "translateZ(-6px)" }}
          />

          {/* Cover */}
          <div className="absolute inset-0 overflow-hidden rounded-[6px] border border-border bg-surface shadow-elevated ring-1 ring-gold/10 transition-shadow duration-500 group-hover:shadow-glow group-hover:ring-gold/40">
            {/* Cover image */}
            <img
              src={catalog.cover}
              alt={`Обложка каталога ${catalog.title} ${catalog.subtitle}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            {/* Page glow / paper tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40" />
            {/* Gold top bar */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-gold" />
            {/* Brand strip */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black via-black/90 to-black/0 px-3 pb-3 pt-8">
              <div className="min-w-0">
                <div className="truncate font-display text-[11px] font-black uppercase tracking-widest text-gold">
                  TEMIR QAZYNA XXI
                </div>
                <div className="mt-0.5 truncate text-[10px] text-white/70">{catalog.tag}</div>
              </div>
              <BookOpen className="h-4 w-4 shrink-0 text-gold" />
            </div>
            {/* Sheen */}
            <div className="pointer-events-none absolute -inset-x-1 -top-1 h-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          </div>

          {/* Page edge (right) */}
          <div
            className="pointer-events-none absolute inset-y-1 right-0 w-[3px] rounded-r-[2px] bg-gradient-to-b from-white/30 via-white/60 to-white/20"
            style={{ transform: "translateZ(1px)" }}
          />

          {/* Hover CTA */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center opacity-0 transition-all duration-500 group-hover:translate-y-[-40%] group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-gold-foreground shadow-glow">
              <BookOpen className="h-3.5 w-3.5" /> Открыть каталог
            </span>
          </div>
        </div>
      </button>

      {/* Meta */}
      <div className="mt-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
          {catalog.subtitle}
        </div>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-tight">{catalog.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{catalog.description}</p>
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
