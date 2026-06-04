import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/catalog", label: "Каталог" },
  { to: "/selector", label: "AI-подбор" },
  { to: "/certificates", label: "Сертификаты" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-gold text-gold-foreground font-display font-black shadow-glow">
            TQ
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-widest">TEMIR QAZYNA</div>
            <div className="text-[10px] tracking-[0.3em] text-gold">XXI · KAZAKHSTAN</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-foreground ${
                  isActive ? "text-gold" : "text-muted-foreground"
                }`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:+77022572129"
          className="hidden items-center gap-2 rounded-md border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/20 md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          +7 702 257 21 29
        </a>
      </div>
    </header>
  );
}
