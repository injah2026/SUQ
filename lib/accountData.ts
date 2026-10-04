import { relatedProducts } from "./data";

export type AccountSection =
  | "overview"
  | "orders"
  | "addresses"
  | "wishlist"
  | "points"
  | "profile";

export type AccountMenuItem = {
  key: AccountSection;
  label: string;
  href: string;
  icon: string;
};

export const accountMenu: AccountMenuItem[] = [
  { key: "overview", label: "نظرة عامة", href: "/account", icon: "ri-account-circle-line" },
  { key: "orders", label: "طلباتي", href: "/account/orders", icon: "ri-file-list-3-line" },
  { key: "addresses", label: "العناوين", href: "/account/addresses", icon: "ri-map-pin-line" },
  { key: "wishlist", label: "المفضلة", href: "/wishlist", icon: "ri-heart-3-line" },
  { key: "points", label: "نقاط مجاز", href: "/account/points", icon: "ri-award-line" },
  { key: "profile", label: "بياناتي", href: "/account/profile", icon: "ri-user-settings-line" },
];

export type OrderStatus = "processing" | "shipped" | "delivered";

export const statusMeta: Record<
  OrderStatus,
  { label: string; className: string; icon: string }
> = {
  processing: {
    label: "قيد التجهيز",
    className: "bg-[#FBF3E2] text-[#A9822F] border-[#EAD9B4]",
    icon: "ri-hourglass-2-line",
  },
  shipped: {
    label: "تم الشحن",
    className: "bg-[#EAF1FB] text-[#2F5FA9] border-[#C9DBF5]",
    icon: "ri-truck-line",
  },
  delivered: {
    label: "تم التوصيل",
    className: "bg-[#E9F5EE] text-[#2E7D4F] border-[#C4E4D2]",
    icon: "ri-checkbox-circle-line",
  },
};

export type OrderItem = {
  name: string;
  image: string;
  price: number;
  qty: number;
  color: string;
};

export type TimelineStep = {
  title: string;
  note: string;
  date: string;
  done: boolean;
};

export type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  payment: string;
  address: string;
  items: OrderItem[];
  timeline: TimelineStep[];
};

export const orders: Order[] = [
  {
    id: "MJZ-482917",
    date: "12 سبتمبر 2026",
    status: "processing",
    total: 420,
    payment: "مدى •••• 4821",
    address: "الرياض، حي الملقا، طريق أنس بن مالك، العنوان الوطني 13527",
    items: [
      {
        name: "حقيبة البشت ذهبي",
        image: relatedProducts[1].image,
        price: 150,
        qty: 2,
        color: "أسود وذهبي",
      },
      {
        name: "حقيبة فريد ذهبي",
        image: relatedProducts[0].image,
        price: 120,
        qty: 1,
        color: "بيج وذهبي",
      },
    ],
    timeline: [
      { title: "تم تأكيد الطلب", note: "استلمنا طلبك بنجاح", date: "12 سبتمبر", done: true },
      { title: "قيد التجهيز والتغليف", note: "نغلّف طلبك بعناية فاخرة", date: "13 سبتمبر", done: true },
      { title: "في الطريق إليك", note: "سيصلك خلال 3 أيام عمل", date: "قريبًا", done: false },
      { title: "تم التوصيل", note: "ننتظر وصول الطلب إليك", date: "قريبًا", done: false },
    ],
  },
  {
    id: "MJZ-471203",
    date: "28 أغسطس 2026",
    status: "shipped",
    total: 305,
    payment: "Apple Pay",
    address: "جدة، حي الشاطئ، طريق الكورنيش، العنوان الوطني 23431",
    items: [
      {
        name: "حقيبة أوروم مجاز",
        image: relatedProducts[2].image,
        price: 150,
        qty: 1,
        color: "كريمي وأسود",
      },
      {
        name: "حقيبة البشت جوال ذهبي",
        image: relatedProducts[3].image,
        price: 70,
        qty: 1,
        color: "كحلي وذهبي",
      },
    ],
    timeline: [
      { title: "تم تأكيد الطلب", note: "استلمنا طلبك بنجاح", date: "28 أغسطس", done: true },
      { title: "قيد التجهيز والتغليف", note: "غُلّف طلبك بعناية", date: "29 أغسطس", done: true },
      { title: "في الطريق إليك", note: "مع مندوب الشحن الآن", date: "31 أغسطس", done: true },
      { title: "تم التوصيل", note: "سيتم التسليم قريبًا", date: "اليوم", done: false },
    ],
  },
  {
    id: "MJZ-460088",
    date: "05 أغسطس 2026",
    status: "delivered",
    total: 260,
    payment: "تمارا",
    address: "الدمام، حي الفيصلية، شارع الأمير محمد بن فهد، العنوان الوطني 32241",
    items: [
      {
        name: "حقيبة البشت ذهبي",
        image: relatedProducts[1].image,
        price: 150,
        qty: 1,
        color: "كحلي وذهبي",
      },
      {
        name: "حقيبة فريد ذهبي",
        image: relatedProducts[0].image,
        price: 110,
        qty: 1,
        color: "أسود وذهبي",
      },
    ],
    timeline: [
      { title: "تم تأكيد الطلب", note: "استلمنا طلبك بنجاح", date: "05 أغسطس", done: true },
      { title: "قيد التجهيز والتغليف", note: "غُلّف طلبك بعناية", date: "06 أغسطس", done: true },
      { title: "في الطريق إليك", note: "خرج من المستودع", date: "08 أغسطس", done: true },
      { title: "تم التوصيل", note: "تم التسليم بنجاح", date: "10 أغسطس", done: true },
    ],
  },
];

export function findOrder(id: string) {
  return orders.find((o) => o.id === id);
}

export type Address = {
  id: string;
  label: string;
  name: string;
  phone: string;
  city: string;
  district: string;
  street: string;
  national: string;
  isDefault: boolean;
};

export const addresses: Address[] = [
  {
    id: "a1",
    label: "المنزل",
    name: "عبدالله المطيري",
    phone: "0551234567",
    city: "الرياض",
    district: "حي الملقا",
    street: "طريق أنس بن مالك",
    national: "13527",
    isDefault: true,
  },
  {
    id: "a2",
    label: "العمل",
    name: "عبدالله المطيري",
    phone: "0551234567",
    city: "الرياض",
    district: "حي العليا",
    street: "برج المملكة، الطابق 21",
    national: "12611",
    isDefault: false,
  },
];

export const wishlistProducts = relatedProducts;

export type Tier = { id: string; name: string; min: number; icon: string };

export const tiers: Tier[] = [
  { id: "silver", name: "فضي", min: 0, icon: "ri-medal-line" },
  { id: "gold", name: "ذهبي", min: 1000, icon: "ri-medal-2-line" },
  { id: "diamond", name: "ماسي", min: 3000, icon: "ri-vip-diamond-line" },
];

export const pointsBalance = 1240;

export const earnRules = [
  { icon: "ri-shopping-bag-3-line", title: "مع كل عملية شراء", note: "نقطة عن كل 1 ر.س" },
  { icon: "ri-user-add-line", title: "دعوة صديق", note: "150 نقطة لكل دعوة ناجحة" },
  { icon: "ri-star-smile-line", title: "تقييم المنتجات", note: "20 نقطة لكل تقييم" },
  { icon: "ri-cake-2-line", title: "عيد ميلادك", note: "300 نقطة هدية سنويًا" },
];

export type PointEntry = { id: string; title: string; date: string; points: number };

export const pointsHistory: PointEntry[] = [
  { id: "p1", title: "طلب MJZ-460088", date: "05 أغسطس 2026", points: 260 },
  { id: "p2", title: "تقييم حقيبة البشت", date: "12 أغسطس 2026", points: 20 },
  { id: "p3", title: "دعوة صديق", date: "20 أغسطس 2026", points: 150 },
  { id: "p4", title: "استبدال عند الدفع", date: "28 أغسطس 2026", points: -200 },
  { id: "p5", title: "طلب MJZ-482917", date: "12 سبتمبر 2026", points: 420 },
];

export function tierProgress(balance: number) {
  const earned = tiers.filter((t) => balance >= t.min);
  const current = earned[earned.length - 1];
  const nextIndex = tiers.findIndex((t) => t.id === current.id) + 1;
  const next = tiers[nextIndex];
  if (!next) {
    return { current, next: null, percent: 100, remaining: 0 };
  }
  const span = next.min - current.min;
  const within = balance - current.min;
  return {
    current,
    next,
    percent: Math.min(100, Math.round((within / span) * 100)),
    remaining: next.min - balance,
  };
}