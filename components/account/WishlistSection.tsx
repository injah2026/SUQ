import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/home/Reveal";
import AccountEmpty from "./AccountEmpty";
import { wishlistProducts } from "@/lib/accountData";

export default function WishlistSection() {
  if (wishlistProducts.length === 0) {
    return (
      <AccountEmpty
        icon="ri-heart-3-line"
        title="مفضلتك فارغة"
        note="اضغط على أيقونة القلب في أي منتج ليظهر هنا، وتقدر ترجع له بسهولة."
        ctaLabel="ابدأ التسوق"
        ctaHref="/shop"
      />
    );
  }

  return (
    <div data-product-shop className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
      {wishlistProducts.map((p, i) => (
        <Reveal key={p.name} delay={i * 60} className="h-full">
          <ProductCard product={p} />
        </Reveal>
      ))}
    </div>
  );
}