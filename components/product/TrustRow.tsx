import { trustBadges } from "@/lib/data";

export default function TrustRow() {
  return (
    <div className="grid grid-cols-4 gap-2 pt-5 mt-5 border-t border-[#E8DFD3]">
      {trustBadges.map((b) => (
        <div key={b.label} className="group flex flex-col items-center text-center gap-2">
          <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C2A06B]/40 text-[18px] text-[#C2A06B] transition-colors group-hover:bg-[#8A6A4F] group-hover:text-[#FFFDF9] group-hover:border-[#8A6A4F]">
            <i className={b.icon}></i>
          </span>
          <span className="text-[12px] leading-4 text-[#6F6357]">{b.label}</span>
        </div>
      ))}
    </div>
  );
}