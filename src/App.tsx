import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

import IndexPage from "./routes/index";
import AboutPage from "./routes/about";
import CatalogPage from "./routes/catalog";
import CertificatesPage from "./routes/certificates";
import ContactsPage from "./routes/contacts";
import SelectorPage from "./routes/selector";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Страница не найдена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Возможно, страница была перемещена или удалена.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex rounded-md bg-gradient-gold px-4 py-2 text-sm font-bold text-gold-foreground"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/selector" element={<SelectorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
      <Analytics />
    </>
  );
}
