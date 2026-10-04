import type { TimelineStep } from "@/lib/accountData";

const stepIcons = [
  "ri-checkbox-circle-fill",
  "ri-scissors-2-line",
  "ri-truck-line",
  "ri-home-4-line",
];

export default function TrackingTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
      <h2 className="font-heading text-[19px] font-semibold text-[#2B211B] mb-6">تتبع الطلب</h2>

      <ol className="relative border-s border-dashed border-[#E2D3BB] ms-4 space-y-7">
        {steps.map((s, i) => (
          <li key={s.title} className="relative ps-8">
            <span
              className={`absolute -start-[15px] top-0 w-7 h-7 rounded-full flex items-center justify-center text-[16px] ${
                s.done ? "bg-[#0B3D2E] text-[#FFFDF9]" : "bg-[#EFE3CC] text-[#8A7B6E]"
              }`}
            >
              <i className={stepIcons[i] ?? "ri-circle-line"}></i>
            </span>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span
                className={`text-[15px] font-bold ${
                  s.done ? "text-[#2B211B]" : "text-[#5c5349]"
                }`}
              >
                {s.title}
              </span>
              <span className="text-[12.5px] text-[#A99C8E]">{s.date}</span>
            </div>
            <span className="mt-1 block text-[13px] text-[#8A7B6E]">{s.note}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}