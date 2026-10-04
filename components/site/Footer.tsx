import Link from "next/link";
import NewsletterForm from "@/components/forms/NewsletterForm";
import PaymentLogos from "@/components/product/PaymentLogos";
import Logo from "@/components/site/Logo";
import FooterTrustStrip from "@/components/site/FooterTrustStrip";
import FooterCollapsible from "@/components/site/FooterCollapsible";

const socials = [
  { icon: "ri-instagram-line", label: "انستغرام", href: "https://instagram.com/suqmajaz" },
  { icon: "ri-twitter-x-line", label: "إكس", href: "https://x.com/suqmajaz" },
  { icon: "ri-snapchat-line", label: "سناب شات", href: "https://snapchat.com/add/suqmajaz" },
  { icon: "ri-tiktok-line", label: "تيك توك", href: "https://tiktok.com/@suqmajaz" },
  { icon: "ri-whatsapp-line", label: "واتساب", href: "https://wa.me/966500000000" },
];

const shopLinks = [
  { label: "مجموعة البشت", href: "/collection/bisht" },
  { label: "حقائب السدو", href: "/collection/sadu" },
  { label: "المسابح", href: "/shop" },
  { label: "الأكواب", href: "/shop" },
  { label: "الإكسسوارات", href: "/shop" },
  { label: "اليوم الوطني", href: "/collection/national-day" },
];

const giftLinks = [
  { label: "بكجات جاهزة", href: "/gifts?filter=ready" },
  { label: "صمّم باسمك", href: "/custom" },
  { label: "هدايا الشركات", href: "/corporate" },
  { label: "بطاقات الإهداء", href: "/shop" },
];

const serviceLinks = [
  { label: "قصتنا", href: "/about" },
  { label: "تتبع طلبك", href: "/track-order" },
  { label: "الشحن والتوصيل", href: "/shipping" },
  { label: "الاستبدال والإرجاع", href: "/returns" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "تواصل معنا", href: "/contact" },
];

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            href={l.href}
            className="inline-block text-[15px] text-[#FFFDF9]/90 hover:text-[#FFFDF9] transition-all duration-300 hover:-translate-x-1"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <>
      <FooterTrustStrip />

      <footer className="surface-dark w-full bg-[#2B211B]">
        <div className="w-full border-b border-[#C2A06B]/20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
            <div className="text-right lg:max-w-[520px]">
              <h3 className="font-heading text-[26px] lg:text-[30px] font-semibold text-[#FFFDF9]">
                انضم لعائلة مجاز
              </h3>
              <p className="mt-2.5 text-[15px] leading-7 text-[#FFFDF9]/90">
                احصل على خصم 10% على أول طلب وكن أول من يعرف عن المجموعات الجديدة
              </p>
            </div>
            <div className="w-full lg:w-[440px]">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-0 lg:gap-y-10">
            <div className="lg:col-span-3 pb-8 lg:pb-0">
              <Link href="/" className="group inline-flex cursor-pointer">
                <Logo surface="#2B211B" tone="dark" height={56} />
              </Link>
              <p className="mt-6 text-[14.5px] leading-7 text-[#FFFDF9]/90 max-w-xs">
                فخامة البشت والسدو في تفاصيل يومك.
              </p>
              <p className="mt-2 text-[14.5px] leading-7 text-[#FFFDF9]/90 max-w-xs">
                قطع وهدايا مستوحاة من التراث السعودي بصناعة يدوية فاخرة.
              </p>
              <div className="mt-7 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C2A06B]/40 text-[19px] text-[#C2A06B] hover:bg-[#C2A06B] hover:text-[#2B211B] hover:border-[#C2A06B] transition-colors duration-300 cursor-pointer"
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <FooterCollapsible title="تسوّق" className="lg:col-span-2">
              <LinkList links={shopLinks} />
            </FooterCollapsible>

            <FooterCollapsible title="الهدايا والخدمات" className="lg:col-span-2">
              <LinkList links={giftLinks} />
            </FooterCollapsible>

            <FooterCollapsible title="خدمة العملاء" className="lg:col-span-2">
              <LinkList links={serviceLinks} />
            </FooterCollapsible>

            <FooterCollapsible title="تواصل معنا" className="lg:col-span-3">
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 h-11 px-5 rounded-full bg-[#25D366] text-white text-[14.5px] font-medium whitespace-nowrap cursor-pointer shadow-[0_14px_28px_-14px_rgba(37,211,102,.95)] transition-colors duration-300 hover:bg-[#1EBE5A] w-fit"
                >
                  <span className="w-5 h-5 flex items-center justify-center text-[20px]">
                    <i className="ri-whatsapp-fill"></i>
                  </span>
                  تواصل عبر واتساب
                </a>
                <a href="tel:+966500000000" className="flex items-center gap-3 text-[15px] text-[#FFFDF9]/90 hover:text-[#FFFDF9] transition-colors">
                  <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#C2A06B]">
                    <i className="ri-phone-line"></i>
                  </span>
                  +966 50 000 0000
                </a>
                <a href="mailto:info@suqmajaz.com" className="flex items-center gap-3 text-[15px] text-[#FFFDF9]/90 hover:text-[#FFFDF9] transition-colors">
                  <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#C2A06B]">
                    <i className="ri-mail-line"></i>
                  </span>
                  info@suqmajaz.com
                </a>
                <span className="flex items-center gap-3 text-[15px] text-[#FFFDF9]/90">
                  <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#C2A06B]">
                    <i className="ri-time-line"></i>
                  </span>
                  يوميًا 9 ص – 11 م
                </span>
              </div>
            </FooterCollapsible>
          </div>
        </div>

        <div className="border-t border-[#C2A06B]/20">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-5">
            <div className="order-2 lg:order-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1.5 text-[12px] text-[#F8F4EE]/55 lg:flex-1 lg:min-w-0">
              <span>© 2026 سوق مجاز. جميع الحقوق محفوظة</span>
              <span className="text-[#C2A06B]/40">|</span>
              <span>الرقم الضريبي 300000000000003</span>
              <span className="h-6 px-2.5 flex items-center rounded-lg border border-[#C2A06B]/30 text-[#C2A06B]">
                موثّق
              </span>
            </div>

            <div className="order-3 lg:order-2 shrink-0 flex items-center gap-3 text-[12.5px] text-[#F8F4EE]/60 whitespace-nowrap">
              <Link href="/privacy" className="hover:text-[#F8F4EE] transition-colors">سياسة الخصوصية</Link>
              <span className="text-[#C2A06B]/40">•</span>
              <Link href="/terms" className="hover:text-[#F8F4EE] transition-colors">الشروط والأحكام</Link>
            </div>

            <div className="order-1 lg:order-3 shrink-0 w-full lg:w-auto">
              <PaymentLogos singleRow />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}