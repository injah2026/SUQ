import { nationalDay, nationalDayProducts } from "@/lib/homeData";
import NationalDayBanner from "./NationalDayBanner";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "./Reveal";
import styles from "./nationalDay.module.css";

export default function NationalDaySection() {
  return (
    <section className="surface-dark relative w-full bg-[#0B3D2E] overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${styles.pattern}`}></div>
      <div className={`absolute inset-0 pointer-events-none ${styles.glow}`}></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C2A06B]/60 to-transparent"></div>

      <div className="relative w-full h-[280px] lg:h-[440px] overflow-hidden">
        <img
          src={nationalDay.image}
          alt={nationalDay.heading ? `${nationalDay.heading} - سوق مجاز` : "مجموعة اليوم الوطني من سوق مجاز"}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D2E]/25 via-[#0B3D2E]/55 to-[#0B3D2E]"></div>
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-32 pb-14 lg:pb-20">
        <NationalDayBanner {...nationalDay} />

        <div
          data-product-shop
          className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch"
        >
          {nationalDayProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <ProductCard product={p} badgeVariant="gold" />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C2A06B]/60 to-transparent"></div>
    </section>
  );
}