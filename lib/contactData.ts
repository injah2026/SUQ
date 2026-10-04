export const contactHero = {
  label: "نحن هنا من أجلك",
  title: "تواصل معنا",
  text: "فريق مجاز جاهز لمساعدتك في الطلبات، الهدايا المخصصة، وطلبات الشركات. اختر الطريقة الأنسب لك ونرد عليك بأسرع وقت.",
  image:
    "https://readdy.ai/api/search-image?query=Cinematic%20wide%20photograph%20of%20a%20warm%20minimalist%20Saudi%20brand%20studio%20reception%20with%20a%20black%20leather%20Bisht%20pouch%20and%20gold%20embroidered%20details%20arranged%20on%20a%20beige%20stone%20counter%20beside%20Arabic%20coffee%20cups%2C%20soft%20natural%20light%2C%20generous%20negative%20space%20on%20the%20left%2C%20quiet%20luxury%20mood%2C%20warm%20sand%20tones%2C%20high%20detail&width=1920&height=900&seq=contacthero01&orientation=landscape",
};

export type ContactCard = {
  icon: string;
  title: string;
  lines: string[];
  action: { label: string; href: string; icon: string };
};

export const contactCards: ContactCard[] = [
  {
    icon: "ri-whatsapp-fill",
    title: "واتساب",
    lines: ["الرد خلال دقائق", "للاستفسار السريع عن الطلبات"],
    action: { label: "ابدأ محادثة", href: "https://wa.me/966500000000", icon: "ri-arrow-left-line" },
  },
  {
    icon: "ri-phone-line",
    title: "اتصال هاتفي",
    lines: ["يوميًا من 9 ص حتى 11 م", "+966 50 000 0000"],
    action: { label: "اتصل بنا", href: "tel:+966500000000", icon: "ri-arrow-left-line" },
  },
  {
    icon: "ri-mail-line",
    title: "البريد الإلكتروني",
    lines: ["info@suqmajaz.com", "للطلبات وعروض الشركات"],
    action: { label: "أرسل بريدًا", href: "mailto:info@suqmajaz.com", icon: "ri-arrow-left-line" },
  },
  {
    icon: "ri-time-line",
    title: "ساعات العمل",
    lines: ["السبت – الخميس: 9:00 ص – 11:00 م", "الجمعة: 4:00 م – 11:00 م"],
    action: { label: "زيارة المعرض", href: "#contact-map", icon: "ri-map-pin-line" },
  },
];

export const contactSocials = [
  { icon: "ri-instagram-line", label: "انستغرام", href: "https://instagram.com/suqmajaz" },
  { icon: "ri-twitter-x-line", label: "إكس", href: "https://x.com/suqmajaz" },
  { icon: "ri-snapchat-line", label: "سناب شات", href: "https://snapchat.com/add/suqmajaz" },
  { icon: "ri-tiktok-line", label: "تيك توك", href: "https://tiktok.com/@suqmajaz" },
  { icon: "ri-whatsapp-line", label: "واتساب", href: "https://wa.me/966500000000" },
];

export const contactAddress = [
  "معرض مجاز",
  "طريق الملك فهد، حي العليا",
  "الرياض 12211، المملكة العربية السعودية",
];

export const contactMapEmbed =
  "https://www.google.com/maps?q=King+Fahd+Road+Al+Olaya+Riyadh+Saudi+Arabia&output=embed";