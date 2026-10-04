const items = [
  { icon: "ri-truck-line", title: "شحن سريع", text: "لكل مدن المملكة" },
  { icon: "ri-shield-check-line", title: "دفع آمن", text: "مدى، Apple Pay، تابي، تمارا" },
  { icon: "ri-refresh-line", title: "استبدال سهل", text: "خلال 7 أيام" },
  { icon: "ri-gift-line", title: "تغليف فاخر", text: "مجانًا مع كل طلب" },
];

export default function FooterTrustStrip() {
  return (
    <section className="w-full bg-[#FFFDF9] border-t border-[#EFE7DB]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {items.map((it) => (
          <div key={it.title} className="flex flex-col items-center text-center">
            <span className="w-[54px] h-[54px] rounded-full bg-[#C2A06B]/12 border border-[#C2A06B]/25 flex items-center justify-center text-[26px] text-[#C2A06B]">
              <i className={it.icon}></i>
            </span>
            <h4 className="mt-4 text-[16px] font-semibold text-[#2B211B]">{it.title}</h4>
            <p className="mt-1.5 text-[13.5px] text-[#6B5D52] leading-6">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}