"use client";

import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CorporateHero() {
  return (
    <section className="surface-dark relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-[#1A120C]">
      <img
        src="https://readdy.ai/api/search-image?query=Cinematic%20wide%20editorial%20photograph%20of%20an%20elegant%20arrangement%20of%20luxury%20corporate%20gift%20boxes%20with%20gold%20and%20beige%20packaging%2C%20a%20leather%20pouch%20and%20gold%20ribbon%2C%20arranged%20on%20a%20warm%20beige%20linen%20surface%2C%20soft%20golden%20light%20with%20gentle%20shadows%2C%20generous%20negative%20space%20on%20the%20right%20for%20text%2C%20quiet%20luxury%20business%20gift%20mood%2C%20warm%20sand%20tones%2C%20ultra%20detailed&width=1920&height=1000&seq=corphero1&orientation=landscape"
        alt="هدايا مجاز للشركات - تغليف فاخر"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A120C]/92 via-[#1A120C]/60 to-[#1A120C]/15"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <Reveal className="max-w-2xl text-right">
          <SectionLabel tone="dark">مجاز للأعمال</SectionLabel>
          <h1 className="mt-0 font-heading text-[36px] lg:text-[56px] leading-[1.1] font-semibold text-[#FFFDF9]">
            هدايا مجاز للشركات
          </h1>
          <p className="mt-5 text-[16px] lg:text-[18px] leading-8 text-[#FFFDF9]/90 max-w-xl ms-auto lg:ms-0">
            هدايا تعكس هوية شركتك وتترك أثرًا يدوم
          </p>
          <div className="mt-9 flex justify-end">
            <Button
              icon="ri-file-list-3-line"
              iconPos="start"
              onClick={() =>
                document.getElementById("corporate-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              اطلب عرض سعر
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}