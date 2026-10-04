import PointsCard from "./PointsCard";
import { earnRules, pointsBalance, pointsHistory, tierProgress, tiers } from "@/lib/accountData";

export default function PointsSection() {
  const { current, next, percent, remaining } = tierProgress(pointsBalance);

  return (
    <div className="space-y-6">
      <PointsCard />

      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
        <h2 className="font-heading text-[19px] font-semibold text-[#2B211B]">المستويات</h2>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {tiers.map((t) => {
            const reached = pointsBalance >= t.min;
            return (
              <div
                key={t.id}
                className={`rounded-2xl border p-4 text-center ${
                  t.id === current.id
                    ? "border-[#C2A06B] bg-[#FBF3E2]"
                    : "border-[#EFE7DB] bg-[#FBF8F2]"
                }`}
              >
                <span
                  className={`mx-auto w-11 h-11 rounded-full flex items-center justify-center text-[22px] ${
                    reached ? "bg-[#0B3D2E] text-[#FFFDF9]" : "bg-[#EFE3CC] text-[#A99C8E]"
                  }`}
                >
                  <i className={t.icon}></i>
                </span>
                <span className="mt-3 block text-[14.5px] font-bold text-[#2B211B]">{t.name}</span>
                <span className="mt-0.5 block text-[12px] text-[#8A7B6E]">
                  من {t.min.toLocaleString("en-US")} نقطة
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          <div className="h-2 w-full rounded-full bg-[#EFE3CC] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-l from-[#D9BC85] to-[#8A6A4F]"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <p className="mt-2.5 text-[13px] text-[#8A7B6E]">
            {next
              ? `باقي ${remaining.toLocaleString("en-US")} نقطة للوصول لمستوى ${next.name}`
              : "أنت في أعلى مستوى في مجاز"}
          </p>
        </div>
      </div>

      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
        <h2 className="font-heading text-[19px] font-semibold text-[#2B211B]">كيف تكسب النقاط</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {earnRules.map((r) => (
            <div key={r.title} className="flex items-center gap-3.5 rounded-2xl bg-[#FBF8F2] border border-[#EFE3CC] p-4">
              <span className="w-11 h-11 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] flex items-center justify-center text-[20px] text-[#8A6A4F] shrink-0">
                <i className={r.icon}></i>
              </span>
              <div>
                <span className="block text-[14.5px] font-semibold text-[#2B211B]">{r.title}</span>
                <span className="mt-0.5 block text-[12.5px] text-[#8A7B6E]">{r.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
        <h2 className="font-heading text-[19px] font-semibold text-[#2B211B]">سجل النقاط</h2>
        <ul className="mt-4 flex flex-col divide-y divide-[#EFE7DB]">
          {pointsHistory.map((h) => {
            const earn = h.points > 0;
            return (
              <li key={h.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[19px] shrink-0 ${
                    earn ? "bg-[#E9F5EE] text-[#2E7D4F]" : "bg-[#FBEFE9] text-[#B4552F]"
                  }`}
                >
                  <i className={earn ? "ri-add-line" : "ri-subtract-line"}></i>
                </span>
                <div className="min-w-0 flex-1">
                  <span className="block text-[14.5px] font-semibold text-[#2B211B] truncate">
                    {h.title}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-[#8A7B6E]">{h.date}</span>
                </div>
                <span
                  className={`text-[15px] font-bold whitespace-nowrap ${
                    earn ? "text-[#2E7D4F]" : "text-[#B4552F]"
                  }`}
                >
                  {earn ? "+" : ""}
                  {h.points}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}