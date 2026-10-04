export type CraftDetail = { image: string; caption: string };
export type Bundle = { name: string; price: number; image: string; contents: string[] };

export type CollectionConfig = {
  slug: string;
  title: string;
  heroSubtext: string;
  heroImage: string;
  story: { title: string; paragraphs: string[]; image: string };
  craft: CraftDetail[];
  productNames: string[];
  bundles: Bundle[];
};

export const collectionConfigs: Record<string, CollectionConfig> = {
  bisht: {
    slug: "bisht",
    title: "مجموعة البشت",
    heroSubtext: "تطريز ذهبي مستوحى من عباءة الوجاهة السعودية",
    heroImage:
      "https://readdy.ai/api/search-image?query=Cinematic%20full%20width%20editorial%20photograph%20of%20a%20black%20leather%20pouch%20with%20rich%20gold%20Bisht%20embroidery%20and%20a%20tassel%20resting%20on%20a%20warm%20beige%20limestone%20surface%2C%20soft%20golden%20light%20with%20palm%20leaf%20shadows%2C%20generous%20negative%20space%2C%20quiet%20luxury%20Saudi%20heritage%20mood%2C%20warm%20sand%20tones%2C%20elegant%20and%20calm%2C%20ultra%20detailed&width=1920&height=1000&seq=colbishthero&orientation=landscape",
    story: {
      title: "حكاية البشت وخيوطه الذهبية",
      paragraphs: [
        "البشت ليس مجرد عباءة، بل رمز للوجاهة والضيافة في الثقافة السعودية. استلهمنا خيوطه الذهبية المنسوجة بعناية، ونقلناها إلى قطعة تحملها كل يوم بلمسة هادئة.",
        "كل غرزة تُطرَّز يدويًا بصبر على جلد فاخر، لتخرج قطعة تجمع بين الإرث والأناقة المعاصرة، تليق بالمجلس وتفاصيل يومك.",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20Saudi%20artisan%20hand%20embroidering%20gold%20Bisht%20thread%20onto%20black%20leather%20in%20a%20warm%20minimalist%20workshop%2C%20soft%20natural%20light%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20warm%20sand%20tones%2C%20cinematic%2C%20high%20detail&width=1000&height=1200&seq=colbishtstory&orientation=portrait",
    },
    craft: [
      {
        caption: "الخيط الذهبي",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20macro%20close%20up%20of%20fine%20gold%20embroidery%20thread%20stitched%20in%20neat%20vertical%20lines%20on%20black%20leather%2C%20warm%20beige%20blurred%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20light%2C%20ultra%20detailed%20texture&width=800&height=800&seq=colbishtcraft1&orientation=squarish",
      },
      {
        caption: "الخياطة اليدوية",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20hand%20using%20a%20needle%20to%20hand%20stitch%20gold%20thread%20on%20black%20leather%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20natural%20light%2C%20ultra%20detailed&width=800&height=800&seq=colbishtcraft2&orientation=squarish",
      },
      {
        caption: "الشرابة",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20macro%20close%20up%20of%20a%20delicate%20gold%20tassel%20attached%20to%20a%20black%20leather%20pouch%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20light%2C%20ultra%20detailed&width=800&height=800&seq=colbishtcraft3&orientation=squarish",
      },
    ],
    productNames: [
      "حقيبة شموخ البشت ذهبي",
      "حقيبة البشت الملكي",
      "حقيبة فريد البشت",
      "حقيبة نخبة البشت",
      "حقيبة البشت جوال ذهبي",
      "مسبحة البشت الفاخرة",
      "ميدالية البشت الذهبية",
    ],
    bundles: [
      {
        name: "طقم الوجاهة",
        price: 349,
        contents: ["حقيبة البشت الملكي", "مسبحة البشت الفاخرة", "ميدالية البشت الذهبية"],
        image:
          "https://readdy.ai/api/search-image?query=Luxury%20gift%20bundle%20of%20a%20black%20leather%20Bisht%20pouch%20with%20a%20golden%20prayer%20misbaha%20and%20a%20gold%20rimmed%20cup%20in%20a%20cream%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20soft%20light%2C%20high%20detail&width=1000&height=1000&seq=colbishtbundle1&orientation=squarish",
      },
      {
        name: "إطلالة المجلس",
        price: 289,
        contents: ["حقيبة شموخ البشت ذهبي", "كوب القهوة العربية", "علبة مجاز الفاخرة"],
        image:
          "https://readdy.ai/api/search-image?query=Elegant%20gift%20bundle%20of%20a%20black%20leather%20Bisht%20pouch%20and%20a%20gold%20embroidered%20leather%20keychain%20in%20a%20minimalist%20cream%20box%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=colbishtbundle2&orientation=squarish",
      },
      {
        name: "هدية الشيوخ",
        price: 329,
        contents: ["حقيبة فريد البشت", "طقم أكواب السدو", "بطاقة إهداء مذهّبة"],
        image:
          "https://readdy.ai/api/search-image?query=Premium%20gift%20bundle%20of%20a%20black%20leather%20Bisht%20pouch%20two%20gold%20rimmed%20cups%20and%20a%20folded%20Sadu%20textile%20in%20a%20luxury%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=colbishtbundle3&orientation=squarish",
      },
    ],
  },

  sadu: {
    slug: "sadu",
    title: "مجموعة السدو",
    heroSubtext: "أنماط هندسية وألوان الصحراء الدافئة في نسيج معاصر",
    heroImage:
      "https://readdy.ai/api/search-image?query=Cinematic%20full%20width%20editorial%20photograph%20of%20a%20luxury%20Sadu%20inspired%20cream%20and%20black%20pouch%20with%20geometric%20desert%20patterns%20resting%20on%20a%20warm%20beige%20surface%20beside%20a%20folded%20woven%20textile%2C%20soft%20golden%20light%2C%20generous%20negative%20space%2C%20quiet%20luxury%20Saudi%20heritage%20mood%2C%20warm%20sand%20tones%2C%20elegant%2C%20ultra%20detailed&width=1920&height=1000&seq=colsaduhero&orientation=landscape",
    story: {
      title: "حكاية السدو ونبض الصحراء",
      paragraphs: [
        "السدو نسيج يحكي حياة الصحراء بأنماطه الهندسية وألوانه الدافئة. أعدنا تقديمه على الجلد بخيوط ذهبية رفيعة تحافظ على روح الحرفة.",
        "كل قطعة تحمل إيقاع النسيج الأصيل، لكن بلمسة معاصرة هادئة تجعلها رفيقًا أنيقًا لكل يوم.",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Close%20up%20of%20a%20Saudi%20artisan%20hand%20weaving%20a%20Sadu%20geometric%20pattern%20textile%20in%20cream%20black%20and%20deep%20red%20on%20a%20wooden%20loom%20in%20a%20warm%20minimalist%20workshop%2C%20soft%20natural%20light%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20warm%20sand%20tones%2C%20high%20detail&width=1000&height=1200&seq=colsadustory&orientation=portrait",
    },
    craft: [
      {
        caption: "نمط السدو الهندسي",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20macro%20close%20up%20of%20a%20Sadu%20geometric%20pattern%20in%20cream%20black%20and%20deep%20red%20woven%20textile%20threads%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20light%2C%20ultra%20detailed%20texture&width=800&height=800&seq=colsaducraft1&orientation=squarish",
      },
      {
        caption: "النسيج على المِنوال",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20hand%20weaving%20colorful%20Sadu%20threads%20on%20a%20traditional%20wooden%20loom%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20natural%20light%2C%20ultra%20detailed&width=800&height=800&seq=colsaducraft2&orientation=squarish",
      },
      {
        caption: "الشرابة والهدب",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20macro%20close%20up%20of%20a%20small%20woven%20Sadu%20tassel%20and%20fringed%20edge%20on%20cream%20textile%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20light%2C%20ultra%20detailed&width=800&height=800&seq=colsaducraft3&orientation=squarish",
      },
    ],
    productNames: [
      "حقيبة أوروم مجاز",
      "حقيبة السدو الكريمي",
      "حقيبة نسيج السدو",
      "حقيبة صحراء السدو",
      "توت باق السدو",
      "حقيبة جوال السدو",
      "مسبحة السدو الكحلية",
      "طقم أكواب السدو",
    ],
    bundles: [
      {
        name: "نسيج الصحراء",
        price: 319,
        contents: ["حقيبة أوروم مجاز", "مسبحة السدو الكحلية", "ميدالية البشت الذهبية"],
        image:
          "https://readdy.ai/api/search-image?query=Luxury%20gift%20bundle%20of%20a%20cream%20and%20black%20Sadu%20pouch%20with%20a%20navy%20prayer%20misbaha%20and%20a%20gold%20keychain%20in%20a%20cream%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=colsadubundle1&orientation=squarish",
      },
      {
        name: "دفء السدو",
        price: 299,
        contents: ["حقيبة صحراء السدو", "طقم أكواب السدو", "علبة مجاز الفاخرة"],
        image:
          "https://readdy.ai/api/search-image?query=Elegant%20gift%20bundle%20of%20a%20Sadu%20inspired%20cream%20leather%20tote%20bag%20and%20two%20Arabic%20coffee%20cups%20with%20Sadu%20patterns%20in%20a%20luxury%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=colsadubundle2&orientation=squarish",
      },
      {
        name: "إرث الألوان",
        price: 279,
        contents: ["توت باق السدو", "مسبحة السدو الكحلية", "بطاقة إهداء مذهّبة"],
        image:
          "https://readdy.ai/api/search-image?query=Premium%20gift%20bundle%20of%20a%20Sadu%20pouch%20a%20woven%20textile%20and%20a%20gold%20gift%20card%20in%20a%20minimalist%20cream%20box%20on%20a%20warm%20beige%20stone%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=colsadubundle3&orientation=squarish",
      },
    ],
  },

  "national-day": {
    slug: "national-day",
    title: "مجموعة اليوم الوطني",
    heroSubtext: "تصاميم تحتفل بالهوية السعودية بتطريز ذهبي وتفاصيل أخضر",
    heroImage:
      "https://readdy.ai/api/search-image?query=Cinematic%20full%20width%20editorial%20photograph%20of%20a%20black%20and%20deep%20green%20leather%20heritage%20pouch%20with%20gold%20embroidery%20resting%20on%20a%20sunlit%20cream%20beige%20stone%20surface%20with%20soft%20palm%20leaf%20shadows%2C%20airy%20natural%20light%2C%20generous%20negative%20space%2C%20quiet%20luxury%20Saudi%20heritage%20mood%2C%20elegant%2C%20ultra%20detailed&width=1920&height=1000&seq=colndhero&orientation=landscape",
    story: {
      title: "حكاية الانتماء والفخر",
      paragraphs: [
        "في اليوم الوطني نحتفي بهوية نعتز بها. صمّمنا هذه المجموعة بلون أخضر هادئ وخطوط ذهبية تحكي الانتماء بلا مبالغة.",
        "قطع تجمع بين فخامة الحرفة وروح المناسبة، لتهديها أو تقتنيها كذكرى تحمل معنى الفخر.",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Warm%20editorial%20still%20life%20of%20Saudi%20heritage%20items%20a%20green%20leather%20pouch%20golden%20prayer%20beads%20and%20a%20folded%20textile%20arranged%20on%20a%20cream%20beige%20surface%20with%20soft%20sunlight%20and%20delicate%20shadows%2C%20quiet%20luxury%20heritage%20photography%2C%20warm%20tones%2C%20high%20detail&width=1000&height=1200&seq=colndstory&orientation=portrait",
    },
    craft: [
      {
        caption: "التطريز الأخضر والذهبي",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20macro%20close%20up%20of%20deep%20green%20and%20gold%20embroidered%20thread%20stitched%20in%20fine%20lines%20on%20leather%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20light%2C%20ultra%20detailed&width=800&height=800&seq=colndcraft1&orientation=squarish",
      },
      {
        caption: "الخياطة اليدوية",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20hand%20stitching%20gold%20and%20green%20thread%20onto%20black%20leather%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20natural%20light%2C%20ultra%20detailed&width=800&height=800&seq=colndcraft2&orientation=squarish",
      },
      {
        caption: "الشرابة",
        image:
          "https://readdy.ai/api/search-image?query=Extreme%20macro%20close%20up%20of%20a%20small%20gold%20and%20green%20tassel%20attached%20to%20a%20leather%20pouch%2C%20warm%20beige%20background%2C%20quiet%20luxury%20craftsmanship%20photography%2C%20soft%20light%2C%20ultra%20detailed&width=800&height=800&seq=colndcraft3&orientation=squarish",
      },
    ],
    productNames: [
      "توت باق اليوم الوطني",
      "كوب القهوة العربية",
      "طقم أكواب السدو",
      "ميدالية البشت الذهبية",
      "علبة مجاز الفاخرة",
      "مسبحة مجاز الذهبية",
    ],
    bundles: [
      {
        name: "أعلام الوطن",
        price: 249,
        contents: ["توت باق اليوم الوطني", "كوب القهوة العربية", "بطاقة إهداء مذهّبة"],
        image:
          "https://readdy.ai/api/search-image?query=Luxury%20National%20Day%20gift%20bundle%20of%20a%20green%20and%20gold%20leather%20pouch%20golden%20prayer%20beads%20and%20a%20gold%20rimmed%20cup%20in%20a%20cream%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=1000&height=1000&seq=colndbundle1&orientation=squarish",
      },
      {
        name: "فرحة الوطن",
        price: 259,
        contents: ["طقم أكواب السدو", "علبة مجاز الفاخرة", "ميدالية البشت الذهبية"],
        image:
          "https://readdy.ai/api/search-image?query=Elegant%20National%20Day%20gift%20bundle%20of%20two%20Arabic%20coffee%20cups%20with%20green%20and%20gold%20Sadu%20patterns%20and%20a%20green%20leather%20keychain%20in%20a%20luxury%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20high%20detail&width=1000&height=1000&seq=colndbundle2&orientation=squarish",
      },
      {
        name: "هدية اليوم الوطني",
        price: 199,
        contents: ["حقيبة جوال السدو", "مسبحة مجاز الذهبية", "بطاقة إهداء مذهّبة"],
        image:
          "https://readdy.ai/api/search-image?query=Premium%20National%20Day%20gift%20bundle%20of%20a%20small%20green%20leather%20phone%20pouch%20a%20golden%20misbaha%20and%20a%20gold%20gift%20card%20in%20a%20minimalist%20cream%20box%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20high%20detail&width=1000&height=1000&seq=colndbundle3&orientation=squarish",
      },
    ],
  },
};