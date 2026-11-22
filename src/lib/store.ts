/* ==========================================================================
   STORE CONFIG — edite aqui os dados da sua loja
   ========================================================================== */

export const STORE = {
  name: "Garimpo USA",
  /** Número do WhatsApp no formato internacional, só dígitos */
  whatsapp: "5511999999999",
  instagram: "garimpousa",
  /** Câmbio de referência usado para mostrar o valor cheio americano em reais */
  usdToBrl: 5.4,
  installments: 10,
};

export type Category = "Tênis" | "Áudio" | "Relógios" | "Acessórios" | "Beleza" | "Tech";

export interface Product {
  id: string;
  name: string;
  nameLines: [string, string];
  category: Category;
  tagline: string;
  description: string;
  /** Preço cheio (sem promoção) na loja americana, em US$ */
  usdFull: number;
  /** Seu preço de venda, em R$ */
  brl: number;
  /** Preço médio do mesmo item em lojas brasileiras, em R$ */
  brlStore: number;
  image: string;
  accentColor: string;
  stock: number;
}

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: "runner-red",
    name: "Runner Red",
    nameLines: ["RUNNER", "RED"],
    category: "Tênis",
    tagline: "TÊNIS · ORIGINAL USA",
    description:
      "Amortecimento responsivo e cabedal respirável. Comprado em outlet oficial americano, novo na caixa com nota.",
    usdFull: 160,
    brl: 849,
    brlStore: 1299,
    image: u("1542291026-7eec264c27ff"),
    accentColor: "#ef4444",
    stock: 2,
  },
  {
    id: "studio-headphone",
    name: "Studio Wireless",
    nameLines: ["STUDIO", "WIRELESS"],
    category: "Áudio",
    tagline: "HEADPHONE · LACRADO",
    description:
      "Cancelamento de ruído, 40h de bateria e estojo rígido. Lacrado de fábrica, versão americana.",
    usdFull: 349,
    brl: 1849,
    brlStore: 2899,
    image: u("1505740420928-5e560c06d30e"),
    accentColor: "#f59e0b",
    stock: 3,
  },
  {
    id: "classic-watch",
    name: "Classic Minimal",
    nameLines: ["CLASSIC", "MINIMAL"],
    category: "Relógios",
    tagline: "RELÓGIO · EDIÇÃO EUA",
    description:
      "Caixa em aço, pulseira de couro legítimo e vidro mineral. Acompanha caixa original e garantia.",
    usdFull: 225,
    brl: 1190,
    brlStore: 1790,
    image: u("1523275335684-37898b6baf30"),
    accentColor: "#0b6e4f",
    stock: 1,
  },
  {
    id: "aviator-sun",
    name: "Aviator Sun",
    nameLines: ["AVIATOR", "SUN"],
    category: "Acessórios",
    tagline: "ÓCULOS · PROTEÇÃO UV400",
    description:
      "Armação leve e lentes com proteção UV400. Vem com estojo, flanela e certificado de autenticidade.",
    usdFull: 180,
    brl: 949,
    brlStore: 1450,
    image: u("1572635196237-14b3f281503f"),
    accentColor: "#2563eb",
    stock: 4,
  },
  {
    id: "smartwatch-sport",
    name: "Smartwatch Sport",
    nameLines: ["SMARTWATCH", "SPORT"],
    category: "Tech",
    tagline: "WEARABLE · LACRADO",
    description:
      "GPS, monitor cardíaco e resistência à água. Produto lacrado, compatível com iPhone e Android.",
    usdFull: 249,
    brl: 1329,
    brlStore: 2199,
    image: u("1546868871-7041f2a55e12"),
    accentColor: "#ec4899",
    stock: 2,
  },
  {
    id: "daily-sneaker",
    name: "Daily Sneaker",
    nameLines: ["DAILY", "SNEAKER"],
    category: "Tênis",
    tagline: "TÊNIS · CASUAL",
    description:
      "Conforto para o dia todo com solado em borracha. Numeração americana — te ajudamos a achar o tamanho.",
    usdFull: 120,
    brl: 639,
    brlStore: 999,
    image: u("1491553895911-0055eca6402d"),
    accentColor: "#84cc16",
    stock: 5,
  },
  {
    id: "urban-backpack",
    name: "Urban Backpack",
    nameLines: ["URBAN", "BACKPACK"],
    category: "Acessórios",
    tagline: "MOCHILA · NOTEBOOK 15\"",
    description:
      "Tecido resistente à água, compartimento acolchoado para notebook e bolso antifurto.",
    usdFull: 95,
    brl: 499,
    brlStore: 799,
    image: u("1553062407-98eeb64c6a62"),
    accentColor: "#64748b",
    stock: 6,
  },
  {
    id: "instant-camera",
    name: "Instant Camera",
    nameLines: ["INSTANT", "CAMERA"],
    category: "Tech",
    tagline: "CÂMERA · FOTO NA HORA",
    description:
      "Câmera instantânea com flash automático. Acompanha um pack de filme de brinde.",
    usdFull: 130,
    brl: 689,
    brlStore: 1099,
    image: u("1526170375885-4d8ecf77b99f"),
    accentColor: "#f97316",
    stock: 3,
  },
];

export const CATEGORIES: ("Todos" | Category)[] = [
  "Todos",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
];

/* ==========================================================================
   PROVA SOCIAL
   ⚠️ EXEMPLOS — substitua por números e depoimentos REAIS dos seus clientes
   (prints do WhatsApp/Instagram com autorização). Não publique dados inventados.
   ========================================================================== */

export const STATS = [
  { value: "1.200+", label: "pedidos entregues" },
  { value: "4,9/5", label: "avaliação média" },
  { value: "27", label: "estados atendidos" },
];

export const TESTIMONIALS = [
  {
    name: "Mariana S.",
    city: "Belo Horizonte, MG",
    product: "Studio Wireless",
    text: "Chegou lacrado, com nota da loja americana. Paguei bem menos do que no shopping e recebi em 3 dias.",
  },
  {
    name: "Rafael T.",
    city: "Curitiba, PR",
    product: "Runner Red",
    text: "Já tinha sido taxado importando sozinho. Aqui o preço é o que está no site e me ajudaram com a numeração.",
  },
  {
    name: "Juliana P.",
    city: "Recife, PE",
    product: "Classic Minimal",
    text: "Atendimento no WhatsApp super rápido. Já é minha terceira compra e sempre tudo original.",
  },
];

/* ==========================================================================
   HELPERS
   ========================================================================== */

const brlFmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const usdFmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export const formatBRL = (v: number) => brlFmt.format(v);
export const formatUSD = (v: number) => usdFmt.format(v).replace("$", "US$ ");

export const usdInBrl = (usd: number) => usd * STORE.usdToBrl;
export const savingsPct = (p: Product) => Math.round((1 - p.brl / p.brlStore) * 100);
export const installment = (brl: number) => formatBRL(brl / STORE.installments);

export const whatsappLink = (message: string) =>
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;

export const productMessage = (p: Product) =>
  `Oi! Tenho interesse no ${p.name} (${formatBRL(p.brl)}). Ainda tem disponível?`;
