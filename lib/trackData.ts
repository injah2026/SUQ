export const trackHero = {
  label: "تتبّع طلبك",
  title: "اعرف أين وصل طلبك",
  text: "أدخل رقم الطلب ورقم الجوال لتتابع مسار طلبك خطوة بخطوة، من التأكيد حتى التوصيل.",
};

export type TrackStep = { key: string; label: string; icon: string };

export const trackSteps: TrackStep[] = [
  { key: "placed", label: "تم الطلب", icon: "ri-file-list-3-line" },
  { key: "processing", label: "قيد التجهيز", icon: "ri-box-3-line" },
  { key: "shipped", label: "تم الشحن", icon: "ri-truck-line" },
  { key: "delivered", label: "تم التوصيل", icon: "ri-home-smile-line" },
];

export type TrackOrder = {
  orderNumber: string;
  phone: string;
  step: number;
  status: string;
  placedAt: string;
  items: { name: string; qty: number; price: number; image: string }[];
  city: string;
  carrier: string;
  carrierNote: string;
  eta: string;
};

export const demoOrders: TrackOrder[] = [
  {
    orderNumber: "MJ-48213",
    phone: "0551234567",
    step: 2,
    status: "تم الشحن",
    placedAt: "28 سبتمبر 2026",
    items: [
      {
        name: "حقيبة شموخ البشت ذهبي",
        qty: 1,
        price: 150,
        image:
          "https://readdy.ai/api/search-image?query=Elegant%20solid%20black%20leather%20luxury%20pouch%20bag%20with%20a%20thin%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20a%20small%20gold%20tassel%20standing%20upright%20on%20a%20warm%20beige%20limestone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20clean%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20minimal%20high%20detail&width=600&height=750&seq=trackitem01&orientation=portrait",
      },
      {
        name: "مسبحة مجاز الذهبية",
        qty: 1,
        price: 90,
        image:
          "https://readdy.ai/api/search-image?query=Elegant%20golden%20beaded%20prayer%20beads%20misbaha%20with%20a%20subtle%20tassel%20arranged%20in%20a%20soft%20spiral%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=600&height=750&seq=trackitem02&orientation=portrait",
      },
    ],
    city: "الرياض",
    carrier: "سمسا إكسبريس",
    carrierNote: "شحنتك مع مندوب التوصيل، بانتظار التسليم",
    eta: "متوقع الوصول: 4 أكتوبر 2026",
  },
];

export const trackStates = [
  { value: 0, label: "قيد التجهيز" },
  { value: 1, label: "قيد التجهيز" },
  { value: 2, label: "تم الشحن" },
  { value: 3, label: "تم التوصيل" },
];