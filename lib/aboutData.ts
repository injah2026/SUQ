export const aboutHero = {
  label: "حكاية مجاز",
  title: "من خيطٍ ذهبي.. إلى حرفة تُحمل كل يوم",
  text: "بدأت مجاز من احترام عميق لحرفة البشت والسدو، ومن رغبة في أن يبقى هذا الإرث حاضرًا في تفاصيل يومنا بلغة معاصرة هادئة.",
  image:
    "https://readdy.ai/api/search-image?query=Cinematic%20close%20up%20photograph%20of%20experienced%20Saudi%20artisan%20hands%20delicately%20embroidering%20fine%20gold%20thread%20onto%20black%20leather%20in%20a%20warm%20minimalist%20heritage%20workshop%2C%20soft%20natural%20window%20light%2C%20sand%20beige%20and%20warm%20neutral%20tones%2C%20generous%20negative%20space%20on%20the%20left%20side%2C%20quiet%20luxury%20craftsmanship%20mood%2C%20ultra%20detailed&width=1920&height=1080&seq=abouthero01&orientation=landscape",
};

export type StoryStep = {
  key: string;
  label: string;
  title: string;
  text: string;
  image: string;
};

export const storySteps: StoryStep[] = [
  {
    key: "start",
    label: "البداية",
    title: "شغفٌ ورثناه عن المجلس",
    text: "بدأت الحكاية في بيتٍ سعودي دافئ، حيث كان البشت يُعتنى به كقطعة فخر. من تلك التفاصيل الصغيرة وُلدت فكرة أن نصنع قطعًا تحمل نفس الوقار لكن بحياة يومية.",
    image:
      "https://readdy.ai/api/search-image?query=Warm%20atmospheric%20photograph%20of%20a%20traditional%20Saudi%20majlis%20corner%20with%20a%20folded%20black%20Bisht%20and%20golden%20embroidery%20threads%20on%20a%20low%20wooden%20table%2C%20soft%20daylight%2C%20beige%20and%20sand%20tones%2C%20quiet%20heritage%20mood%2C%20high%20detail&width=1000&height=1000&seq=aboutstory01&orientation=squarish",
  },
  {
    key: "idea",
    label: "الفكرة",
    title: "إرثٌ بلغة عصرية",
    text: "أردنا أن نأخذ رمز البشت والسدو ونعيد تقديمه بتصميم هادئ ومساحات عملية. أنماط مستوحاة من التراث، وألوان صحراء دافئة، وخطوط ذهبية لا تصرخ بل تُلفت النظر.",
    image:
      "https://readdy.ai/api/search-image?query=Minimalist%20design%20mood%20photograph%20of%20leather%20swatches%20sand%20and%20black%20with%20delicate%20gold%20Sadu%20geometric%20patterns%20on%20a%20warm%20beige%20table%20beside%20a%20pencil%20sketch%2C%20quiet%20luxury%20design%20studio%2C%20soft%20light%2C%20high%20detail&width=1000&height=1000&seq=aboutstory02&orientation=squarish",
  },
  {
    key: "craft",
    label: "الحرفة",
    title: "خيوطٌ بأيدي صُنّاعنا",
    text: "كل قطعة تمرّ بأيدي حرفيين سعوديين يطرّزون بصبر ودقّة. الخياطة اليدوية والتطريز بالخيوط الذهبية يمنحان كل قطعة طابعًا لا يتكرر وشخصية خاصة.",
    image:
      "https://readdy.ai/api/search-image?query=Close%20up%20photograph%20of%20an%20artisan%20hand%20pulling%20fine%20gold%20embroidery%20thread%20through%20black%20leather%20with%20a%20needle%20on%20a%20warm%20beige%20workbench%2C%20warm%20workshop%20light%2C%20sand%20tones%2C%20quiet%20luxury%20craftsmanship%2C%20high%20detail&width=1000&height=1000&seq=aboutstory03&orientation=squarish",
  },
  {
    key: "today",
    label: "اليوم",
    title: "مجاز.. إرثٌ ينتقل بين الأيدي",
    text: "اليوم تصل قطع مجاز إلى بيوت ومناسبات وشركات في كل أنحاء المملكة. نعتبرها إرثًا ينتقل بين الأيدي، ومسؤولية نعتزّ بحملها نحو المستقبل.",
    image:
      "https://readdy.ai/api/search-image?query=Elegant%20lifestyle%20photograph%20of%20a%20black%20leather%20luxury%20Bisht%20pouch%20with%20gold%20embroidery%20resting%20on%20a%20warm%20beige%20linen%20surface%20beside%20a%20gift%20box%2C%20soft%20natural%20light%2C%20quiet%20contemporary%20Saudi%20heritage%20mood%2C%20high%20detail&width=1000&height=1000&seq=aboutstory04&orientation=squarish",
  },
];

export type Value = {
  icon: string;
  title: string;
  text: string;
};

export const values: Value[] = [
  {
    icon: "ri-ancient-gate-line",
    title: "أصالة",
    text: "نستلهم كل تصميم من تفاصيل تراثنا السعودي، ونحافظ على رمزية البشت والسدو بصدق.",
  },
  {
    icon: "ri-hand-heart-line",
    title: "إتقان",
    text: "لا نتنازل عن الجودة. جلد مختار، خياطة يدوية، وتطريز تُراجَع كل غرزة فيه بعناية.",
  },
  {
    icon: "ri-vip-diamond-line",
    title: "فخامة هادئة",
    text: "أناقة لا تصرخ. تفاصيل فاخرة بإحساس متوازن يليق بذوق رفيع وزمن معاصر.",
  },
];

export type Artisan = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export const artisans: Artisan[] = [
  {
    name: "أم محمد",
    role: "مطرّزة تطريز البشت",
    quote: "أعمل الخيط الذهبي كأنني أخطّ حكاية. كل غرزة تحمل صبر عشرين سنة.",
    image:
      "https://readdy.ai/api/search-image?query=Portrait%20photograph%20of%20an%20older%20Saudi%20woman%20artisan%20wearing%20a%20warm%20beige%20thobe%20embroidering%20gold%20thread%20with%20a%20needle%2C%20soft%20natural%20light%2C%20warm%20neutral%20background%2C%20quiet%20dignified%20heritage%20mood%2C%20high%20detail&width=800&height=1000&seq=aboutart01&orientation=portrait",
  },
  {
    name: "أبو سعود",
    role: "معلّم الجلود والخياطة",
    quote: "الجلد يشبه الناس، يحتاج صبرًا حتى يمنحك أفضل ما عنده.",
    image:
      "https://readdy.ai/api/search-image?query=Portrait%20photograph%20of%20an%20older%20Saudi%20male%20craftsman%20in%20a%20warm%20beige%20thobe%20working%20on%20a%20leather%20pouch%20at%20a%20wooden%20workbench%2C%20soft%20natural%20light%2C%20warm%20sand%20tones%2C%20quiet%20dignified%20heritage%20mood%2C%20high%20detail&width=800&height=1000&seq=aboutart02&orientation=portrait",
  },
  {
    name: "نورة",
    role: "صانعة السدو والتشطيب",
    quote: "كل نمط من أنماط السدو له معنى. أنا فقط أحاول أن أنقله بوفاء.",
    image:
      "https://readdy.ai/api/search-image?query=Portrait%20photograph%20of%20a%20young%20Saudi%20woman%20artisan%20weaving%20a%20Sadu%20textile%20in%20cream%20and%20deep%20red%20on%20a%20traditional%20loom%2C%20soft%20natural%20light%2C%20warm%20neutral%20background%2C%20quiet%20heritage%20mood%2C%20high%20detail&width=800&height=1000&seq=aboutart03&orientation=portrait",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 12000, suffix: "+", label: "قطعة طُرّزت يدويًا" },
  { value: 45, suffix: "+", label: "صانع وصانعة في مجاز" },
  { value: 98, suffix: "%", label: "رضا العملاء" },
  { value: 6, suffix: "", label: "سنوات من الحرفة" },
];

export const aboutCta = {
  label: "من الحرفة إلى بيتك",
  title: "اكتشف مجموعاتنا",
  text: "تصفّح مجموعات مجاز واختر القطعة التي تحمل حكايتك، مصنوعة بعناية جاهزة للإهداء.",
  image:
    "https://readdy.ai/api/search-image?query=Warm%20cinematic%20flat%20lay%20of%20luxury%20black%20leather%20pouches%20with%20golden%20Bisht%20embroidery%20and%20Sadu%20patterned%20textiles%20arranged%20on%20a%20beige%20linen%20surface%20with%20dried%20pampas%20and%20soft%20light%2C%20quiet%20luxury%20heritage%20mood%2C%20sand%20tones%2C%20high%20detail&width=1920&height=900&seq=aboutcta01&orientation=landscape",
};