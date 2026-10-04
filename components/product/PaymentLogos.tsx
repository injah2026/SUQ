type Logo = { name: string; src: string };

const logos: Logo[] = [
  { name: "mada", src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mada_Logo.svg" },
  { name: "Visa", src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg" },
  { name: "Mastercard", src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" },
  { name: "Apple Pay", src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" },
  { name: "STC Pay", src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Stc_pay.svg" },
  { name: "Tabby", src: "https://cdn.tabby.ai/assets/logo.svg" },
  { name: "Tamara", src: "https://cdn.prod.website-files.com/67c184892f7a84b971ff49d9/68931b49f2808979578bdc64_tamara-text-logo-black-en.svg" },
];

export default function PaymentLogos({ singleRow = false }: { singleRow?: boolean }) {
  return (
    <div
      className={`mx-auto flex max-w-[260px] flex-wrap items-center justify-center gap-2 lg:max-w-none ${
        singleRow ? "lg:flex-nowrap" : ""
      }`}
    >
      {logos.map((l) => (
        <span
          key={l.name}
          className="w-14 h-9 p-1.5 shrink-0 flex items-center justify-center rounded-lg bg-white border border-[#E8DFD3] transition-colors duration-300 hover:border-[#C2A06B]"
        >
          <img
            src={l.src}
            alt={l.name}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </span>
      ))}
    </div>
  );
}