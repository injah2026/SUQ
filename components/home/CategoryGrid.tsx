import Link from "next/link";
import { categories } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CategoryGrid() {
  const hrefFor = (name: string) => {
    if (name === "البكجات والهدايا") return "/gifts";
    if (name === "حقائب البشت") return "/collection/bisht";
    if (name === "حقائب السدو") return "/collection/sadu";
    return "/shop";
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <Reveal>
        <div className="text-center mb-10">
          <SectionLabel align="center">تصفّح مجاز</SectionLabel>
          <h2 className="mt-0 font-heading text-[clamp(24px,3.4vw,36px)] font-semibold text-[#2B211B]">
            تسوّق حسب الفئة
          </h2>
        </div>
      </Reveal>

      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-5 overflow-x-auto no-scrollbar md:overflow-visible -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
        {categories.map((c, i) => (
          <Reveal key={c.name} delay={i * 60} className="shrink-0 w-40 sm:w-52 md:w-auto">
            <Link
              href={hrefFor(c.name)}
              className="group block relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#FFFDF9] border border-[#E8DFD3] cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.name ? `${c.name} من سوق مجاز` : "فئة من سوق مجاز"}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B]/55 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between">
                <span className="text-[16px] lg:text-[17px] font-semibold text-[#FFFDF9]">
                  {c.name}
                </span>
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFFDF9]/90 text-[#8A6A4F] text-lg transition-transform duration-300 group-hover:-translate-x-1">
                  <i className="ri-arrow-left-line"></i>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}