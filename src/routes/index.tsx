import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Award, CheckCircle2, Factory, Flame, MessageCircle, ShieldCheck, Wrench, Zap, Droplets, Building2, Landmark, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import productionImg from "@/assets/production.jpg";
import pipelineImg from "@/assets/pipeline.jpg";
import valveImg from "@/assets/valve-product.jpg";
import { RequestForm } from "@/components/site/RequestForm";
import { CATEGORIES } from "@/lib/products";

const trust = [
  "Производство в Казахстане",
  "Сертификат CT-KZ",
  "Нефтегазовая отрасль",
  "Энергетика",
  "Водоснабжение",
  "Инфраструктурные проекты",
  "Собственный стандарт СТ ТОО",
  "Работаем с 2021 года",
];

const industries = [
  { icon: Flame, title: "Нефтегазовая отрасль", text: "Запорная арматура для магистральных трубопроводов и месторождений." },
  { icon: Droplets, title: "Водоснабжение", text: "Задвижки для водоканалов, насосных станций и сетей." },
  { icon: Zap, title: "Энергетика", text: "Арматура для ТЭЦ, котельных и тепловых сетей." },
  { icon: Building2, title: "Строительство", text: "Комплектация инженерных систем зданий и сооружений." },
  { icon: Factory, title: "Промышленность", text: "Поставки на горно-обогатительные и металлургические комбинаты." },
  { icon: Landmark, title: "Гос. проекты", text: "Участие в тендерах и поставки в государственные программы." },
];

const advantages = [
  { icon: Factory, title: "Казахстанский производитель", text: "Не посредник. Собственный цех в Актобе." },
  { icon: ShieldCheck, title: "Контроль качества", text: "Каждое изделие проходит гидравлические испытания." },
  { icon: Award, title: "Сертификат CT-KZ", text: "Подтверждённое казахстанское происхождение продукции." },
  { icon: Wrench, title: "Оперативное изготовление", text: "Сроки в 2–3 раза быстрее импортных поставок." },
  { icon: CheckCircle2, title: "Гибкие условия", text: "Индивидуальные цены и отсрочка для крупных заказчиков." },
  { icon: MessageCircle, title: "Тех. консультация", text: "Инженерная поддержка на этапе подбора и проектирования." },
];

const capabilities = [
  { k: "DN2600", l: "Максимальный диаметр" },
  { k: "8+", l: "Направлений продукции" },
  { k: "5", l: "Ключевых отраслей" },
  { k: "CT-KZ", l: "Сертификат качества" },
];

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>TEMIR QAZYNA XXI — Производитель запорной арматуры в Казахстане</title>
        <meta name="description" content="Производство запорной арматуры в Актобе: клиновые задвижки, обратные и регулирующие клапаны до DN2600. Сертификат CT-KZ. Для нефтегаза, энергетики, водоснабжения." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="TEMIR QAZYNA XXI — Запорная арматура из Казахстана" />
        <meta property="og:description" content="Казахстанский производитель запорной арматуры до DN2600. Сертифицированная продукция CT-KZ." />
        <meta property="og:url" content="/" />
      </Helmet>

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Производство запорной арматуры TEMIR QAZYNA XXI" className="h-full w-full object-cover opacity-60" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Производство · Актобе · Казахстан
            </div>
            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Производитель <span className="text-gradient-gold">запорной арматуры</span> в Казахстане
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Промышленная запорная арматура до DN2600 для нефтегазовой отрасли, энергетики, водоснабжения и инфраструктурных проектов. Собственное производство по стандарту СТ ТОО.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#request" className="group inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-glow transition hover:opacity-90">
                Получить КП
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="https://wa.me/77022572129" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-surface">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                Связаться в WhatsApp
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { n: "5+", l: "Лет на рынке" },
                { n: "DN2600", l: "Макс. диаметр" },
                { n: "CT-KZ", l: "Сертификат" },
                { n: "24/7", l: "Поддержка" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-5">
                  <div className="font-display text-3xl font-black text-gradient-gold">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6">
          {trust.map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-gold opacity-20 blur-2xl" />
            <img src={productionImg} alt="Производственный цех TEMIR QAZYNA XXI" loading="lazy" width={1600} height={1024} className="rounded-2xl border border-border shadow-elevated" />
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">О компании</div>
            <h2 className="font-display text-4xl font-black md:text-5xl">
              Реальный производитель
            </h2>
            <p className="mt-6 text-muted-foreground">
              TEMIR QAZYNA XXI основана 12 марта 2021 года в Актобе. Мы производим промышленную запорную арматуру до DN2600 по собственному стандарту СТ ТОО 210340015379-01-2025.
            </p>
            <p className="mt-4 text-muted-foreground">
              Мы ориентированы на долгосрочное сотрудничество с нефтегазовыми компаниями, государственными заказчиками и крупными промышленными предприятиями Казахстана.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline">
              Подробнее о компании <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="catalog" className="relative bg-gradient-steel py-24">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">Каталог продукции</div>
              <h2 className="font-display text-4xl font-black md:text-5xl">Запорная арматура по направлениям</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Восемь направлений промышленной запорной арматуры — от клиновых задвижек до решений для нефтегаза, энергетики и водоснабжения. Диаметры до DN2600.
              </p>
            </div>
            <Link to="/catalog" className="hidden text-sm font-semibold text-gold hover:underline md:inline-flex">
              Весь каталог →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                to={`/catalog#${c.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40 hover:shadow-glow"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-glow">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-tight">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
                <div className="mt-4 inline-flex w-fit rounded-md border border-border bg-graphite px-2.5 py-1 text-[11px] font-bold tracking-wider text-gold">
                  {c.range}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-gold opacity-0 transition group-hover:opacity-100">
                  Подробнее <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION CAPABILITIES */}
      <section className="relative overflow-hidden py-24">
        <img src={valveImg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">Производственные возможности</div>
              <h2 className="font-display text-4xl font-black md:text-5xl">
                Широкий профиль <span className="text-gradient-gold">запорной арматуры</span> до DN2600
              </h2>
              <p className="mt-5 text-muted-foreground">
                Наш производственный комплекс закрывает потребности нефтегаза, энергетики, промышленности, инфраструктурных проектов и систем водоснабжения. Мы выпускаем как серийные изделия, так и арматуру под индивидуальные технические задания заказчика.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-gold/40 bg-gold/5 p-6">
                <Sparkles className="absolute right-5 top-5 h-5 w-5 text-gold" />
                <div className="text-xs font-bold uppercase tracking-widest text-gold">Ключевое преимущество</div>
                <p className="mt-2 font-display text-xl font-bold leading-snug md:text-2xl">
                  «Мы постоянно расширяем линейку продукции и готовы рассматривать индивидуальные технические требования заказчиков.»
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Нефтегазовая отрасль",
                  "Энергетика",
                  "Промышленность",
                  "Инфраструктурные проекты",
                  "Системы водоснабжения",
                  "Индивидуальные заказы",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((c) => (
                <div key={c.l} className="glass rounded-2xl p-6">
                  <div className="font-display text-3xl font-black text-gradient-gold md:text-4xl">{c.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl border border-border bg-surface p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-gold">Что мы умеем</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Серийное производство задвижек, клапанов и переключающих устройств</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Изготовление арматуры по индивидуальным чертежам заказчика</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Гидравлические испытания каждого изделия</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Полный пакет сертификатов и тех. документации</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">Отрасли</div>
          <h2 className="font-display text-4xl font-black md:text-5xl">Где работает наша арматура</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.title} className="glass group rounded-2xl p-7 transition hover:-translate-y-1 hover:border-gold/40">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground shadow-glow">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PIPELINE CTA STRIP */}
      <section className="relative overflow-hidden border-y border-border">
        <img src={pipelineImg} alt="" aria-hidden loading="lazy" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-black md:text-4xl">
              Нужен подбор арматуры под ваш проект?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Воспользуйтесь AI-калькулятором: укажите среду, давление и диаметр — мы подберём модель и пришлём КП.
            </p>
          </div>
          <Link to="/selector" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-glow">
            Открыть AI-подбор <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">Преимущества</div>
          <h2 className="font-display text-4xl font-black md:text-5xl">Почему выбирают TEMIR QAZYNA XXI</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a) => (
            <div key={a.title} className="bg-surface p-8 transition hover:bg-surface-elevated">
              <a.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REQUEST */}
      <section id="request" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">Заявка</div>
            <h2 className="font-display text-4xl font-black md:text-5xl">
              Получите коммерческое предложение <span className="text-gradient-gold">за 30 минут</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Оставьте заявку — инженер свяжется с вами, уточнит параметры и пришлёт КП с ценами и сроками.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Расчёт цены под ваш объём", "Подбор модели под параметры проекта", "Сертификаты и тех. документация"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-6 md:p-10">
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
