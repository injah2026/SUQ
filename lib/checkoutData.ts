export type ShippingMethod = {
  id: string;
  name: string;
  eta: string;
  fee: number;
  icon: string;
};

export type PaymentMethod = {
  id: string;
  name: string;
  note: string;
  logo?: string;
  icon?: string;
  badge?: string;
};

export const checkoutSteps = [
  "معلومات التواصل",
  "عنوان التوصيل",
  "طريقة الشحن",
  "طريقة الدفع",
];

export const cities = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الطائف",
  "أبها",
  "تبوك",
  "بريدة",
];

export const shippingMethods: ShippingMethod[] = [
  { id: "express", name: "توصيل سريع", eta: "1–2 يوم عمل", fee: 35, icon: "ri-flashlight-line" },
  { id: "standard", name: "توصيل عادي", eta: "3–5 أيام عمل", fee: 25, icon: "ri-truck-line" },
  { id: "pickup", name: "استلام من الفرع", eta: "خلال 24 ساعة", fee: 0, icon: "ri-store-3-line" },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: "mada",
    name: "مدى",
    note: "بطاقة مدى البنكية",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mada_Logo.svg",
  },
  {
    id: "applepay",
    name: "Apple Pay",
    note: "دفع سريع وآمن بلمسة واحدة",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
  },
  {
    id: "card",
    name: "Visa / Mastercard",
    note: "بطاقات الائتمان الدولية",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
  },
  {
    id: "stcpay",
    name: "STC Pay",
    note: "الدفع من محفظة STC Pay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Stc_pay.svg",
  },
  {
    id: "tabby",
    name: "تابي",
    note: "قسّمها على 4 دفعات بدون فوائد",
    badge: "4 دفعات",
    logo: "https://cdn.tabby.ai/assets/logo.svg",
  },
  {
    id: "tamara",
    name: "تمارا",
    note: "ادفع لاحقًا أو على دفعات ميسّرة",
    badge: "ادفع لاحقًا",
    logo: "https://cdn.prod.website-files.com/67c184892f7a84b971ff49d9/68931b49f2808979578bdc64_tamara-text-logo-black-en.svg",
  },
];

export const VAT_RATE = 0.15;

export function computeTotals(
  subtotal: number,
  shipping: number,
  giftWrapFee: number,
  discount: number
) {
  const total = Math.max(0, subtotal + shipping + giftWrapFee - discount);
  const vat = Math.round((total * VAT_RATE) / (1 + VAT_RATE));
  return { total, vat };
}

export type LastOrder = {
  number: string;
  total: number;
  count: number;
  city: string;
  method: string;
  date: string;
};

export const LAST_ORDER_KEY = "majaz_last_order";

export function makeOrderNumber(): string {
  const n = Math.floor(100000 + Math.random() * 899999);
  return `MJZ-${n}`;
}