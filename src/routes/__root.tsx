import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Страница не найдена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Возможно, страница была перемещена или удалена.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex rounded-md bg-gradient-gold px-4 py-2 text-sm font-bold text-gold-foreground">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Произошла ошибка</h1>
        <p className="mt-2 text-sm text-muted-foreground">Попробуйте обновить страницу.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-gradient-gold px-4 py-2 text-sm font-bold text-gold-foreground"
          >
            Повторить
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TEMIR QAZYNA XXI — Производитель трубопроводной арматуры в Казахстане" },
      { name: "description", content: "Казахстанский производитель стальных клиновых задвижек и трубопроводной арматуры для нефтегазовой отрасли, энергетики и водоснабжения. Сертификат CT-KZ." },
      { name: "author", content: "TEMIR QAZYNA XXI" },
      { name: "keywords", content: "задвижки Казахстан, производитель задвижек, трубопроводная арматура, стальные задвижки, нефтегазовая арматура, запорная арматура Актобе" },
      { property: "og:title", content: "TEMIR QAZYNA XXI — Производитель арматуры в Казахстане" },
      { property: "og:description", content: "Стальные клиновые задвижки DN50–DN200. Собственное производство в Актобе. Сертификат CT-KZ." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TEMIR QAZYNA XXI" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;700;800;900&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TEMIR QAZYNA XXI",
        legalName: "TOO TEMIR QAZYNA XXI",
        taxID: "210340015379",
        url: "/",
        foundingDate: "2021-03-12",
        address: {
          "@type": "PostalAddress",
          streetAddress: "пр. Абилкайыр Хана, 53, помещение 2",
          addressLocality: "Актобе",
          addressCountry: "KZ",
        },
        telephone: ["+77715992660", "+77025722129"],
        email: "nurhat_84@mail.ru",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
    </QueryClientProvider>
  );
}
