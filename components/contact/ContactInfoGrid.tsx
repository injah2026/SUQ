import { contactCards, contactSocials } from "@/lib/contactData";

export default function ContactInfoGrid() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactCards.map((c) => (
          <div
            key={c.title}
            className="rounded-[22px] bg-white border border-[#EFE7DB] p-6 shadow-[0_20px_55px_-48px_rgba(43,33,27,.5)] hover:border-[#C2A06B] transition-colors"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F6F1E8] text-[22px] text-[#8A6A4F]">
              <i className={c.icon}></i>
            </span>
            <h4 className="mt-4 text-[16px] font-semibold text-[#2B211B]">{c.title}</h4>
            <div className="mt-2 flex flex-col gap-1">
              {c.lines.map((l) => (
                <span key={l} className="text-[14px] leading-7 text-[#8A7B6E]">{l}</span>
              ))}
            </div>
            <a
              href={c.action.href}
              target={c.action.href.startsWith("http") ? "_blank" : undefined}
              rel={c.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer whitespace-nowrap"
            >
              {c.action.label}
              <span className="w-4 h-4 flex items-center justify-center">
                <i className={c.action.icon}></i>
              </span>
            </a>
          </div>
        ))}
      </div>

      <div className="surface-dark rounded-[22px] bg-[#2B211B] p-6 lg:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="text-right">
          <h4 className="font-heading text-[19px] font-semibold text-[#FFFDF9]">تابعنا على السوشال ميديا</h4>
          <p className="mt-1.5 text-[14px] text-[#FFFDF9]/90">جديد المجموعات والعروض أولًا بأول</p>
        </div>
        <div className="flex items-center gap-3">
          {contactSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#C2A06B]/40 text-[20px] text-[#C2A06B] hover:bg-[#C2A06B] hover:text-[#2B211B] transition-colors duration-300 cursor-pointer"
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}