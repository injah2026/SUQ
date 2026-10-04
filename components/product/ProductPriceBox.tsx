export default function ProductPriceBox({ price, oldPrice }: { price: number; oldPrice: number }) {
  const savings = oldPrice - price;
  const instalment = Math.round((price / 4) * 10) / 10;

  return (
    <div className="rounded-2xl bg-[#F6F1E8] p-5">
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-[30px] font-bold text-[#2B211B] leading-none">{price} ر.س</span>
        <span className="text-[16px] text-[#A99C8E] line-through">{oldPrice} ر.س</span>
        <span className="text-[12px] font-semibold text-[#3F7A4A] bg-[#E9F5EE] px-2.5 py-1 rounded-full">
          وفّر {savings} ر.س
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2.5 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="h-6 px-1.5 flex items-center rounded-md bg-white border border-[#E8DFD3]">
            <img src="https://cdn.tabby.ai/assets/logo.svg" alt="تابي" className="h-3.5 object-contain" loading="lazy" />
          </span>
          <span className="h-6 px-1.5 flex items-center rounded-md bg-white border border-[#E8DFD3]">
            <img
              src="https://cdn.prod.website-files.com/67c184892f7a84b971ff49d9/68931b49f2808979578bdc64_tamara-text-logo-black-en.svg"
              alt="تمارا"
              className="h-3.5 object-contain"
              loading="lazy"
            />
          </span>
        </span>
        <span className="text-[13px] text-[#6F6357]">
          أو 4 دفعات بقيمة <span className="font-semibold text-[#2B211B]">{instalment} ر.س</span> بدون فوائد
        </span>
      </div>
    </div>
  );
}