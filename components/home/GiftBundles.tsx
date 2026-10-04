import { giftBundles } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import GiftBundleCard from "./GiftBundleCard";

export default function GiftBundles() {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="text-center mb-10">
            <SectionLabel align="center">هدايا جاهزة</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
              بكجات الهدايا
            </h2>
            <p className="mt-3 text-[14px] lg:text-[15px] text-[#8A7B6E] max-w-[560px] mx-auto">
              بكجات مرتبة بعناية، جاهزة للإهداء بتغليف فاخر وبطاقة تحمل كلمتك.
            </p>
          </div>
        </Reveal>

        <div data-product-shop className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-stretch">
          {giftBundles.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} className="h-full">
              <GiftBundleCard bundle={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}