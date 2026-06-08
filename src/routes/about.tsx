import { Helmet } from "react-helmet-async";
import productionImg from "@/assets/production.jpg";
import pipelineImg from "@/assets/pipeline.jpg";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>О компании — TEMIR QAZYNA XXI, производитель арматуры в Актобе</title>
        <meta name="description" content="TEMIR QAZYNA XXI — казахстанский производитель запорной арматуры с 2021 года. Производство до DN2600 в Актобе." />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="О компании TEMIR QAZYNA XXI" />
        <meta property="og:url" content="/about" />
      </Helmet>

      <section className="border-b border-border bg-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">О компании</div>
          <h1 className="mt-3 font-display text-5xl font-black md:text-6xl">
            Производим арматуру <span className="text-gradient-gold">с 2021 года</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <img src={productionImg} alt="Цех производства" loading="lazy" width={1600} height={1024} className="rounded-2xl border border-border shadow-elevated" />
          <div className="space-y-5 text-muted-foreground">
            <p className="text-lg">
              ТОО «TEMIR QAZYNA XXI» (БИН 210340015379) основано 12 марта 2021 года в Актобе. Сегодня мы — один из ключевых казахстанских производителей запорной арматуры до DN2600: клиновых задвижек, обратных и регулирующих клапанов, переключающих устройств.
            </p>
            <p>
              Вся продукция выпускается по собственному стандарту <span className="text-foreground font-semibold">СТ ТОО 210340015379-01-2025</span> и подтверждена сертификатом <span className="text-gold font-semibold">CT-KZ</span>.
            </p>
            <p>
              Мы работаем с нефтегазовыми компаниями, водоканалами, энергетическими предприятиями и государственными заказчиками по всему Казахстану.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { n: "2021", l: "Год основания" },
                { n: "5+", l: "Лет опыта" },
                { n: "100%", l: "KZ-производство" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-surface p-4">
                  <div className="font-display text-2xl font-black text-gradient-gold">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border">
        <img src={pipelineImg} alt="" aria-hidden loading="lazy" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl font-black md:text-5xl">Наша миссия</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Создавать казахстанскую арматуру мирового уровня — надёжную, сертифицированную и доступную, чтобы крупные промышленные проекты страны строились на отечественной продукции.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 font-display text-3xl font-black">Реквизиты</h2>
        <div className="grid gap-4 rounded-2xl border border-border bg-surface p-8 md:grid-cols-2">
          <Info k="Полное наименование" v="ТОО «TEMIR QAZYNA XXI»" />
          <Info k="БИН" v="210340015379" />
          <Info k="Дата основания" v="12.03.2021" />
          <Info k="Руководитель" v="Избасар Нурхат Аманулы" />
          <Info k="Юридический адрес" v="пр. Абилкайыр Хана, 53, пом. 2, Актобе" />
          <Info k="Стандарт" v="СТ ТОО 210340015379-01-2025" />
        </div>
      </section>
    </>
  );
}

function Info({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-border/50 py-3">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="mt-1 font-semibold">{v}</div>
    </div>
  );
}
