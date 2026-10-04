import { instagram } from "@/lib/homeData";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function InstagramGallery() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <Reveal>
        <div className="text-center mb-10">
          <SectionLabel align="center">مجتمع مجاز</SectionLabel>
          <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
            تابعنا على إنستغرام
          </h2>
          <p className="mt-3 text-[15px] text-[#2B211B]">@suqmajaz</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {instagram.map((src, i) => (
          <Reveal key={src} delay={i * 50}>
            <a
              href="https://instagram.com/suqmajaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="إنستغرام"
              className="group relative block aspect-square rounded-2xl overflow-hidden border border-[#E8DFD3] cursor-pointer"
            >
              <img
                src={src}
                alt="تصميم من سوق مجاز على إنستغرام"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2B211B]/0 group-hover:bg-[#2B211B]/35 transition-colors duration-300 flex items-center justify-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFFDF9]/90 text-[#8A6A4F] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-instagram-line"></i>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}