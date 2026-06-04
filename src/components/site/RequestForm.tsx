import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export function RequestForm({ compact = false, defaultProduct = "" }: { compact?: boolean; defaultProduct?: string }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: (fd.get("email") ? String(fd.get("email")).trim() : null) || null,
      company: (fd.get("company") ? String(fd.get("company")).trim() : null) || null,
      product: (fd.get("product") ? String(fd.get("product")).trim() : null) || null,
      quantity: (fd.get("quantity") ? String(fd.get("quantity")).trim() : null) || null,
      message: (fd.get("message") ? String(fd.get("message")).trim() : null) || null,
      source: typeof window !== "undefined" ? window.location.pathname : null,
    };

    if (!payload.name || !payload.phone) {
      setLoading(false);
      toast.error("Укажите имя и телефон");
      return;
    }

    const { error } = await supabase.from("leads").insert(payload);
    setLoading(false);

    if (error) {
      console.error("Lead insert error:", error);
      toast.error("Не удалось отправить заявку", {
        description: "Попробуйте ещё раз или позвоните нам напрямую.",
      });
      return;
    }

    form.reset();
    toast.success("Заявка отправлена", {
      description: "Наш менеджер свяжется с вами в течение 30 минут.",
    });
  };

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
      <input required name="name" placeholder="Имя *" maxLength={200} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2" />
      <input name="company" placeholder="Компания" maxLength={200} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2" />
      <input required name="phone" type="tel" placeholder="Телефон *" maxLength={50} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2" />
      <input name="email" type="email" placeholder="Email" maxLength={254} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2" />
      <input name="product" defaultValue={defaultProduct} placeholder="Продукция" maxLength={500} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2" />
      <input name="quantity" placeholder="Количество" maxLength={100} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2" />
      <textarea name="message" rows={3} placeholder="Сообщение" maxLength={2000} className={`rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2 ${compact ? "" : "md:col-span-2"}`} />
      <button
        disabled={loading}
        className={`rounded-md bg-gradient-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60 ${compact ? "" : "md:col-span-2"}`}
      >
        {loading ? "Отправка..." : "Получить коммерческое предложение"}
      </button>
      <p className={`text-xs text-muted-foreground/60 ${compact ? "" : "md:col-span-2"}`}>
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  );
}
