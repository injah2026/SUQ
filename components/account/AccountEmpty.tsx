import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  note: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function AccountEmpty({ icon, title, note, ctaLabel, ctaHref }: Props) {
  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] px-6 py-16 flex flex-col items-center text-center">
      <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#FBF8F2] border border-[#EFE3CC]">
        <span className="w-12 h-12 flex items-center justify-center text-[44px] text-[#C2A06B]">
          <i className={icon}></i>
        </span>
      </div>
      <h3 className="mt-6 font-heading text-[22px] font-semibold text-[#2B211B]">{title}</h3>
      <p className="mt-3 max-w-md text-[14.5px] leading-7 text-[#8A7B6E]">{note}</p>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-7 h-12 px-8 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[18px]">
            <i className="ri-store-3-line"></i>
          </span>
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}