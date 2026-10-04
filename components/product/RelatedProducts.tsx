import { relatedProducts } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/product/ProductCard";

export default function RelatedProducts() {
  return (
    <section className="w-full">
      <div className="text-center mb-10">
        <SectionLabel align="center">اختيارات مجاز</SectionLabel>
        <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
          قد يعجبك أيضاً
        </h2>
      </div>

      <div data-product-shop className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
        {relatedProducts.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}