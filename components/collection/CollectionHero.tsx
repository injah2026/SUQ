import Reveal from "@/components/home/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CollectionHero({
  title,
  subtext,
  image,
}: {
  title: string;
  subtext: string;
  image: string;
}) {
  return (
    <section className="surface-dark relative w-full h-[70vh] min-h-[520px] lg:h-[85vh] lg:min-h-[620px] overflow-hidden bg-[#1A120C]">
      <img src={image} alt={title} loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#1A120C]/90 via-[#1A120C]/55 to-[#1A120C]/20"></div>

      <div className="relative h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <Reveal className="max-w-2xl">
          <SectionLabel tone="dark">مجموعات مجاز</SectionLabel>
          <h1 className="mt-0 font-heading text-[clamp(30px,5vw,52px)] leading-[1.1] font-semibold text-[#FFFDF9]">
            {title}
          </h1>
          <p className="mt-5 text-[16px] lg:text-[18px] leading-8 text-[#FFFDF9]/90 max-w-xl">
            {subtext}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-4">
            <Button href="/shop" icon="ri-arrow-left-line" className="w-full sm:w-auto">
              تسوّق المجموعة
            </Button>
            <Button href="/#story" variant="outlineLight" className="w-full sm:w-auto">
              قصتنا
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}