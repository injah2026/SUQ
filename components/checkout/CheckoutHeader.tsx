import Link from "next/link";
import Logo from "@/components/site/Logo";

export default function CheckoutHeader() {
  return (
    <header className="w-full bg-[#FFFDF9] border-b border-[#E8DFD3]">
      <div className="w-full px-6 lg:px-12 h-[72px] lg:h-[80px] flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="سوق مجاز"
          className="cursor-pointer transition-opacity duration-300 hover:opacity-90"
        >
          <Logo surface="#FFFDF9" tone="light" height={42} />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="hidden sm:inline-flex items-center gap-2 text-[14px] text-[#8A7B6E] hover:text-[#8A6A4F] transition-colors whitespace-nowrap"
          >
            <span className="w-5 h-5 flex items-center justify-center text-[18px]">
              <i className="ri-arrow-right-line"></i>
            </span>
            الرجوع للسلة
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-[#F1F6F2] border border-[#D7E3DA] px-4 h-9 text-[13.5px] font-semibold text-[#0B3D2E]">
            <span className="w-4 h-4 flex items-center justify-center text-[16px]">
              <i className="ri-lock-2-fill"></i>
            </span>
            دفع آمن
          </div>
        </div>
      </div>
    </header>
  );
}