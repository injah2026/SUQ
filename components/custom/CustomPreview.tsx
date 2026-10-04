"use client";

type Props = {
  image: string;
  text: string;
  color: string;
  fontClass: string;
};

export default function CustomPreview({ image, text, color, fontClass }: Props) {
  const isEmpty = !text.trim();

  return (
    <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-[#F1E9DA] border border-[#E8DFD3]">
      <img src={image} alt="معاينة تطريز الاسم على قطعة مجاز" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center px-10">
        <span
          className={`text-[38px] lg:text-[56px] font-bold leading-tight text-center ${fontClass} ${
            isEmpty ? "opacity-40" : ""
          }`}
          style={{
            color,
            textShadow: `0 1px 1px rgba(0,0,0,.45), 0 0 16px ${color}80`,
          }}
        >
          {isEmpty ? "اسمك هنا" : text}
        </span>
      </div>

      <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#FFFDF9]/85 text-[12px] tracking-[0.2em] text-[#2B211B]">
        معاينة مباشرة
      </span>
    </div>
  );
}