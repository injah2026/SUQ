"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import EmbroiderPreview from "./EmbroiderPreview";

const PREVIEW_IMAGE =
  "https://readdy.ai/api/search-image?query=Large%20black%20leather%20Saudi%20Bisht%20pouch%20bag%20with%20fine%20gold%20embroidery%20displayed%20upright%20centered%20on%20a%20soft%20warm%20ivory%20background%2C%20quiet%20luxury%20product%20photography%2C%20gentle%20soft%20light%2C%20clean%20minimal%20composition%20with%20empty%20leather%20surface%20in%20the%20middle%20for%20personalization%20preview%2C%20high%20detail&width=1000&height=1250&seq=suqmajazcd01&orientation=portrait";

const threads = [
  { name: "ذهبي", hex: "#C2A06B" },
  { name: "فضي", hex: "#C9CCD1" },
  { name: "أسود", hex: "#1A1A1A" },
];

const fonts = [
  { key: "classic", label: "عربي كلاسيكي", cls: "font-['Aref_Ruqaa']" },
  { key: "modern", label: "عربي حديث", cls: "font-heading" },
  { key: "english", label: "إنجليزي", cls: "font-['Pacifico']" },
];

export default function CustomDesignBanner() {
  const [text, setText] = useState("");
  const [thread, setThread] = useState("ذهبي");
  const [font, setFont] = useState("classic");

  const activeColor = threads.find((t) => t.name === thread)?.hex ?? "#C2A06B";
  const activeFont = fonts.find((f) => f.key === font)?.cls ?? "font-heading";

  return (
    <section className="w-full bg-[#FBF8F2] border-y border-[#EFE3CC]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <Reveal>
          <div className="rounded-[32px] p-[3px] bg-gradient-to-l from-[#C2A06B] via-[#E6D6B0] to-[#C2A06B] shadow-[0_50px_110px_-75px_rgba(43,33,27,.65)]">
            <div className="rounded-[29px] bg-[#FFFDF9] overflow-hidden">
              <div className="h-px w-full bg-[#E6D6B0]"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-7 lg:p-12 items-stretch">
                <div className="order-2 lg:order-1 text-right flex flex-col justify-center">
                  <SectionLabel>خدمة التطريز الشخصي</SectionLabel>
                  <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B] leading-[1.15]">
                    صمّم قطعتك باسمك
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-[#2B211B]/80 max-w-lg">
                    أضف اسمك أو حروفك الأولى بتطريز يدوي فاخر، هدية لا تتكرر
                  </p>

                  <div className="mt-8">
                    <label className="block text-[14px] font-semibold text-[#2B211B] mb-2">
                      الاسم أو الحروف
                    </label>
                    <div className="relative">
                      <input
                        value={text}
                        maxLength={12}
                        onChange={(e) => setText(e.target.value.slice(0, 12))}
                        placeholder="اكتب الاسم أو الحروف"
                        className="w-full h-[48px] rounded-2xl bg-[#FBF8F2] border border-[#E3D2AE] ps-5 pe-16 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] focus:outline-none focus:border-[#C2A06B] transition-colors"
                      />
                      <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[12px] text-[#A99C8E]">
                        {text.length}/12
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block text-[14px] font-semibold text-[#2B211B] mb-3">
                      لون الخيط
                    </span>
                    <div className="flex items-center gap-4">
                      {threads.map((t) => (
                        <button
                          key={t.name}
                          type="button"
                          onClick={() => setThread(t.name)}
                          className="flex flex-col items-center gap-1.5 cursor-pointer"
                        >
                          <span
                            className={`w-9 h-9 rounded-full border-2 transition-all ${
                              thread === t.name
                                ? "border-[#C2A06B] ring-2 ring-[#C2A06B]/30"
                                : "border-[#E3D2AE]"
                            }`}
                            style={{ backgroundColor: t.hex }}
                          ></span>
                          <span className="text-[12px] text-[#2B211B]/70">{t.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="block text-[14px] font-semibold text-[#2B211B] mb-3">
                      نمط الخط
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {fonts.map((f) => (
                        <button
                          key={f.key}
                          type="button"
                          onClick={() => setFont(f.key)}
                          className={`h-[42px] px-5 rounded-full text-[15px] font-semibold border whitespace-nowrap cursor-pointer transition-colors ${
                            font === f.key
                              ? "bg-[#8A6A4F] text-[#FFFDF9] border-[#8A6A4F]"
                              : "bg-[#FFFDF9] text-[#2B211B] border-[#E3D2AE] hover:border-[#C2A06B]"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex items-center gap-6 flex-wrap">
                    <span className="text-[15px] font-bold text-[#8A6A4F]">التطريز +30 ر.س</span>
                    <span className="flex items-center gap-1.5 text-[14px] text-[#2B211B]/70">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line"></i>
                      </span>
                      جاهز خلال 3–5 أيام
                    </span>
                  </div>

                  <div className="mt-8">
                    <Button href="/custom" icon="ri-pencil-line" className="w-full">
                      اطلب قطعتك المطرزة
                    </Button>
                  </div>

                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#2B211B] hover:text-[#8A6A4F] transition-colors cursor-pointer"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#25D366]">
                      <i className="ri-whatsapp-line"></i>
                    </span>
                    عندك فكرة خاصة؟ كلّمنا
                  </a>
                </div>

                <div className="order-first lg:order-2 aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[480px]">
                  <EmbroiderPreview
                    image={PREVIEW_IMAGE}
                    text={text}
                    color={activeColor}
                    fontClass={activeFont}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}