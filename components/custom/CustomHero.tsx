"use client";

import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CustomHero() {
  return (
    <section className="surface-dark relative w-full h-[58vh] min-h-[480px] overflow-hidden bg-[#1A120C]">
      <img
        src="https://readdy.ai/api/search-image?query=Cinematic%20wide%20editorial%20photograph%20of%20a%20luxurious%20black%20leather%20Saudi%20Bisht%20bag%20with%20a%20beautiful%20gold%20embroidered%20Arabic%20name%20on%20its%20surface%2C%20resting%20on%20a%20warm%20beige%20linen%20surface%2C%20soft%20golden%20light%20with%20gentle%20palm%20shadows%2C%20generous%20negative%20space%20on%20the%20right%20side%20for%20text%2C%20quiet%20luxury%20craft%20mood%2C%20warm%20sand%20tones%2C%20ultra%20detailed&width=1920&height=1000&seq=customhero1&orientation=landscape"
        alt="صمّم باسمك على حقيبة بشت مطرزة بالذهب"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A120C]/90 via-[#1A120C]/55 to-[#1A120C]/15"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <Reveal className="max-w-2xl text-right">
          <SectionLabel tone="dark">خدمة التطريز الشخصي</SectionLabel>
          <h1 className="mt-0 font-heading text-[36px] lg:text-[56px] leading-[1.1] font-semibold text-[#FFFDF9]">
            قطعتك.. باسمك
          </h1>
          <p className="mt-5 text-[16px] lg:text-[18px] leading-8 text-[#FFFDF9]/90 max-w-xl ms-auto lg:ms-0">
            اختر قطعتك، اكتب اسمك أو حروفك، واختر لون الخيط ونمط الخط. نطرّزها يدويًا بعناية وتصل
            إليك جاهزة للإهداء.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-end">
            <Button
              icon="ri-pencil-ruler-2-line"
              iconPos="start"
              onClick={() =>
                document.getElementById("custom-studio")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ابدأ التصميم
            </Button>
            <Button
              variant="outlineLight"
              onClick={() =>
                document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              شاهد أعمالنا
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}