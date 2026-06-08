import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-gold text-gold-foreground font-display font-black">
              TQ
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold tracking-widest">TEMIR QAZYNA</div>
              <div className="text-[10px] tracking-[0.3em] text-gold">XXI</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Казахстанский производитель запорной арматуры до DN2600 для нефтегаза, энергетики и водоснабжения.
          </p>
          <div className="mt-4 text-xs text-muted-foreground/70">БИН 210340015379</div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Навигация</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/catalog" className="hover:text-foreground">Каталог</Link></li>
            <li><Link to="/selector" className="hover:text-foreground">AI-подбор</Link></li>
            <li><Link to="/certificates" className="hover:text-foreground">Сертификаты</Link></li>
            <li><Link to="/about" className="hover:text-foreground">О компании</Link></li>
            <li><Link to="/contacts" className="hover:text-foreground">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Отрасли</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Нефтегазовая отрасль</li>
            <li>Водоснабжение</li>
            <li>Энергетика</li>
            <li>Промышленность</li>
            <li>Государственные проекты</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Контакты</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              пр. Абилкайыр Хана, 53, пом. 2, Актобе, Казахстан
            </li>
            <li>
              <a href="tel:+77715992660" className="flex items-center gap-2 text-muted-foreground hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> +7 771 599 26 60
              </a>
            </li>
            <li>
              <a href="tel:+77022572129" className="flex items-center gap-2 text-muted-foreground hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> +7 702 257 21 29
              </a>
            </li>
            <li>
              <a href="mailto:nurhat_84@mail.ru" className="flex items-center gap-2 text-muted-foreground hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> nurhat_84@mail.ru
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} TOO «TEMIR QAZYNA XXI». Все права защищены. СТ ТОО 210340015379-01-2025
        </div>
      </div>
    </footer>
  );
}
