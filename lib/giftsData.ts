import { shopProducts, type ShopProduct } from "./shopData";

export type GiftFilterKey = "all" | "ready" | "him" | "her" | "under200";

export const giftShortcuts = [
  {
    key: "ready" as GiftFilterKey,
    label: "بكجات جاهزة",
    desc: "أطقم كاملة جاهزة للإهداء بتغليف فاخر",
    icon: "ri-gift-2-line",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20cream%20gift%20box%20with%20gold%20ribbon%20and%20a%20black%20leather%20pouch%20with%20gold%20embroidery%20peeking%20out%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20gift%20photography%2C%20warm%20sand%20tones%2C%20soft%20light%2C%20high%20detail&width=800&height=1000&seq=giftshort1&orientation=portrait",
  },
  {
    key: "him" as GiftFilterKey,
    label: "هدايا له",
    desc: "حقائب البشت والمسابح والتفاصيل الرجالية",
    icon: "ri-user-star-line",
    image:
      "https://readdy.ai/api/search-image?query=Masculine%20gift%20flat%20lay%20of%20a%20black%20leather%20heritage%20pouch%20with%20gold%20Bisht%20embroidery%20and%20golden%20prayer%20beads%20arranged%20on%20a%20warm%20beige%20linen%20surface%2C%20quiet%20luxury%20gift%20photography%2C%20warm%20sand%20tones%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=giftshort2&orientation=portrait",
  },
  {
    key: "her" as GiftFilterKey,
    label: "هدايا لها",
    desc: "حقائب السدو والأكواب واللمسات الناعمة",
    icon: "ri-heart-3-line",
    image:
      "https://readdy.ai/api/search-image?query=Feminine%20gift%20flat%20lay%20of%20a%20cream%20Sadu%20inspired%20leather%20pouch%20with%20gold%20accents%20beside%20a%20delicate%20Arabic%20coffee%20cup%20on%20a%20warm%20beige%20linen%20surface%2C%20quiet%20luxury%20gift%20photography%2C%20warm%20sand%20tones%2C%20soft%20light%2C%20high%20detail&width=800&height=1000&seq=giftshort3&orientation=portrait",
  },
  {
    key: "under200" as GiftFilterKey,
    label: "هدايا أقل من 200 ر.س",
    desc: "خيارات أنيقة بميزانية لطيفة",
    icon: "ri-price-tag-3-line",
    image:
      "https://readdy.ai/api/search-image?query=Affordable%20luxury%20gift%20set%20of%20a%20gold%20leather%20keychain%20a%20foiled%20gift%20card%20and%20small%20leather%20accessories%20in%20a%20cream%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20gift%20photography%2C%20warm%20sand%20tones%2C%20soft%20light%2C%20high%20detail&width=800&height=1000&seq=giftshort4&orientation=portrait",
  },
];

const himCats = ["حقائب البشت", "المسابح", "حقائب الجوال", "الإكسسوارات"];
const herCats = ["حقائب السدو", "توت باق", "الأكواب", "الإكسسوارات"];

export function filterGifts(key: GiftFilterKey): ShopProduct[] {
  switch (key) {
    case "ready":
      return shopProducts.filter((p) => p.collection === "مجموعة الهدايا");
    case "him":
      return shopProducts.filter(
        (p) => p.collection === "مجموعة البشت" || himCats.includes(p.category)
      );
    case "her":
      return shopProducts.filter(
        (p) => p.collection === "مجموعة السدو" || herCats.includes(p.category)
      );
    case "under200":
      return shopProducts.filter((p) => p.price < 200);
    default:
      return shopProducts;
  }
}

export const giftFilterLabels: Record<GiftFilterKey, string> = {
  all: "كل الهدايا",
  ready: "البكجات الجاهزة",
  him: "هدايا له",
  her: "هدايا لها",
  under200: "هدايا أقل من 200 ر.س",
};

export type GiftBundleData = {
  name: string;
  summary: string;
  contents: string[];
  price: number;
  oldPrice: number;
  image: string;
};

export const giftBundlesData: GiftBundleData[] = [
  {
    name: "بكج الضيافة الكامل",
    summary: "حقيبة + مسبحة + كوب",
    contents: ["حقيبة البشت الملكي", "مسبحة مجاز الذهبية", "كوب القهوة العربية"],
    price: 320,
    oldPrice: 460,
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20gift%20box%20containing%20a%20black%20leather%20Bisht%20pouch%20a%20beaded%20prayer%20misbaha%20and%20a%20gold%20rimmed%20cup%20nested%20in%20cream%20tissue%20paper%20with%20a%20gold%20ribbon%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=giftbundle1&orientation=squarish",
  },
  {
    name: "بكج الوجاهة",
    summary: "حقيبة + مسبحة + ميدالية",
    contents: ["حقيبة شموخ البشت ذهبي", "مسبحة البشت الفاخرة", "ميدالية البشت الذهبية"],
    price: 349,
    oldPrice: 490,
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20gift%20set%20of%20a%20black%20leather%20Bisht%20pouch%20golden%20prayer%20beads%20and%20a%20small%20gold%20keychain%20in%20a%20minimalist%20cream%20box%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=giftbundle2&orientation=squarish",
  },
  {
    name: "بكج هدية لها",
    summary: "حقيبة + أكواب + علبة",
    contents: ["حقيبة أوروم مجاز", "طقم أكواب السدو", "علبة مجاز الفاخرة"],
    price: 299,
    oldPrice: 430,
    image:
      "https://readdy.ai/api/search-image?query=Feminine%20luxury%20gift%20box%20with%20a%20cream%20Sadu%20leather%20pouch%20a%20set%20of%20gold%20rimmed%20cups%20and%20an%20embossed%20gift%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=giftbundle3&orientation=squarish",
  },
  {
    name: "بكج الهدية الأنيقة",
    summary: "ميدالية + بطاقة + علبة",
    contents: ["ميدالية البشت الذهبية", "بطاقة إهداء مذهّبة", "علبة مجاز الفاخرة"],
    price: 180,
    oldPrice: 250,
    image:
      "https://readdy.ai/api/search-image?query=Small%20luxury%20gift%20set%20of%20a%20gold%20leather%20keychain%20a%20gold%20foiled%20card%20and%20a%20cream%20embossed%20gift%20box%20tied%20with%20gold%20ribbon%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20gift%20photography%2C%20sand%20tones%2C%20soft%20light%2C%20high%20detail&width=1000&height=1000&seq=giftbundle4&orientation=squarish",
  },
];

export const finderQuestions = [
  { key: "who", label: "لمن الهدية؟", options: ["له", "لها", "للشركات"] },
  {
    key: "occasion",
    label: "المناسبة؟",
    options: ["عيد", "تخرّج", "مولود جديد", "شكر وتقدير", "اليوم الوطني"],
  },
  {
    key: "budget",
    label: "الميزانية؟",
    options: ["أقل من 100", "100 - 200", "200 - 300", "أكثر من 300"],
  },
] as const;

const budgetBands: Record<string, [number, number]> = {
  "أقل من 100": [0, 99],
  "100 - 200": [100, 200],
  "200 - 300": [200, 300],
  "أكثر من 300": [300, 100000],
};

export function suggestGifts(answers: Record<string, string>): ShopProduct[] {
  const band = answers.budget ? budgetBands[answers.budget] : null;
  let pool = shopProducts.filter(
    (p) => !band || (p.price >= band[0] && p.price <= band[1])
  );

  if (answers.occasion === "اليوم الوطني") {
    const nd = pool.filter((p) => p.name.includes("اليوم الوطني"));
    if (nd.length) pool = nd;
  }

  const cats = answers.who === "له" ? himCats : answers.who === "لها" ? herCats : null;
  if (cats) {
    const preferred = pool.filter((p) => cats.includes(p.category));
    if (preferred.length >= 3) pool = preferred;
  }

  return pool.slice(0, 4);
}