import Link from "next/link";

export type GiftBundle = {
  name: string;
  price: number;
  oldPrice: number;
  desc: string;
  tag: string;
  rating: number;
  reviews: number;
  items: string[];
  image: string;
};

export default function GiftBundleCard({ bundle }: { bundle: GiftBundle }) {
  const pct =
    bundle.oldPrice > bundle.price
      ? Math.round(((bundle.oldPrice - bundle.price) / bundle.oldPrice) * 100)
      : 0;

  return (
    <div className="group h-full flex flex-col rounded-2xl bg-white border border-[#E8DFD3] overflow-hidden hover:-translate-y-1 hover:shadow-[0_45px_80px_-45px_rgba(43,33,27,.35)] transition-all duration-500">
      <Link
        href="/gifts"
        aria-label={bundle.name}
        className="relative block aspect-square overflow-hidden bg-[#F6F1E8] cursor-pointer"
      >
        <img
          src={bundle.image}
          alt={bundle.name ? `${bundle.name} - بكج هدايا من سوق مجاز` : "بكج هدايا من سوق مجاز"}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {pct > 0 && (
          <span className="absolute top-3 right-3 text-[12px] font-bold px-2.5 py-1.5 rounded-full bg-[#B4552F] text-[#FFFDF9] whitespace-nowrap">
            وفر {pct}%
          </span>
        )}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[#8A6A4F] whitespace-nowrap">
          <span className="w-3.5 h-3.5 flex items-center justify-center text-[13px]">
            <i className="ri-price-tag-3-line"></i>
          </span>
          {bundle.tag}
        </span>
      </Link>

      <div className="flex flex-col flex-1 p-5 text-right">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] tracking-[0.18em] text-[#C2A06B] font-semibold whitespace-nowrap">
            بكج هدايا جاهز
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <span className="w-3.5 h-3.5 flex items-center justify-center text-[13px] text-[#D9A94E]">
              <i className="ri-star-fill"></i>
            </span>
            <span className="text-[12px] text-[#8A7B6E]">
              {bundle.rating} ({bundle.reviews})
            </span>
          </span>
        </div>

        <h3 className="mt-1.5 text-[17px] font-semibold text-[#2B211B] leading-7">
          {bundle.name}
        </h3>
        <p className="mt-1 text-[13px] text-[#8A7B6E]">{bundle.desc}</p>

        <ul className="mt-3 flex flex-col gap-1.5">
          {bundle.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[13px] text-[#6F6357]">
              <span className="w-4 h-4 flex items-center justify-center text-[15px] text-[#3F7A4A]">
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-baseline gap-2 border-t border-[#EFE7DB] pt-3">
          <span className="text-[18px] font-bold text-[#2B211B] whitespace-nowrap">
            {bundle.price} ر.س
          </span>
          <span className="text-[13px] text-[#A99C8E] line-through whitespace-nowrap">
            {bundle.oldPrice} ر.س
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#6F6357]">
          <span className="w-4 h-4 flex items-center justify-center text-[#C2A06B]">
            <i className="ri-gift-line"></i>
          </span>
          تغليف هدية فاخر مجاني + بطاقة إهداء
        </div>

        <Link
          href="/gifts"
          className="mt-4 w-full h-11 rounded-full bg-[#8A6A4F] hover:bg-[#6F5440] text-[#FFFDF9] text-[14px] font-bold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
        >
          <span className="w-4 h-4 flex items-center justify-center text-[16px]">
            <i className="ri-shopping-bag-3-line"></i>
          </span>
          اطلب البكج
        </Link>
      </div>
    </div>
  );
}