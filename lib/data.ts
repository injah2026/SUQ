export type NavItem = { label: string; href: string; dot?: boolean };

export const navItems: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "اليوم الوطني", href: "/shop", dot: true },
  { label: "حقائب البشت", href: "/shop" },
  { label: "حقائب السدو", href: "/shop" },
  { label: "المسابح", href: "/shop" },
  { label: "الأكواب", href: "/shop" },
  { label: "الإكسسوارات", href: "/shop" },
  { label: "البكجات والهدايا", href: "/product" },
  { label: "تصميم مخصص", href: "/product" },
  { label: "طلبات الشركات", href: "/product" },
];

export const relatedProducts = [
  {
    name: "حقيبة فريد ذهبي",
    price: 150,
    oldPrice: 300,
    badge: "وفر 50%",
    collection: "مجموعة البشت",
    rating: 4.7,
    reviews: 18,
    colors: [
      { name: "أسود وذهبي", swatch: "#0E0E0E" },
      { name: "بيج وذهبي", swatch: "#D9C7A8" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20black%20leather%20luxury%20pouch%20with%20a%20single%20vertical%20gold%20embroidered%20stripe%20standing%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20minimalist%20high%20detail&width=800&height=1000&seq=suqmajaz11&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Black%20leather%20luxury%20pouch%20bag%20with%20gold%20embroidered%20stripe%20held%20inside%20an%20open%20palm%20against%20a%20clean%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20warm%20sand%20tones%2C%20soft%20shadow%2C%20minimalist%20high%20detail&width=800&height=1000&seq=suqmajaz11b&orientation=portrait",
  },
  {
    name: "حقيبة البشت ذهبي",
    price: 150,
    oldPrice: 300,
    badge: "الأكثر مبيعاً",
    collection: "مجموعة البشت",
    rating: 4.8,
    reviews: 24,
    stock: 3,
    colors: [
      { name: "أسود وذهبي", swatch: "#0E0E0E" },
      { name: "كحلي وذهبي", swatch: "#1B2A4A" },
      { name: "بيج وذهبي", swatch: "#D9C7A8" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Luxury%20black%20leather%20Saudi%20heritage%20pouch%20bag%20with%20fine%20gold%20Bisht%20embroidery%20and%20a%20tassel%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20minimalist%20high%20detail&width=800&height=1000&seq=suqmajaz12&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Black%20leather%20Saudi%20heritage%20pouch%20with%20gold%20Bisht%20embroidery%20and%20tassel%20photographed%20from%20a%20top%20angle%20on%20a%20clean%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20tones%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=suqmajaz12b&orientation=portrait",
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
    colors: [
      { name: "كريمي وأسود", swatch: "#EFE7DB" },
      { name: "كحلي وذهبي", swatch: "#1B2A4A" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Sophisticated%20cream%20and%20black%20leather%20luxury%20pouch%20bag%20with%20delicate%20gold%20geometric%20Sadu%20pattern%20accents%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=suqmajaz13&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Cream%20and%20black%20leather%20luxury%20pouch%20bag%20with%20gold%20Sadu%20pattern%20accents%20opened%20to%20reveal%20its%20interior%20on%20a%20clean%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20tones%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=suqmajaz13b&orientation=portrait",
  },
  {
    name: "حقيبة البشت جوال ذهبي",
    price: 70,
    oldPrice: 100,
    badge: "وفر 30%",
    collection: "مجموعة الإكسسوارات",
    rating: 4.6,
    reviews: 32,
    stock: 7,
    colors: [
      { name: "أسود وذهبي", swatch: "#0E0E0E" },
      { name: "كحلي وذهبي", swatch: "#1B2A4A" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Small%20luxury%20black%20leather%20phone%20pouch%20with%20a%20thin%20vertical%20gold%20Bisht%20embroidered%20line%20and%20tiny%20gold%20tassel%20resting%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=800&height=1000&seq=suqmajaz14&orientation=portrait",
    hover:
      "https://readdy.ai/api/search-image?query=Small%20black%20leather%20phone%20pouch%20with%20gold%20Bisht%20embroidered%20line%20and%20gold%20tassel%20hanging%20beside%20a%20smartphone%20on%20a%20clean%20beige%20studio%20background%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20tones%2C%20soft%20shadow%2C%20high%20detail&width=800&height=1000&seq=suqmajaz14b&orientation=portrait",
  },
];

export const colorOptions = [
  { name: "أسود وذهبي", swatch: "#0E0E0E" },
  { name: "كحلي وذهبي", swatch: "#1B2A4A" },
  { name: "بيج وذهبي", swatch: "#D9C7A8" },
];

export const galleryImages = [
  {
    src: "https://readdy.ai/api/search-image?query=Front%20view%20of%20a%20single%20luxury%20black%20leather%20pouch%20bag%20with%20a%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20a%20small%20gold%20tassel%20standing%20upright%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=1200&height=1200&seq=suqmajazv1&orientation=squarish",
    alt: "حقيبة شموخ البشت - المنظر الأمامي",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Back%20view%20of%20the%20same%20single%20luxury%20black%20leather%20pouch%20bag%20with%20a%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20a%20small%20gold%20tassel%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=1200&height=1200&seq=suqmajazv2&orientation=squarish",
    alt: "حقيبة شموخ البشت - المنظر الخلفي",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Interior%20view%20of%20the%20same%20luxury%20black%20leather%20pouch%20bag%20lying%20open%20to%20reveal%20its%20soft%20elegant%20lining%20and%20the%20vertical%20gold%20Bisht%20embroidery%20edge%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=1200&height=1200&seq=suqmajazv3&orientation=squarish",
    alt: "حقيبة شموخ البشت - من الداخل",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Macro%20close%20up%20of%20the%20fine%20vertical%20gold%20Bisht%20embroidery%20stitches%20on%20the%20black%20leather%20of%20the%20same%20luxury%20pouch%20bag%20beside%20its%20small%20gold%20tassel%2C%20quiet%20luxury%20product%20photography%2C%20warm%20beige%20background%2C%20soft%20light%2C%20high%20detail&width=1200&height=1200&seq=suqmajazv4&orientation=squarish",
    alt: "تفاصيل تطريز البشت الذهبي",
  },
  {
    src: "https://readdy.ai/api/search-image?query=The%20same%20luxury%20black%20leather%20pouch%20bag%20with%20a%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20small%20gold%20tassel%20held%20in%20a%20hand%20against%20a%20clean%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20product%20photography%2C%20warm%20sand%20tones%2C%20soft%20shadow%2C%20high%20detail&width=1200&height=1200&seq=suqmajazv5&orientation=squarish",
    alt: "حقيبة شموخ البشت - في اليد",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Lifestyle%20scene%20of%20the%20same%20luxury%20black%20leather%20pouch%20bag%20with%20a%20vertical%20gold%20Bisht%20embroidered%20stripe%20and%20small%20gold%20tassel%20resting%20on%20a%20warm%20beige%20table%20beside%20a%20cup%20of%20Arabic%20coffee%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sunlight%2C%20soft%20shadow%2C%20high%20detail&width=1200&height=1200&seq=suqmajazv6&orientation=squarish",
    alt: "حقيبة شموخ البشت - صورة حياتية",
  },
];

export const trustBadges = [
  { icon: "ri-shield-check-line", label: "دفع آمن" },
  { icon: "ri-refresh-line", label: "استبدال 7 أيام" },
  { icon: "ri-hand-heart-line", label: "صناعة يدوية" },
  { icon: "ri-truck-line", label: "شحن لكل المملكة" },
];

export const accordionItems = [
  {
    title: "الوصف والتفاصيل",
    content:
      "حقيبة شموخ البشت مصنوعة من الجلد الطبيعي الفاخر مع تطريز ذهبي يدوي مستوحى من إرث البشت. تجمع بين الأناقة والمساحة العملية، وتأتي بتغليف فاخر جاهز للإهداء في المناسبات.",
  },
  {
    title: "المقاسات والمواد",
    content:
      "الطول 22 سم، العرض 15 سم، العمق 6 سم. جلد طبيعي أصلي، بطانة داخلية ناعمة، خياطة يدوية متينة، وتطريز بخيوط ذهبية مقاومة للتأكسد.",
  },
  {
    title: "الشحن والتوصيل",
    content:
      "شحن سريع لجميع مناطق المملكة خلال 2 إلى 4 أيام عمل، مع تتبع مباشر للطلب. الشحن مجاني للطلبات فوق 300 ر.س.",
  },
  {
    title: "الاستبدال والإرجاع",
    content:
      "يمكنك استبدال أو إرجاع القطعة خلال 14 يومًا من الاستلام بشرط أن تكون بحالتها الأصلية مع التغليف. القطع المطرزة بالأسماء غير قابلة للإرجاع.",
  },
];

export const brandStory = {
  image:
    "https://readdy.ai/api/search-image?query=Warm%20atmospheric%20workshop%20scene%20with%20a%20craftsman%20hand%20embroidering%20gold%20threads%20on%20black%20leather%20in%20a%20traditional%20Saudi%20setting%2C%20warm%20light%2C%20quiet%20luxury%20brand%20story%20photography%2C%20soft%20shadows%2C%20high%20detail&width=1600&height=900&seq=suqmajazbs1&orientation=landscape",
};

export const corporate = {
  image:
    "https://readdy.ai/api/search-image?query=Elegant%20flat%20lay%20of%20premium%20corporate%20gift%20sets%20with%20black%20leather%20pouches%2C%20gold%20embroidered%20details%20and%20small%20wrapped%20boxes%20on%20a%20clean%20beige%20background%2C%20quiet%20luxury%20business%20gifting%20photography%2C%20warm%20tones%2C%20soft%20shadows%2C%20high%20detail&width=1600&height=900&seq=suqmajazco1&orientation=landscape",
};