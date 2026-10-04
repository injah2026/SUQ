"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./hero.module.css";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartContext";
import glass from "@/components/ui/glass.module.css";
import cartStyles from "@/components/cart/cart.module.css";

const SLIDE_MS = 6000;

const slides = [
  {
    label: "مجموعة البشت",
    heading: "فخامة البشت.. في تفاصيل يومك",
    text: "تطريز ذهبي مستوحى من خيوط البشت السعودي على جلد فاخر، ليكون رفيقك بلمسة تراثية هادئة.",
    cta: "تسوّق المجموعة",
    href: "/collection/bisht",
    product: {
      name: "حقيبة البشت ذهبي",
      price: 150,
      thumb:
        "https://readdy.ai/api/search-image?query=Luxury%20black%20leather%20Saudi%20heritage%20pouch%20bag%20with%20fine%20gold%20Bisht%20embroidery%20and%20a%20tassel%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20beige%20background%2C%20soft%20studio%20shadow%2C%20minimal%20high%20detail&width=200&height=200&seq=suqmajazthumb12&orientation=squarish",
    },
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20wide%20lifestyle%20photograph%20of%20a%20single%20large%20black%20leather%20Saudi%20heritage%20pouch%20with%20luxurious%20gold%20Bisht%20embroidery%20centered%20in%20the%20left%20half%20on%20a%20warm%20beige%20limestone%20surface%2C%20the%20right%20side%20is%20empty%20smooth%20blurred%20sand-toned%20background%2C%20soft%20golden%20afternoon%20light%20with%20palm%20leaf%20shadows%2C%20quiet%20luxury%20Saudi%20heritage%20mood%2C%20elegant%20and%20calm%2C%20ultra%20detailed&width=1600&height=900&seq=suqmajazhero1&orientation=landscape",
  },
  {
    label: "مجموعة السدو",
    heading: "ألوان السدو.. حكاية الصحراء",
    text: "أنماط هندسية من نسيج السدو بألوان الصحراء الدافئة، تنسج التراث بلمسة معاصرة.",
    cta: "اكتشف السدو",
    href: "/collection/sadu",
    product: {
      name: "حقيبة أوروم مجاز",
      price: 150,
      thumb:
        "https://readdy.ai/api/search-image?query=Sophisticated%20cream%20and%20black%20leather%20luxury%20pouch%20bag%20with%20delicate%20gold%20geometric%20Sadu%20pattern%20accents%20on%20a%20clean%20beige%20stone%20surface%2C%20quiet%20luxury%20product%20photography%2C%20warm%20sand%20background%2C%20soft%20studio%20shadow%2C%20high%20detail&width=200&height=200&seq=suqmajazthumb13&orientation=squarish",
    },
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20wide%20lifestyle%20photograph%20of%20a%20large%20luxury%20Sadu%20patterned%20tote%20bag%20in%20cream%20black%20and%20deep%20red%20geometric%20desert%20motifs%20centered%20in%20the%20left%20half%20on%20golden%20desert%20sand%2C%20right%20side%20is%20empty%20soft%20blurred%20dune%20background%2C%20warm%20low%20sunset%20light%2C%20quiet%20luxury%20Saudi%20heritage%20mood%2C%20elegant%20and%20calm%2C%20ultra%20detailed&width=1600&height=900&seq=suqmajazhero2&orientation=landscape",
  },
  {
    label: "هدايا مجاز",
    heading: "هدية تليق بمقامه",
    text: "بكجات فاخرة تجمع الحقيبة والمسبحة وكوب القهوة العربية في تغليف يليق بالمناسبات.",
    cta: "تسوّق الهدايا",
    href: "/gifts",
    product: {
      name: "بكج الضيافة الكامل",
      price: 320,
      thumb:
        "https://readdy.ai/api/search-image?query=Luxury%20gift%20box%20containing%20a%20black%20leather%20Bisht%20pouch%20a%20beaded%20prayer%20misbaha%20and%20a%20gold%20rimmed%20cup%20nested%20in%20cream%20tissue%20paper%20with%20a%20gold%20ribbon%20on%20a%20warm%20beige%20surface%2C%20quiet%20luxury%20heritage%20photography%2C%20sand%20tones%2C%20high%20detail&width=200&height=200&seq=suqmajazthumb31&orientation=squarish",
    },
    image:
      "https://readdy.ai/api/search-image?query=Cinematic%20wide%20lifestyle%20photograph%20of%20an%20open%20ivory%20gift%20box%20with%20a%20gold%20ribbon%20holding%20a%20black%20leather%20pouch%20golden%20prayer%20beads%20and%20an%20Arabic%20coffee%20cup%20centered%20in%20the%20left%20half%20on%20a%20warm%20taupe%20stone%20surface%2C%20right%20side%20is%20empty%20smooth%20blurred%20neutral%20background%2C%20soft%20warm%20light%2C%20quiet%20luxury%20heritage%20mood%2C%20elegant%20and%20calm%2C%20ultra%20detailed&width=1600&height=900&seq=suqmajazhero3&orientation=landscape",
  },
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setAdded(false);
  }, [index]);

  const goTo = (i: number) => setIndex(i);
  const slide = slides[index];
  const numbered = String(index + 1).padStart(2, "0");

  return (
    <section className="surface-dark relative w-full h-[70vh] min-h-[520px] lg:h-[85vh] lg:min-h-[640px] overflow-hidden bg-[#1A120C]">
      {slides.map((s, i) => (
        <div
          key={s.heading}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={s.label ? `${s.label} - سوق مجاز` : "مجموعة من سوق مجاز"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`w-full h-full object-cover object-left ${
              i === index ? styles.slideZoom : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-l from-[#1A120C]/92 via-[#1A120C]/45 to-transparent"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div key={index} className={`w-full max-w-2xl ${styles.textFade}`}>
          <SectionLabel tone="dark">{slide.label}</SectionLabel>
          <h1 className="mt-0 text-[clamp(30px,5vw,48px)] leading-[1.12] font-semibold text-[#FFFDF9]">
            {slide.heading}
          </h1>
          <p className="mt-5 text-[16px] leading-8 text-[#FFFDF9]/90 max-w-xl">
            {slide.text}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-4">
            <Button href={slide.href} icon="ri-arrow-left-line" className="w-full sm:w-auto">
              {slide.cta}
            </Button>
            <Link
              href="/shop"
              className="w-full sm:w-auto h-[48px] px-7 rounded-full text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors duration-300 border-[1.5px] border-[#FFFDF9] text-[#FFFDF9] hover:bg-[#FFFDF9] hover:text-[#2B211B]"
            >
              <span className="w-5 h-5 flex items-center justify-center text-[18px]">
                <i className="ri-compass-3-line"></i>
              </span>
              اكتشف المزيد
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-2 text-[15px] text-[#FBF8F2]/90">
            <span className="w-4 h-4 flex items-center justify-center text-[15px] text-[#E3C78A]">
              <i className="ri-star-fill"></i>
            </span>
            4.9 من أكثر من 2000 عميل سعيد
          </div>
        </div>
      </div>

      <div
        key={`card-${index}`}
        className={`hidden lg:flex absolute bottom-24 left-16 z-10 w-[300px] items-center gap-3 rounded-2xl p-3 ${glass.glass} ${styles.textFade}`}
      >
        <img
          src={slide.product.thumb}
          alt={slide.product.name ? `${slide.product.name} - سوق مجاز` : "منتج من سوق مجاز"}
          loading="lazy"
          decoding="async"
          className="w-14 h-14 rounded-xl object-cover"
        />
        <div className="flex-1 text-right">
          <div className="text-[14px] font-semibold text-[#2B211B] leading-6">
            {slide.product.name}
          </div>
          <div className="text-[15px] font-bold text-[#8A6A4F]">{slide.product.price} ر.س</div>
        </div>
        <button
          type="button"
          onClick={() => {
            addItem({
              id: slide.product.name,
              name: slide.product.name,
              price: slide.product.price,
              image: slide.product.thumb,
            });
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className={`h-9 px-3.5 rounded-full ${added ? "bg-[#3F7A4A] text-[#FFFDF9]" : "bg-[#C2A06B] text-[#1A120C] hover:bg-[#D9BC86]"} text-[12px] font-bold whitespace-nowrap cursor-pointer transition-colors inline-flex items-center gap-1.5 ${added ? cartStyles.pop : ""}`}
        >
          {added && (
            <span className="w-3.5 h-3.5 flex items-center justify-center text-[13px]">
              <i className={`ri-check-line ${cartStyles.check}`}></i>
            </span>
          )}
          {added ? "تمت الإضافة" : "أضف للسلة"}
        </button>
      </div>

      <div className="absolute bottom-8 lg:bottom-12 inset-x-0 z-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6">
          <span className="text-[13px] tracking-[0.2em] font-semibold text-[#FBF8F2]/80 whitespace-nowrap">
            {numbered} <span className="text-[#FBF8F2]/40">/ 03</span>
          </span>
          <div className="flex gap-3 w-full max-w-md">
            {slides.map((s, i) => (
              <button
                key={s.heading}
                onClick={() => goTo(i)}
                aria-label={s.label}
                className="relative h-[3px] flex-1 bg-white/25 overflow-hidden rounded-full cursor-pointer"
              >
                {i === index && (
                  <span
                    className={`absolute top-0 h-full bg-[#C2A06B] rounded-full ${styles.barFill}`}
                    style={{ insetInlineStart: 0 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}