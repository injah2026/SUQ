import { trustItems } from "@/lib/homeData";

export default function HomeTrustBar() {
  return (
    <section className="w-full border-y border-[#E8DFD3] bg-[#FFFDF9]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-16">
        {trustItems.map((it, i) => (
          <div key={it.label} className="flex items-center gap-8 lg:gap-16">
            <span className="flex items-center gap-3 text-[15px] lg:text-[16px] text-[#2B211B]">
              <span className="w-6 h-6 flex items-center justify-center text-[18px] text-[#C2A06B]">
                <i className={it.icon}></i>
              </span>
              {it.label}
            </span>
            {i < trustItems.length - 1 && (
              <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#C2A06B]/50"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}