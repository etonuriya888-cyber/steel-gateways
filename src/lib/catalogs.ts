// Shared catalog data source. Used by both the home page section
// and the /catalog route so any change appears in both places automatically.
//
// PDF files live in /public/catalogs/ so they are served as static files
// in production (Vercel). Covers are pre-rendered JPGs alongside them so
// they load identically in preview and production.

export type Catalog = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  cover: string;
  pdf: string;
  fileName: string;
  featured?: boolean;
};

export const CATALOGS: Catalog[] = [
  {
    id: "general-catalog",
    title: "Полный инженерный каталог запорной и предохранительной арматуры",
    subtitle: "ANSI / ASME / API · DN 15 – DN 1000",
    description:
      "Официальный сводный каталог продукции TEMIR QAZYNA XXI. Объединяет несколько номенклатурных групп: задвижки, шаровые краны, запорные вентили, обратные клапаны и предохранительные клапаны (СППК) в диапазоне 1/2\" – 40\" и классах давления Class 150 – Class 2500.",
    tag: "Сводный каталог",
    cover: "/catalogs/general-catalog-cover.jpg",
    pdf: "/catalogs/general-catalog.pdf",
    fileName: "temirqazyna-full-engineering-catalog.pdf",
    featured: true,
  },
  {
    id: "class150-nps2",
    title: "Литые стальные задвижки",
    subtitle: "ANSI Class 150 · NPS 2\"",
    description:
      "Технический паспорт клиновой литой задвижки: конструктивная схема, испытательные давления, применяемые стандарты API 600 / ANSI B16.34.",
    tag: "Class 150",
    cover: "/catalogs/class150-nps2-cover.jpg",
    pdf: "/catalogs/class150-nps2.pdf",
    fileName: "temirqazyna-class150-nps2.pdf",
  },
  {
    id: "class300-nps3",
    title: "Литые стальные задвижки",
    subtitle: "ANSI Class 300 · NPS 3\"",
    description:
      "Официальная техническая документация: разрезная схема задвижки, параметры гидроиспытаний и перечень применяемых отраслевых стандартов.",
    tag: "Class 300",
    cover: "/catalogs/class300-nps3-cover.jpg",
    pdf: "/catalogs/class300-nps3.pdf",
    fileName: "temirqazyna-class300-nps3.pdf",
  },
  {
    id: "class900-nps3",
    title: "Литая клиновая задвижка RTJ",
    subtitle: "ANSI Class 900 · NPS 3\"",
    description:
      "Полная спецификация: основные технические характеристики, присоединительные размеры RTJ-фланца ASME B16.5, материалы исполнения и рабочие давления.",
    tag: "Class 900 RTJ",
    cover: "/catalogs/class900-nps3-cover.jpg",
    pdf: "/catalogs/class900-nps3.pdf",
    fileName: "temirqazyna-class900-nps3-rtj.pdf",
  },
  {
    id: "class900-nps4",
    title: "Литая клиновая задвижка RTJ",
    subtitle: "ANSI Class 900 · NPS 4\"",
    description:
      "Инженерный каталог с чертежом в разрезе, таблицами присоединительных размеров и допустимых рабочих давлений в зависимости от температуры.",
    tag: "Class 900 RTJ",
    cover: "/catalogs/class900-nps4-cover.jpg",
    pdf: "/catalogs/class900-nps4.pdf",
    fileName: "temirqazyna-class900-nps4-rtj.pdf",
  },
  {
    id: "class900-nps8",
    title: "Литая клиновая задвижка RTJ",
    subtitle: "ANSI Class 900 · NPS 8\"",
    description:
      "Документация на задвижку большого диаметра: габаритные размеры, масса, материалы корпуса и уплотнений, условия эксплуатации до +538 °C.",
    tag: "Class 900 RTJ",
    cover: "/catalogs/class900-nps8-cover.jpg",
    pdf: "/catalogs/class900-nps8.pdf",
    fileName: "temirqazyna-class900-nps8-rtj.pdf",
  },
  {
    id: "zms-65-210",
    title: "Задвижка шиберная ЗМС 65×210",
    subtitle: "DN 65 · PN 21,0 МПа · RTJ 6B",
    description:
      "Техническая карта шиберной задвижки для нефти, газа и газоконденсата: конструкция, присоединительные размеры фланца RTJ 6B и рабочие параметры.",
    tag: "ЗМС · PN 21 МПа",
    cover: "/catalogs/zms-65-210-cover.jpg",
    pdf: "/catalogs/zms-65-210.pdf",
    fileName: "temirqazyna-zms-65-210.pdf",
  },
];
