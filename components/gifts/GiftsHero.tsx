"use client";

import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function GiftsHero() {
  return (
    <section className="surface-dark relative w-full h-[58vh] min-h-[480px] overflow-hidden bg-[#1A120C]">
      <img
        src="https://readdy.ai/api/search-image?query=Cinematic%20wide%20editorial%20photograph%20of%20a%20luxurious%20cream%20gift%20box%20with%20gold%20ribbon%20and%20a%20black%20leather%20pouch%20with%20gold%20Bisht%20embroidery%20resting%20on%20a%20warm%20beige%20linen%20surface%2C%20soft%20golden%20light%20with%20gentle%20palm%20shadows%2C%20generous%20negative%20space%20on%20the%20left%2C%20quiet%20luxury%20gift%20mood%2C%20warm%20sand%20tones%2C%20elegant%20and%20calm%2C%20ultra%20detailed&width=1920&height=1000&seq=giftshero&orientation=landscape"
        alt="هدايا سوق مجاز الفاخرة بتغليف ذهبي"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#1A120C]/90 via-[#1A120C]/55 to-[#1A120C]/20"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <Reveal className="max-w-2xl">
          <SectionLabel tone="dark">هدايا مجاز</SectionLabel>
          <h1 className="mt-0 font-heading text-[34px] lg:text-[52px] leading-[1.1] font-semibold text-[#FFFDF9]">
            هدية تليق بمقامه
          </h1>
          <p className="mt-5 text-[16px] lg:text-[18px] leading-8 text-[#FFFDF9]/90 max-w-xl">
            تغليف فاخر وبطاقة إهداء مجانًا، مع اقتراحات جاهزة تساعدك تختار الهدية المناسبة في دقائق.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              icon="ri-search-line"
              iconPos="start"
              onClick={() =>
                document.getElementById("gift-finder")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ابحث عن هديتك
            </Button>
            <Button
              href="/shop"
              variant="outlineLight"
            >
              تسوّق كل الهدايا
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}