"use client";

const thumb =
  "pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-5 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#8A6A4F] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#FFFDF9] [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#8A6A4F] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#FFFDF9] [&::-moz-range-thumb]:pointer-events-auto";

export default function PriceRange({
  min,
  max,
  valueMin,
  valueMax,
  onChange,
}: {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  onChange: (min: number, max: number) => void;
}) {
  const step = 10;
  const left = ((valueMin - min) / (max - min)) * 100;
  const right = ((valueMax - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-4 text-[13px] font-semibold text-[#2B211B]">
        من {valueMin} إلى {valueMax} ر.س
      </div>
      <div dir="ltr" className="relative h-5 flex items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-[#E8DFD3]"></div>
        <div
          className="absolute h-1.5 rounded-full bg-[#C2A06B]"
          style={{ left: `${left}%`, right: `${100 - right}%` }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMin}
          onChange={(e) =>
            onChange(Math.min(Number(e.target.value), valueMax - step), valueMax)
          }
          className={thumb}
          aria-label="أقل سعر"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMax}
          onChange={(e) =>
            onChange(valueMin, Math.max(Number(e.target.value), valueMin + step))
          }
          className={thumb}
          aria-label="أعلى سعر"
        />
      </div>
    </div>
  );
}