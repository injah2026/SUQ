import { trackSteps } from "@/lib/trackData";

export default function TrackTimeline({ step }: { step: number }) {
  return (
    <div className="w-full">
      <div className="relative flex items-start justify-between">
        <div className="absolute top-[26px] right-[34px] left-[34px] h-[3px] bg-[#EFE3CC] rounded-full"></div>
        <div
          className="absolute top-[26px] right-[34px] h-[3px] bg-[#C2A06B] rounded-full transition-all duration-700"
          style={{ width: `calc((100% - 68px) * ${step / (trackSteps.length - 1)})` }}
        ></div>

        {trackSteps.map((s, i) => {
          const done = i <= step;
          return (
            <div key={s.key} className="relative z-10 flex flex-col items-center text-center w-[68px] sm:w-auto sm:flex-1">
              <span
                className={`w-[54px] h-[54px] flex items-center justify-center rounded-full border-2 text-[24px] transition-colors duration-500 ${
                  done
                    ? "bg-[#8A6A4F] border-[#8A6A4F] text-[#FFFDF9] shadow-[0_14px_28px_-16px_rgba(138,106,79,.9)]"
                    : "bg-[#FFFDF9] border-[#E8DFD3] text-[#B9AB9C]"
                }`}
              >
                <i className={done ? "ri-check-line" : s.icon}></i>
              </span>
              <span className={`mt-3 text-[13px] sm:text-[14.5px] font-semibold whitespace-nowrap ${done ? "text-[#2B211B]" : "text-[#A99C8E]"}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}