import Link from "next/link";
import { bestSellers } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";

export default function BestSellers() {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>اختيارات مجاز</SectionLabel>
              <h2 className="mt-0 font-heading text-[clamp(24px,3.4vw,36px)] font-semibold text-[#2B211B]">
                الأكثر مبيعًا
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-2 text-[15px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors whitespace-nowrap cursor-pointer"
            >
              عرض الكل
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </span>
            </Link>
          </div>
        </Reveal>

        <div data-product-shop className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
          {bestSellers.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden mt-8 flex justify-center">
          <Button href="/shop" variant="secondary" icon="ri-arrow-left-line">
            عرض الكل
          </Button>
        </div>
      </div>
    </section>
  );
}