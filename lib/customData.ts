export type CustomProduct = {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
};

export const customProducts: CustomProduct[] = [
  {
    id: "bisht-bag",
    name: "حقيبة البشت",
    price: 150,
    desc: "حقيبة جلدية فاخرة بتطريز ذهبي",
    image:
      "https://readdy.ai/api/search-image?query=Large%20black%20leather%20Saudi%20Bisht%20pouch%20bag%20with%20fine%20gold%20embroidery%20displayed%20upright%20centered%20on%20a%20soft%20warm%20ivory%20background%2C%20quiet%20luxury%20product%20photography%2C%20empty%20clean%20leather%20surface%20in%20the%20middle%20for%20personalization%20preview%2C%20gentle%20soft%20light%2C%20high%20detail&width=1000&height=1250&seq=customprodA&orientation=portrait",
  },
  {
    id: "sadu-bag",
    name: "حقيبة السدو",
    price: 180,
    desc: "نسيج سدو أصيل بلمسة معاصرة",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20cream%20Saudi%20Sadu%20woven%20textile%20bag%20with%20red%20and%20gold%20geometric%20patterns%20centered%20on%20a%20warm%20beige%20background%2C%20quiet%20luxury%20product%20photography%2C%20clean%20empty%20panel%20in%20the%20middle%20for%20name%20embroidery%20preview%2C%20soft%20studio%20light%2C%20high%20detail&width=1000&height=1250&seq=customprodB&orientation=portrait",
  },
  {
    id: "phone-bag",
    name: "حقيبة الجوال",
    price: 120,
    desc: "حقيبة صغيرة أنيقة للاستخدام اليومي",
    image:
      "https://readdy.ai/api/search-image?query=Small%20tan%20leather%20phone%20crossbody%20pouch%20bag%20with%20subtle%20gold%20trim%20centered%20on%20a%20warm%20ivory%20background%2C%20quiet%20luxury%20product%20photography%2C%20plain%20clean%20leather%20area%20in%20the%20middle%20for%20initials%20embroidery%20preview%2C%20soft%20studio%20shadow%2C%20high%20detail&width=1000&height=1250&seq=customprodC&orientation=portrait",
  },
  {
    id: "cup",
    name: "الكوب المطرز",
    price: 90,
    desc: "كوب قهوة عربي بتطريز الاسم",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20matte%20beige%20ceramic%20Arabic%20coffee%20cup%20with%20a%20small%20gold%20embroidered%20wrap%20band%20centered%20on%20a%20warm%20ivory%20background%2C%20quiet%20luxury%20product%20photography%2C%20plain%20smooth%20surface%20in%20the%20middle%20for%20name%20preview%2C%20soft%20light%2C%20high%20detail&width=1000&height=1250&seq=customprodD&orientation=portrait",
  },
];

export const threadColors = [
  { name: "ذهبي", hex: "#C2A06B" },
  { name: "فضي", hex: "#C9CCD1" },
  { name: "أسود", hex: "#1A1A1A" },
  { name: "عنابي", hex: "#7A2E2E" },
  { name: "أخضر", hex: "#0B3D2E" },
  { name: "أزرق", hex: "#1E3A5F" },
];

export const fontStyles = [
  { key: "classic", label: "عربي كلاسيكي", cls: "font-['Aref_Ruqaa']", extra: 0 },
  { key: "modern", label: "عربي حديث", cls: "font-heading", extra: 0 },
  { key: "english", label: "إنجليزي", cls: "font-['Pacifico']", extra: 10 },
  { key: "initials", label: "حروف أولى", cls: "font-heading tracking-[0.3em]", extra: 0 },
];

export const EMBROIDERY_FEE = 30;

export const customSteps = [
  { n: "١", title: "اختر", desc: "اختر القطعة التي تريد تطريزها من تشكيلتنا" },
  { n: "٢", title: "صمّم", desc: "اكتب اسمك أو حروفك واختر لون الخيط ونمط الخط" },
  { n: "٣", title: "استلم خلال 3–5 أيام", desc: "نطرّز قطعتك يدويًا ونشحنها إليك بكل عناية" },
];

export const worksGallery = [
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20detail%20of%20fine%20gold%20hand%20embroidery%20of%20an%20Arabic%20name%20on%20black%20leather%20bag%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20beige%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA1&orientation=squarish",
    caption: "اسم عربي بخيط ذهبي",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20elegant%20silver%20thread%20embroidery%20initials%20monogram%20on%20cream%20fabric%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20neutral%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA2&orientation=squarish",
    caption: "مونوغرام الحروف الأولى",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20minimal%20gold%20embroidered%20company%20logo%20on%20a%20dark%20leather%20corporate%20gift%20item%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA3&orientation=squarish",
    caption: "شعار شركة على هدية",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20red%20thread%20Arabic%20calligraphy%20embroidery%20on%20beige%20Sadu%20textile%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20neutral%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA4&orientation=squarish",
    caption: "خط عربي على نسيج السدو",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20gold%20embroidered%20Arabic%20name%20on%20a%20ceramic%20coffee%20cup%20wrap%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA5&orientation=squarish",
    caption: "اسم على كوب القهوة",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20green%20thread%20Arabic%20initials%20embroidery%20on%20tan%20leather%20phone%20pouch%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA6&orientation=squarish",
    caption: "حروف على حقيبة الجوال",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20gold%20embroidered%20wedding%20monogram%20on%20ivory%20gift%20ribbon%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA7&orientation=squarish",
    caption: "مونوغرام مناسبة خاصة",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Close%20up%20of%20navy%20blue%20thread%20English%20name%20embroidery%20on%20cream%20leather%20bag%2C%20macro%20quiet%20luxury%20craft%20photography%2C%20warm%20background%2C%20soft%20light%2C%20high%20detail&width=800&height=800&seq=workA8&orientation=squarish",
    caption: "اسم إنجليزي بخيط كحلي",
  },
];

export const customFaq = [
  {
    q: "هل يمكنني تطريز أكثر من كلمة أو جملة؟",
    a: "نعم، يمكنك تطريز اسم أو حروفك الأولى أو عبارة قصيرة. الحد الأقصى 12 حرفًا، وللمساحات الأكبر تواصل معنا عبر واتساب.",
  },
  {
    q: "كم يستغرق تنفيذ الطلب المطرز؟",
    a: "يتم تجهيز القطعة المطرزة يدويًا خلال 3 إلى 5 أيام عمل، ثم نشحنها إليك داخل المملكة.",
  },
  {
    q: "هل التطريز يشمل اللون والخط؟",
    a: "نعم، تختار لون الخيط ونمط الخط بنفسك، وبعض الأنماط مثل الخط الإنجليزي لها رسوم إضافية بسيطة.",
  },
  {
    q: "هل يمكن إرجاع القطعة المطرزة؟",
    a: "بما أن القطعة مخصصة باسمك، لا يمكن إرجاعها إلا في حال وجود عيب في التطريز أو القطعة نفسها.",
  },
];