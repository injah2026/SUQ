import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function PageHero({
  image,
  label,
  title,
  text,
  height = "h-[46vh] min-h-[380px]",
  children,
}: {
  image: string;
  label: string;
  title: string;
  text?: string;
  height?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`surface-dark relative w-full ${height} overflow-hidden bg-[#1A120C]`}>
      <img src={image} alt={title} loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#1A120C]/90 via-[#1A120C]/60 to-[#1A120C]/15"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <Reveal className="max-w-2xl text-right">
          <SectionLabel tone="dark">{label}</SectionLabel>
          <h1 className="mt-0 font-heading text-[clamp(30px,4.6vw,50px)] leading-[1.15] font-semibold text-[#FFFDF9]">
            {title}
          </h1>
          {text && (
            <p className="mt-5 text-[16px] lg:text-[17px] leading-9 text-[#FFFDF9]/90 max-w-xl ms-auto lg:ms-0">
              {text}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}