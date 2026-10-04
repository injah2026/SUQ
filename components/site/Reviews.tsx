"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">
      <div className="text-center mb-10">
        <SectionLabel align="center">آراء العملاء</SectionLabel>
        <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] font-semibold text-[#2B211B]">
          تقييمات العملاء
        </h2>
      </div>

      <div className="rounded-2xl bg-[#FFFDF9] border border-[#E8DFD3] shadow-[0_40px_80px_-60px_rgba(43,33,27,.4)] px-8 py-14 flex flex-col items-center text-center">
        <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A6A4F] text-3xl text-[#FFFDF9]">
          <i className="ri-chat-quote-fill"></i>
        </span>
        <h3 className="mt-7 font-heading text-xl lg:text-[26px] font-semibold text-[#2B211B]">
          كن أول من يقيّم هذا المنتج
        </h3>
        <p className="mt-4 text-[15px] text-[#2B211B] max-w-lg leading-8">
          شاركنا تجربتك مع حقيبة شموخ، رأيك يساعدنا ويساعد غيرك على الاختيار.
        </p>
        <div className="mt-9">
          <Button onClick={() => setOpen((v) => !v)} icon="ri-star-line">
            أضف تقييمك
          </Button>
        </div>
        {open && (
          <div className="mt-8 w-full max-w-md text-right">
            <div className="flex justify-center gap-1 mb-5 text-[#C2A06B] text-2xl">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="w-7 h-7 flex items-center justify-center cursor-pointer hover:text-[#8A6A4F] transition-colors">
                  <i className="ri-star-fill"></i>
                </span>
              ))}
            </div>
            <textarea
              maxLength={500}
              placeholder="اكتب تقييمك هنا..."
              className="w-full h-32 rounded-xl bg-[#F8F4EE] border border-[#E8DFD3] p-5 text-[16px] text-[#2B211B] outline-none focus:border-[#C2A06B] transition-colors resize-none"
            ></textarea>
            <div className="mt-4">
              <Button icon="ri-send-plane-line">إرسال التقييم</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}