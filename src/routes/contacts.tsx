import { Helmet } from "react-helmet-async";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { RequestForm } from "@/components/site/RequestForm";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Контакты — TEMIR QAZYNA XXI, Актобе</title>
        <meta
          name="description"
          content="Телефоны +7 771 599 26 60, +7 702 257 21 29. Email nurhat_84@mail.ru. Адрес: Актобе, пр. Абилкайыр Хана, 53."
        />
        <link rel="canonical" href="/contacts" />
        <meta property="og:title" content="Контакты TEMIR QAZYNA XXI" />
        <meta property="og:url" content="/contacts" />
      </Helmet>

      <section className="border-b border-border bg-gradient-hero pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Контакты</div>
          <h1 className="mt-3 font-display text-5xl font-black md:text-6xl">
            Свяжитесь <span className="text-gradient-gold">с производителем</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Ответим на звонок, WhatsApp и email в течение 30 минут в рабочее время.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href="tel:+77715992660"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Телефон 1
                </div>
                <div className="font-display text-xl font-bold group-hover:text-gold">
                  +7 771 599 26 60
                </div>
              </div>
            </a>
            <a
              href="tel:+77025722129"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Телефон 2
                </div>
                <div className="font-display text-xl font-bold group-hover:text-gold">
                  +7 702 257 21 29
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/77025722129"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  WhatsApp
                </div>
                <div className="font-display text-xl font-bold group-hover:text-gold">
                  Написать в WhatsApp
                </div>
              </div>
            </a>
            <a
              href="mailto:nurhat_84@mail.ru"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-gold/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-display text-xl font-bold group-hover:text-gold">
                  nurhat_84@mail.ru
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Адрес производства
                </div>
                <div className="font-display text-lg font-bold">
                  пр. Абилкайыр Хана, 53, помещение 2
                </div>
                <div className="text-sm text-muted-foreground">г. Актобе, Республика Казахстан</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 md:p-10">
            <h2 className="font-display text-2xl font-black">Оставить заявку</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Заполните форму — инженер свяжется с вами.
            </p>
            <div className="mt-6">
              <RequestForm compact />
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="TEMIR QAZYNA XXI на карте"
            src="https://www.google.com/maps?q=Aktobe,+Abilkaiyr+Khan+Avenue+53&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
