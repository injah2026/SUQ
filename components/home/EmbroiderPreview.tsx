"use client";

type Props = {
  image: string;
  text: string;
  color: string;
  fontClass: string;
};

export default function EmbroiderPreview({ image, text, color, fontClass }: Props) {
  const isEmpty = !text.trim();

  return (
    <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#F1E9DA]">
      <img src={image} alt="معاينة تطريز الاسم على قطعة مجاز" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center px-8">
        <span
          className={`text-[34px] lg:text-[48px] font-bold leading-tight text-center ${fontClass} ${
            isEmpty ? "opacity-40" : ""
          }`}
          style={{
            color,
            textShadow: `0 1px 1px rgba(0,0,0,.45), 0 0 12px ${color}80`,
          }}
        >
          {isEmpty ? "اسمك هنا" : text}
        </span>
      </div>

      <span className="absolute bottom-4 right-4 text-[12px] tracking-[0.2em] text-[#FFFDF9]/80">
        معاينة مباشرة
      </span>
    </div>
  );
}