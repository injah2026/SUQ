import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/product/ProductCard";
import { relatedProducts } from "@/lib/data";

export default function RecommendedProducts() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="mb-10">
          <SectionLabel>اختيارات مجاز</SectionLabel>
          <h2 className="mt-0 font-heading text-[24px] lg:text-[32px] font-semibold text-[#2B211B]">
            قد يعجبك أيضًا
          </h2>
        </div>
      </Reveal>

      <div data-product-shop className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
        {relatedProducts.map((p, i) => (
          <Reveal key={p.name} delay={i * 60} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}