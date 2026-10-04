import SectionLabel from "@/components/ui/SectionLabel";

export default function ShopBanner({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="surface-dark relative w-full h-[220px] lg:h-[270px] overflow-hidden bg-[#2B211B]">
      <img src={image} alt={title} loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#2B211B]/85 via-[#2B211B]/55 to-[#2B211B]/25"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-8 flex flex-col justify-center">
        <SectionLabel tone="dark">تسوّق مجاز</SectionLabel>
        <h1 className="mt-0 font-heading text-[28px] lg:text-[40px] font-semibold text-[#FFFDF9]">
          {title}
        </h1>
        <p className="mt-3 text-[14px] lg:text-[16px] leading-7 text-[#FFFDF9]/90 max-w-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}