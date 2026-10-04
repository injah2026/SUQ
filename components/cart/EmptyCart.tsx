import Button from "@/components/ui/Button";

export default function EmptyCart() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="mx-auto max-w-xl flex flex-col items-center text-center">
        <div className="relative w-40 h-40 flex items-center justify-center rounded-full bg-[#FBF8F2] border border-[#EFE3CC]">
          <span className="w-20 h-20 flex items-center justify-center text-[72px] text-[#C2A06B]/80">
            <i className="ri-shopping-bag-3-line"></i>
          </span>
          <span className="absolute -top-2 -right-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#FFFDF9] border border-[#E8DFD3] text-[26px] text-[#C2A06B]">
            <i className="ri-gift-2-line"></i>
          </span>
        </div>

        <h1 className="mt-8 font-heading text-[28px] lg:text-[36px] font-semibold text-[#2B211B]">
          سلتك فارغة
        </h1>
        <p className="mt-4 text-[15px] lg:text-[16px] leading-8 text-[#8A7B6E]">
          يبدو أنك لم تضف أي قطعة بعد. تصفّح مجموعاتنا واكتشف ما يليق بذوقك.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/shop" icon="ri-store-3-line" iconPos="start">
            ابدأ التسوق
          </Button>
          <Button href="/gifts" variant="secondary">
            تصفّح الهدايا
          </Button>
        </div>
      </div>
    </section>
  );
}