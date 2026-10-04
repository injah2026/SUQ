import Link from "next/link";
import { pointsBalance, tierProgress } from "@/lib/accountData";

export default function PointsCard() {
  const { current, next, percent, remaining } = tierProgress(pointsBalance);

  return (
    <div className="rounded-[24px] bg-[#0B3D2E] text-[#FFFDF9] p-6 lg:p-7 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#C2A06B]/10"></div>
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="flex items-center gap-2 text-[13px] text-[#C2A06B] font-semibold">
              <span className="w-4 h-4 flex items-center justify-center text-[16px]">
                <i className="ri-award-line"></i>
              </span>
              نقاط مجاز
            </span>
            <p className="mt-3 font-heading text-[38px] font-bold leading-none">
              {pointsBalance.toLocaleString("en-US")}
            </p>
            <span className="mt-2 block text-[13px] text-[#FFFDF9]/70">نقطة متاحة للاستبدال</span>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-bold bg-[#C2A06B] text-[#0B3D2E] px-3.5 py-1.5 rounded-full">
            <span className="w-4 h-4 flex items-center justify-center text-[15px]">
              <i className={current.icon}></i>
            </span>
            عضو {current.name}
          </span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-[12.5px] text-[#FFFDF9]/80 mb-2">
            <span>{current.name}</span>
            <span>{next ? next.name : "أعلى المستويات"}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#FFFDF9]/15 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-l from-[#D9BC85] to-[#C2A06B]"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <p className="mt-2.5 text-[13px] text-[#FFFDF9]/70">
            {next ? `باقي ${remaining.toLocaleString("en-US")} نقطة للوصول لمستوى ${next.name}` : "وصلت لأعلى مستوى في مجاز"}
          </p>
        </div>

        <Link
          href="/account/points"
          className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#C2A06B] hover:text-[#D9BC85] transition-colors cursor-pointer"
        >
          تفاصيل النقاط والمستويات
          <span className="w-4 h-4 flex items-center justify-center text-[16px]">
            <i className="ri-arrow-left-line"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}