import { useState } from "react";
import { toast } from "sonner";

export function RequestForm({
  compact = false,
  defaultProduct = "",
}: {
  compact?: boolean;
  defaultProduct?: string;
}) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Заявка отправлена", {
        description: "Наш менеджер свяжется с вами в течение 30 минут.",
      });
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
      <input
        required
        name="name"
        placeholder="Имя *"
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2"
      />
      <input
        name="company"
        placeholder="Компания"
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2"
      />
      <input
        required
        name="phone"
        type="tel"
        placeholder="Телефон *"
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2"
      />
      <input
        name="product"
        defaultValue={defaultProduct}
        placeholder="Продукция"
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2"
      />
      <input
        name="quantity"
        placeholder="Количество"
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2"
      />
      <textarea
        name="message"
        rows={3}
        placeholder="Сообщение"
        className={`rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none ring-gold/40 transition focus:ring-2 ${compact ? "" : "md:col-span-2"}`}
      />
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
