import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/product/ProductCard";
import CollectionHero from "./CollectionHero";
import CollectionStory from "./CollectionStory";
import CraftDetails from "./CraftDetails";
import CollectionBundles from "./CollectionBundles";
import { collectionConfigs } from "@/lib/collectionData";
import { shopProducts } from "@/lib/shopData";

export default function CollectionView({ slug }: { slug: string }) {
  const cfg = collectionConfigs[slug];
  if (!cfg) return null;

  const products = cfg.productNames
    .map((n) => shopProducts.find((p) => p.name === n))
    .filter((p): p is (typeof shopProducts)[number] => Boolean(p));

  return (
    <main className="w-full pb-24 md:pb-0">
      <CollectionHero title={cfg.title} subtext={cfg.heroSubtext} image={cfg.heroImage} />

      <CollectionStory
        title={cfg.story.title}
        paragraphs={cfg.story.paragraphs}
        image={cfg.story.image}
      />

      <CraftDetails items={cfg.craft} />

      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>تسوّق المجموعة</SectionLabel>
              <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
                منتجات {cfg.title}
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

        <div data-product-shop className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 items-stretch">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 40} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CollectionBundles bundles={cfg.bundles} />
    </main>
  );
}