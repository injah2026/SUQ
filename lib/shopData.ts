import type { ProductCardData, ProductColor } from "@/components/product/ProductCard";

export const MAX_PRICE = 600;

export const categoryChips = [
  "الكل",
  "حقائب البشت",
  "حقائب السدو",
  "توت باق",
  "حقائب الجوال",
  "الجلابيات السعودية",
  "المسابح",
  "الأكواب",
  "الإكسسوارات",
];

export const categoryMeta: Record<string, { title: string; subtitle: string; image: string }> = {
  "الكل": {
    title: "كل المنتجات",
    subtitle: "تشكيلة مجاز الكاملة من الحقائب والإكسسوارات بلمسة تراثية فاخرة.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20assorted%20luxury%20black%20leather%20pouches%20with%20fine%20gold%20Bisht%20embroidery%20and%20gold%20accents%20arranged%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20diffused%20light%2C%20elegant%20calm%20mood&width=1600&height=520&seq=shopbannerall&orientation=landscape",
  },
  "حقائب البشت": {
    title: "حقائب البشت",
    subtitle: "تطريز البشت الذهبي على جلد فاخر، أناقة تراثية بتفاصيل يومية.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20luxury%20black%20leather%20pouch%20bags%20with%20vertical%20gold%20Bisht%20embroidered%20stripes%20and%20gold%20tassels%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20diffused%20light&width=1600&height=520&seq=shopbannerbisht&orientation=landscape",
  },
  "حقائب السدو": {
    title: "حقائب السدو",
    subtitle: "أنماط السدو الهندسية وألوان الصحراء الدافئة على جلد ناعم.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20cream%20and%20black%20leather%20pouch%20bags%20with%20delicate%20gold%20Sadu%20geometric%20pattern%20accents%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20light&width=1600&height=520&seq=shopbannersadu&orientation=landscape",
  },
  "توت باق": {
    title: "توت باق",
    subtitle: "حقائب كتف واسعة وعملية بلمسة مجاز الفاخرة.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20elegant%20cream%20leather%20tote%20bags%20with%20subtle%20gold%20Sadu%20trim%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20diffused%20light&width=1600&height=520&seq=shopbannertote&orientation=landscape",
  },
  "حقائب الجوال": {
    title: "حقائب الجوال",
    subtitle: "حماية أنيقة لهاتفك بتطريز ذهبي بحجم مثالي.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20small%20compact%20leather%20phone%20pouches%20with%20gold%20embroidered%20lines%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20light&width=1600&height=520&seq=shopbannerphone&orientation=landscape",
  },
  "المسابح": {
    title: "المسابح",
    subtitle: "مسابح مذهّبة وملوّنة بلمسات تراثية راقية.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20elegant%20golden%20beaded%20prayer%20beads%20misbaha%20arranged%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20diffused%20light&width=1600&height=520&seq=shopbannermisbaha&orientation=landscape",
  },
  "الأكواب": {
    title: "الأكواب",
    subtitle: "أطقم قهوة عربية بلمسات ذهبية وأنماط السدو.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20elegant%20Arabic%20coffee%20cups%20with%20thin%20gold%20rims%20and%20Sadu%20patterns%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20light&width=1600&height=520&seq=shopbannercups&orientation=landscape",
  },
  "الإكسسوارات": {
    title: "الإكسسوارات",
    subtitle: "تفاصيل صغيرة تكمل إطلالتك بلمسة مجاز.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20small%20gold%20leather%20keychains%20and%20foiled%20gift%20cards%20with%20Sadu%20motifs%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20product%20photography%20background%2C%20sand%20tones%2C%20soft%20light&width=1600&height=520&seq=shopbanneracc&orientation=landscape",
  },
  "الجلابيات السعودية": {
    title: "الجلابيات السعودية",
    subtitle: "جلابيات فاخرة بتطريز ذهبي مستوحى من البشت والسدو.",
    image:
      "https://readdy.ai/api/search-image?query=Soft%20blurred%20wide%20banner%20of%20elegant%20Saudi%20jalabiya%20robes%20with%20fine%20gold%20Bisht%20and%20Sadu%20embroidery%20displayed%20on%20mannequins%20against%20a%20warm%20beige%20backdrop%2C%20quiet%20luxury%20fashion%20photography%20background%2C%20sand%20tones%2C%20soft%20diffused%20light%2C%20refined%20heritage%20mood&width=1600&height=520&seq=shopbannerjalabiya&orientation=landscape",
  },
};

export const colorOptions: ProductColor[] = [
  { name: "أسود وذهبي", swatch: "#0E0E0E" },
  { name: "كحلي وذهبي", swatch: "#1B2A4A" },
  { name: "بيج وذهبي", swatch: "#D9C7A8" },
  { name: "كريمي", swatch: "#EFE7DB" },
  { name: "ذهبي", swatch: "#C2A06B" },
  { name: "أخضر", swatch: "#006C35" },
];

export const collectionOptions = [
  "مجموعة البشت",
  "مجموعة السدو",
  "مجموعة الهدايا",
  "مجموعة الإكسسوارات",
];

export const sortOptions = [
  { key: "best", label: "الأكثر مبيعًا" },
  { key: "newest", label: "الأحدث" },
  { key: "price-asc", label: "السعر من الأقل" },
  { key: "price-desc", label: "السعر من الأعلى" },
];

const BLACK_GOLD = colorOptions[0];
const NAVY_GOLD = colorOptions[1];
const BEIGE_GOLD = colorOptions[2];
const CREAM = colorOptions[3];
const GOLD = colorOptions[4];
const GREEN = colorOptions[5];

export type ShopProduct = ProductCardData & {
  category: string;
  sold: number;
  added: number;
};

export const shopProducts: ShopProduct[] = [
  {
    name: "حقيبة شموخ البشت ذهبي",
    price: 150,
    oldPrice: 300,
    badge: "وفر 50%",
    collection: "مجموعة البشت",
    rating: 4.9,
    reviews: 58,
    stock: 3,
    category: "حقائب البشت",
    sold: 320,
    added: 24,
    colors: [BLACK_GOLD, NAVY_GOLD, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20solid%20black%20leather%20luxury%20pouch%20bag%20with%20a%20thin%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20a%20small%20gold%20tassel%20standing%20upright%20on%20a%20warm%20beige%20limestone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20clean%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20minimal%20high%20detail&width=800&height=1000&seq=shopp01a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=The%20same%20black%20leather%20luxury%20pouch%20bag%20with%20gold%20Bisht%20embroidery%20held%20gently%20in%20a%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20minimal%20high%20detail&width=800&height=1000&seq=shopp01b&orientation=portrait",
  },
  {
    name: "حقيبة البشت الملكي",
    price: 189,
    oldPrice: 260,
    badge: "جديد",
    collection: "مجموعة البشت",
    rating: 4.8,
    reviews: 41,
    category: "حقائب البشت",
    sold: 210,
    added: 20,
    colors: [BLACK_GOLD, NAVY_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Royal%20black%20leather%20luxury%20pouch%20bag%20decorated%20with%20a%20bold%20vertical%20gold%20Bisht%20embroidered%20band%20and%20a%20gold%20tassel%20resting%20on%20a%20warm%20beige%20stone%20slab%2C%20quiet%20luxury%20product%20photography%2C%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp02a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Royal%20black%20leather%20pouch%20bag%20with%20gold%20Bisht%20embroidery%20and%20tassel%20shown%20from%20a%20top%20angle%20on%20a%20clean%20warm%20beige%20studio%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20minimal%20high%20detail&width=800&height=1000&seq=shopp02b&orientation=portrait",
  },
  {
    name: "حقيبة فريد البشت",
    price: 150,
    oldPrice: 300,
    badge: "وفر 50%",
    collection: "مجموعة البشت",
    rating: 4.7,
    reviews: 33,
    category: "حقائب البشت",
    sold: 180,
    added: 16,
    colors: [BLACK_GOLD, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Unique%20black%20leather%20luxury%20pouch%20bag%20with%20a%20delicate%20vertical%20gold%20Bisht%20embroidered%20line%20and%20a%20small%20gold%20tassel%20standing%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp03a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Black%20leather%20pouch%20with%20gold%20Bisht%20embroidery%20held%20in%20an%20open%20palm%20over%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp03b&orientation=portrait",
  },
  {
    name: "حقيبة نخبة البشت",
    price: 175,
    oldPrice: 250,
    badge: "وفر 30%",
    collection: "مجموعة البشت",
    rating: 4.8,
    reviews: 27,
    category: "حقائب البشت",
    sold: 150,
    added: 12,
    colors: [NAVY_GOLD, BLACK_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Premium%20black%20leather%20luxury%20pouch%20bag%20with%20a%20refined%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20gold%20tassel%20displayed%20on%20a%20warm%20beige%20linen%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp04a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Premium%20black%20leather%20pouch%20bag%20with%20gold%20Bisht%20embroidery%20and%20tassel%20photographed%20beside%20dried%20palm%20on%20a%20clean%20warm%20beige%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp04b&orientation=portrait",
  },
  {
    name: "حقيبة أوروم مجاز",
    price: 150,
    oldPrice: 200,
    badge: "وفر 25%",
    collection: "مجموعة السدو",
    rating: 4.9,
    reviews: 36,
    stock: 4,
    category: "حقائب السدو",
    sold: 240,
    added: 23,
    colors: [CREAM, NAVY_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Sophisticated%20cream%20and%20black%20leather%20luxury%20pouch%20bag%20with%20delicate%20gold%20geometric%20Sadu%20pattern%20accents%20on%20a%20clean%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp05a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Cream%20and%20black%20leather%20pouch%20bag%20with%20gold%20Sadu%20geometric%20accents%20opened%20to%20reveal%20its%20interior%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp05b&orientation=portrait",
  },
  {
    name: "حقيبة السدو الكريمي",
    price: 165,
    oldPrice: 220,
    badge: "وفر 25%",
    collection: "مجموعة السدو",
    rating: 4.7,
    reviews: 22,
    category: "حقائب السدو",
    sold: 130,
    added: 18,
    colors: [CREAM, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20cream%20leather%20luxury%20pouch%20bag%20woven%20with%20soft%20gold%20and%20subtle%20red%20Sadu%20geometric%20motifs%20standing%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp06a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Cream%20leather%20pouch%20bag%20with%20Sadu%20motifs%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp06b&orientation=portrait",
  },
  {
    name: "حقيبة نسيج السدو",
    price: 140,
    oldPrice: 190,
    badge: "وفر 26%",
    collection: "مجموعة السدو",
    rating: 4.6,
    reviews: 19,
    category: "حقائب السدو",
    sold: 110,
    added: 14,
    colors: [NAVY_GOLD, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Artisan%20leather%20luxury%20pouch%20bag%20with%20fine%20woven%20Sadu%20pattern%20in%20warm%20desert%20tones%20and%20gold%20thread%20accents%20on%20a%20clean%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp07a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Woven%20Sadu%20pattern%20leather%20pouch%20bag%20shown%20from%20a%20top%20angle%20on%20a%20clean%20warm%20beige%20studio%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp07b&orientation=portrait",
  },
  {
    name: "حقيبة صحراء السدو",
    price: 155,
    oldPrice: 210,
    badge: "جديد",
    collection: "مجموعة السدو",
    rating: 4.8,
    reviews: 25,
    category: "حقائب السدو",
    sold: 120,
    added: 22,
    colors: [BEIGE_GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Desert%20inspired%20leather%20luxury%20pouch%20bag%20with%20geometric%20Sadu%20patterns%20in%20sand%20and%20gold%20tones%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp08a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Desert%20inspired%20Sadu%20leather%20pouch%20bag%20held%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp08b&orientation=portrait",
  },
  {
    name: "توت باق مجاز الفاخر",
    price: 210,
    oldPrice: 280,
    badge: "وفر 25%",
    collection: "مجموعة الهدايا",
    rating: 4.9,
    reviews: 44,
    category: "توت باق",
    sold: 200,
    added: 21,
    colors: [CREAM, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20large%20cream%20leather%20tote%20bag%20with%20subtle%20gold%20Sadu%20trim%20and%20black%20leather%20handles%20standing%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp09a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Large%20cream%20leather%20tote%20bag%20with%20gold%20Sadu%20trim%20carried%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp09b&orientation=portrait",
  },
  {
    name: "توت باق السدو",
    price: 195,
    oldPrice: 260,
    badge: "وفر 25%",
    collection: "مجموعة الهدايا",
    rating: 4.7,
    reviews: 21,
    category: "توت باق",
    sold: 140,
    added: 15,
    colors: [BEIGE_GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Stylish%20leather%20tote%20bag%20woven%20with%20traditional%20Sadu%20geometric%20motifs%20in%20warm%20tones%20on%20a%20clean%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp10a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Sadu%20woven%20leather%20tote%20bag%20photographed%20from%20a%20top%20angle%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp10b&orientation=portrait",
  },
  {
    name: "توت باق اليوم الوطني",
    price: 180,
    oldPrice: 240,
    badge: "إصدار محدود",
    collection: "مجموعة الهدايا",
    rating: 4.8,
    reviews: 29,
    category: "توت باق",
    sold: 160,
    added: 19,
    colors: [CREAM, GREEN],
    image:
      "https://readdy.ai/api/search-image?query=Festive%20green%20and%20cream%20leather%20tote%20bag%20with%20gold%20Sadu%20patterns%20celebrating%20Saudi%20heritage%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp11a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Green%20and%20cream%20heritage%20leather%20tote%20bag%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp11b&orientation=portrait",
  },
  {
    name: "حقيبة البشت جوال ذهبي",
    price: 70,
    oldPrice: 100,
    badge: "وفر 30%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.6,
    reviews: 32,
    stock: 5,
    category: "حقائب الجوال",
    sold: 260,
    added: 13,
    colors: [BLACK_GOLD, NAVY_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Small%20black%20leather%20phone%20pouch%20with%20a%20thin%20vertical%20gold%20Bisht%20embroidered%20line%20and%20tiny%20gold%20tassel%20resting%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp12a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Small%20black%20leather%20phone%20pouch%20with%20gold%20Bisht%20embroidery%20hanging%20beside%20a%20smartphone%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp12b&orientation=portrait",
  },
  {
    name: "حقيبة جوال السدو",
    price: 65,
    oldPrice: 95,
    badge: "وفر 31%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.5,
    reviews: 24,
    category: "حقائب الجوال",
    sold: 190,
    added: 10,
    colors: [NAVY_GOLD, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Compact%20leather%20phone%20pouch%20with%20fine%20Sadu%20geometric%20embroidery%20in%20gold%20and%20navy%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp13a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Compact%20Sadu%20embroidered%20phone%20pouch%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp13b&orientation=portrait",
  },
  {
    name: "حقيبة جوال البشت الأسود",
    price: 75,
    oldPrice: 105,
    badge: "وفر 28%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.7,
    reviews: 18,
    category: "حقائب الجوال",
    sold: 150,
    added: 9,
    colors: [BLACK_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Minimal%20black%20leather%20phone%20pouch%20with%20an%20elegant%20vertical%20gold%20Bisht%20embroidered%20stripe%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp14a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Minimal%20black%20leather%20phone%20pouch%20with%20gold%20Bisht%20embroidery%20laid%20flat%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp14b&orientation=portrait",
  },
  {
    name: "حقيبة جوال جيبي",
    price: 60,
    oldPrice: 90,
    badge: "وفر 33%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.5,
    reviews: 15,
    category: "حقائب الجوال",
    sold: 120,
    added: 8,
    colors: [NAVY_GOLD, BLACK_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Slim%20leather%20phone%20pouch%20with%20a%20subtle%20vertical%20gold%20embroidered%20line%20and%20small%20clasp%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp15a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Slim%20leather%20phone%20pouch%20held%20between%20fingers%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp15b&orientation=portrait",
  },
  {
    name: "مسبحة مجاز الذهبية",
    price: 90,
    oldPrice: 130,
    badge: "وفر 30%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.8,
    reviews: 37,
    stock: 6,
    category: "المسابح",
    sold: 210,
    added: 17,
    colors: [GOLD, BLACK_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20golden%20beaded%20prayer%20beads%20misbaha%20with%20a%20subtle%20tassel%20arranged%20in%20a%20soft%20spiral%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp16a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Golden%20beaded%20prayer%20beads%20misbaha%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp16b&orientation=portrait",
  },
  {
    name: "مسبحة السدو الكحلية",
    price: 85,
    oldPrice: 120,
    badge: "وفر 29%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.6,
    reviews: 20,
    category: "المسابح",
    sold: 150,
    added: 11,
    colors: [NAVY_GOLD, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Navy%20and%20gold%20beaded%20prayer%20beads%20misbaha%20with%20a%20woven%20Sadu%20inspired%20pattern%20laid%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp17a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Navy%20and%20gold%20prayer%20beads%20misbaha%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp17b&orientation=portrait",
  },
  {
    name: "مسبحة البشت الفاخرة",
    price: 110,
    oldPrice: 160,
    badge: "وفر 31%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.9,
    reviews: 28,
    category: "المسابح",
    sold: 130,
    added: 7,
    colors: [BLACK_GOLD, GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Premium%20black%20and%20gold%20beaded%20prayer%20beads%20misbaha%20with%20a%20fine%20gold%20tassel%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp18a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Premium%20black%20and%20gold%20prayer%20beads%20misbaha%20draped%20over%20a%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp18b&orientation=portrait",
  },
  {
    name: "كوب القهوة العربية",
    price: 95,
    oldPrice: 140,
    badge: "وفر 32%",
    collection: "مجموعة الهدايا",
    rating: 4.7,
    reviews: 26,
    category: "الأكواب",
    sold: 170,
    added: 6,
    colors: [CREAM, GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20white%20porcelain%20Arabic%20coffee%20cup%20with%20a%20thin%20gold%20rim%20and%20subtle%20Sadu%20pattern%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp19a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=White%20porcelain%20Arabic%20coffee%20cup%20with%20gold%20rim%20beside%20roasted%20coffee%20beans%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp19b&orientation=portrait",
  },
  {
    name: "كوب مجاز المذهّب",
    price: 120,
    oldPrice: 170,
    badge: "وفر 29%",
    collection: "مجموعة الهدايا",
    rating: 4.8,
    reviews: 23,
    category: "الأكواب",
    sold: 140,
    added: 5,
    colors: [GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20gilded%20Arabic%20coffee%20cup%20with%20ornate%20gold%20detailing%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp20a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Luxury%20gilded%20Arabic%20coffee%20cup%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp20b&orientation=portrait",
  },
  {
    name: "طقم أكواب السدو",
    price: 150,
    oldPrice: 210,
    badge: "وفر 28%",
    collection: "مجموعة الهدايا",
    rating: 4.9,
    reviews: 31,
    category: "الأكواب",
    sold: 130,
    added: 4,
    colors: [NAVY_GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Set%20of%20six%20elegant%20Arabic%20coffee%20cups%20with%20fine%20Sadu%20patterns%20and%20gold%20rims%20arranged%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp21a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Set%20of%20Sadu%20patterned%20Arabic%20coffee%20cups%20on%20a%20brass%20tray%20in%20a%20warm%20beige%20studio%20setting%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadows%2C%20high%20detail&width=800&height=1000&seq=shopp21b&orientation=portrait",
  },
  {
    name: "ميدالية البشت الذهبية",
    price: 45,
    oldPrice: 70,
    badge: "وفر 35%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.6,
    reviews: 34,
    category: "الإكسسوارات",
    sold: 230,
    added: 3,
    colors: [GOLD, BLACK_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Small%20gold%20leather%20keychain%20with%20a%20tiny%20Bisht%20embroidered%20tassel%20resting%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp22a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Small%20gold%20leather%20keychain%20with%20tassel%20attached%20to%20a%20bag%20strap%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp22b&orientation=portrait",
  },
  {
    name: "بطاقة إهداء مذهّبة",
    price: 35,
    oldPrice: 55,
    badge: "وفر 36%",
    collection: "مجموعة الهدايا",
    rating: 4.5,
    reviews: 16,
    category: "الإكسسوارات",
    sold: 200,
    added: 2,
    colors: [GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20gold%20foiled%20Arabic%20gift%20card%20with%20Sadu%20border%20motifs%20resting%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp23a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Elegant%20gold%20foiled%20Arabic%20gift%20card%20held%20in%20hand%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp23b&orientation=portrait",
  },
  {
    name: "علبة مجاز الفاخرة",
    price: 130,
    oldPrice: 180,
    badge: "وفر 27%",
    collection: "مجموعة الهدايا",
    rating: 4.8,
    reviews: 27,
    category: "الإكسسوارات",
    sold: 160,
    added: 1,
    colors: [NAVY_GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20cream%20leather%20gift%20box%20with%20gold%20Sadu%20embossing%20and%20a%20ribbon%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp24a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Luxury%20cream%20leather%20gift%20box%20with%20gold%20Sadu%20embossing%20open%20to%20reveal%20a%20pouch%20inside%20on%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=shopp24b&orientation=portrait",
  },
  {
    name: "جلابية الشموخ المطرزة",
    price: 450,
    oldPrice: 640,
    badge: "وفر 30%",
    collection: "مجموعة الأزياء",
    rating: 4.9,
    reviews: 34,
    stock: 4,
    category: "الجلابيات السعودية",
    sold: 180,
    added: 26,
    colors: [BLACK_GOLD, CREAM],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20luxury%20Saudi%20jalabiya%20robe%20in%20deep%20black%20fabric%20with%20fine%20gold%20Bisht%20inspired%20embroidery%20along%20the%20neckline%20displayed%20on%20a%20mannequin%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20product%20photography%2C%20soft%20diffused%20lighting%2C%20sand%20tones%2C%20minimalist%20and%20refined%2C%20ultra%20high%20detail&width=800&height=1000&seq=jlby01a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=The%20same%20black%20Saudi%20jalabiya%20robe%20with%20gold%20embroidery%20shown%20from%20a%20close%20detail%20angle%20revealing%20the%20intricate%20gold%20thread%20work%20and%20flowing%20fabric%20on%20a%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=jlby01b&orientation=portrait",
  },
  {
    name: "جلابية السدو الملكية",
    price: 520,
    oldPrice: 720,
    badge: "الأكثر مبيعاً",
    collection: "مجموعة الأزياء",
    rating: 4.8,
    reviews: 28,
    category: "الجلابيات السعودية",
    sold: 150,
    added: 24,
    colors: [CREAM, NAVY_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Royal%20cream%20and%20deep%20red%20Saudi%20jalabiya%20robe%20woven%20with%20traditional%20Sadu%20geometric%20patterns%20and%20delicate%20gold%20thread%20accents%20displayed%20on%20a%20mannequin%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20product%20photography%2C%20soft%20diffused%20light%2C%20sand%20tones%2C%20refined%20heritage%20mood%2C%20ultra%20high%20detail&width=800&height=1000&seq=jlby02a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Close%20detail%20of%20a%20cream%20Saudi%20jalabiya%20robe%20with%20Sadu%20geometric%20weaving%20and%20gold%20accents%20showing%20the%20embroidered%20sleeve%20on%20a%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=jlby02b&orientation=portrait",
  },
  {
    name: "جلابية البشت الذهبية",
    price: 590,
    oldPrice: 820,
    badge: "وفر 28%",
    collection: "مجموعة الأزياء",
    rating: 4.9,
    reviews: 22,
    stock: 3,
    category: "الجلابيات السعودية",
    sold: 120,
    added: 21,
    colors: [BLACK_GOLD, GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Opulent%20black%20Saudi%20jalabiya%20robe%20with%20rich%20gold%20Bisht%20embroidery%20and%20a%20gold%20tassel%20detail%20displayed%20on%20a%20mannequin%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20product%20photography%2C%20soft%20diffused%20light%2C%20sand%20tones%2C%20regal%20heritage%20mood%2C%20ultra%20high%20detail&width=800&height=1000&seq=jlby03a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Close%20detail%20of%20the%20gold%20embroidered%20collar%20and%20cuff%20of%20a%20black%20Saudi%20jalabiya%20robe%20on%20a%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=jlby03b&orientation=portrait",
  },
  {
    name: "جلابية نجد الكلاسيكية",
    price: 390,
    oldPrice: 560,
    badge: "وفر 30%",
    collection: "مجموعة الأزياء",
    rating: 4.7,
    reviews: 19,
    category: "الجلابيات السعودية",
    sold: 100,
    added: 18,
    colors: [CREAM, BEIGE_GOLD],
    image:
      "https://readdy.ai/api/search-image?query=Classic%20ivory%20Saudi%20jalabiya%20robe%20with%20subtle%20gold%20embroidered%20placket%20displayed%20on%20a%20mannequin%20against%20a%20clean%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20product%20photography%2C%20soft%20diffused%20light%2C%20sand%20tones%2C%20timeless%20heritage%20mood%2C%20ultra%20high%20detail&width=800&height=1000&seq=jlby04a&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=A%20classic%20ivory%20Saudi%20jalabiya%20robe%20shown%20from%20a%20three%20quarter%20angle%20highlighting%20the%20soft%20fabric%20drape%20and%20gold%20embroidery%20on%20a%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20fashion%20photography%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=jlby04b&orientation=portrait",
  },
];

export const jalabiyaProducts = shopProducts.filter(
  (p) => p.category === "الجلابيات السعودية"
);