import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const perks = [
  { icon: "ri-gift-line", text: "علبة مجاز الفاخرة بطبعة ذهبية" },
  { icon: "ri-quill-pen-line", text: "بطاقة إهداء مذهّبة نكتبها بخطّ يدوي" },
  { icon: "ri-scissors-cut-line", text: "شريط حريري وختم ذهبي" },
];

export default function GiftWrapping() {
  return (
    <section className="w-full bg-[#FFFDF9] border-y border-[#E8DFD3]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="w-full">
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-[0_40px_80px_-55px_rgba(43,33,27,.45)] group">
              <img
                src="https://readdy.ai/api/search-image?query=Close%20up%20editorial%20photograph%20of%20luxurious%20gift%20wrapping%20in%20cream%20and%20gold%20with%20a%20silk%20ribbon%20a%20gold%20wax%20seal%20and%20a%20handwritten%20gold%20foiled%20gift%20card%20beside%20a%20black%20leather%20pouch%20on%20a%20warm%20beige%20linen%20surface%2C%20quiet%20luxury%20packaging%20photography%2C%20warm%20sand%20tones%2C%20soft%20natural%20light%2C%20high%20detail&width=1200&height=1000&seq=giftwrapping&orientation=landscape"
                alt="تغليف هدايا سوق مجاز الفاخر بشريط ذهبي"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="w-full">
            <div className="max-w-xl">
              <SectionLabel>خدمة الإهداء</SectionLabel>
              <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] leading-[1.2] font-semibold text-[#2B211B]">
                تغليف مجاز الفاخر
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-[#2B211B]">
                تغليف فاخر وبطاقة إهداء مجانًا مع كل طلب
              </p>

              <ul className="mt-7 flex flex-col gap-4">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-[15px] text-[#2B211B]">
                    <span className="w-9 h-9 rounded-full bg-[#F8F4EE] border border-[#E8DFD3] flex items-center justify-center text-[18px] text-[#C2A06B] shrink-0">
                      <i className={p.icon}></i>
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>

              <div className="mt-9 h-px w-24 bg-[#C2A06B]/35"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}