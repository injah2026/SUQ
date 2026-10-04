import Link from "next/link";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { jalabiyaProducts } from "@/lib/shopData";

export default function JalabiyaSection() {
  return (
    <section className="w-full bg-[#F8F4EE]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>مجموعة جديدة</SectionLabel>
              <h2 className="mt-0 font-heading text-[clamp(24px,3.4vw,36px)] font-semibold text-[#2B211B]">
                الجلابيات السعودية
              </h2>
              <p className="mt-3 text-[14px] lg:text-[15px] text-[#8A7B6E] max-w-[560px]">
                جلابيات فاخرة بتطريز ذهبي مستوحى من البشت والسدو
              </p>
            </div>
            <Link
              href="/shop?category=%D8%A7%D9%84%D8%AC%D9%84%D8%A7%D8%A8%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9"
              className="hidden sm:flex items-center gap-2 text-[15px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors whitespace-nowrap cursor-pointer"
            >
              عرض الكل
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-left-line"></i>
              </span>
            </Link>
          </div>
        </Reveal>

        <div
          data-product-shop
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch"
        >
          {jalabiyaProducts.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <div className="sm:hidden mt-8 flex justify-center">
          <Button
            href="/shop?category=%D8%A7%D9%84%D8%AC%D9%84%D8%A7%D8%A8%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9"
            variant="secondary"
            icon="ri-arrow-left-line"
          >
            عرض الكل
          </Button>
        </div>
      </div>
    </section>
  );
}