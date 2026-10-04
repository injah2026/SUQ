import SectionLabel from "@/components/ui/SectionLabel";
import { contactAddress, contactMapEmbed } from "@/lib/contactData";

export default function ContactMap() {
  return (
    <section id="contact-map" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 scroll-mt-28">
      <div className="rounded-[28px] overflow-hidden border border-[#E8DFD3] bg-[#FFFDF9] grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
        <div className="p-8 lg:p-11 flex flex-col justify-center">
          <SectionLabel>موقعنا</SectionLabel>
          <h3 className="mt-0 font-heading text-[24px] lg:text-[30px] font-semibold text-[#2B211B]">
            معرض مجاز
          </h3>
          <div className="mt-5 flex flex-col gap-1">
            {contactAddress.map((line, i) => (
              <span key={line} className={i === 0 ? "text-[16px] font-semibold text-[#2B211B]" : "text-[15px] leading-8 text-[#8A7B6E]"}>
                {line}
              </span>
            ))}
          </div>
          <a
            href="https://maps.google.com/?q=King+Fahd+Road+Al+Olaya+Riyadh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 h-[48px] px-6 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap hover:bg-[#6F5440] transition-colors cursor-pointer w-fit"
          >
            <span className="w-5 h-5 flex items-center justify-center text-[18px]">
              <i className="ri-navigation-line"></i>
            </span>
            الاتجاهات على الخريطة
          </a>
        </div>

        <div className="min-h-[320px] lg:min-h-[420px] bg-[#F6F1E8]">
          <iframe
            title="موقع معرض مجاز"
            src={contactMapEmbed}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}