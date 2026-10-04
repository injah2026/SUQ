export type NavLink = { label: string; href: string };
export type MegaColumn = { title: string; links: NavLink[] };

export const navEntries = [
  { key: "shop", type: "mega", label: "تسوّق" },
  { key: "gifts", type: "dropdown", label: "الهدايا" },
  { key: "bisht", type: "link", label: "مجموعة البشت", href: "/collection/bisht" },
  { key: "custom", type: "link", label: "صمّم باسمك", href: "/custom" },
  { key: "corporate", type: "link", label: "للشركات", href: "/corporate" },
  { key: "national", type: "badge", label: "اليوم الوطني", href: "/collection/national-day" },
] as const;

export const megaColumns: MegaColumn[] = [
  {
    title: "الحقائب",
    links: [
      { label: "حقائب البشت", href: "/collection/bisht" },
      { label: "حقائب السدو", href: "/collection/sadu" },
      { label: "توت باق", href: "/shop" },
      { label: "حقائب الجوال", href: "/shop" },
    ],
  },
  {
    title: "الإكسسوارات",
    links: [
      { label: "المسابح", href: "/shop" },
      { label: "الأكواب", href: "/shop" },
      { label: "الإكسسوارات", href: "/shop" },
    ],
  },
  {
    title: "المجموعات",
    links: [
      { label: "مجموعة البشت", href: "/collection/bisht" },
      { label: "مجموعة السدو", href: "/collection/sadu" },
      { label: "مجموعة اليوم الوطني", href: "/collection/national-day" },
    ],
  },
  {
    title: "الأزياء",
    links: [
      { label: "الجلابيات السعودية", href: "/shop?category=%D8%A7%D9%84%D8%AC%D9%84%D8%A7%D8%A8%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9" },
    ],
  },
];

export const giftLinks: NavLink[] = [
  { label: "بكجات جاهزة", href: "/gifts?filter=ready" },
  { label: "هدايا له", href: "/gifts?filter=him" },
  { label: "هدايا لها", href: "/gifts?filter=her" },
  { label: "هدايا أقل من 200 ر.س", href: "/gifts?filter=under200" },
];

export const featuredProduct = {
  badge: "الأكثر مبيعًا",
  name: "حقيبة البشت ذهبي",
  price: "150 ر.س",
  href: "/product",
  image:
    "https://readdy.ai/api/search-image?query=Luxury%20black%20leather%20Saudi%20heritage%20pouch%20bag%20with%20fine%20gold%20Bisht%20embroidery%20and%20a%20tassel%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20minimalist%20high%20detail&width=800&height=1000&seq=suqmajaz12&orientation=portrait",
};