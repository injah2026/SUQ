import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type Props = {
  label: string;
  title: string;
  lines: string[];
  image: string;
  reverse?: boolean;
  href?: string;
  cta?: string;
};

export default function CollectionSpotlight({
  label,
  title,
  lines,
  image,
  reverse = false,
  href = "/shop",
  cta = "اكتشف المجموعة",
}: Props) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal className="w-full">
          <div className="relative w-full aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-[0_40px_80px_-55px_rgba(43,33,27,.45)] group">
            <img
              src={image}
              alt={title ? `${title} - سوق مجاز` : "مجموعة من سوق مجاز"}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <div className="max-w-xl">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] leading-[1.2] font-semibold text-[#2B211B]">
              {title}
            </h2>
            {lines.map((l) => (
              <p key={l} className="mt-5 text-[15px] leading-8 text-[#2B211B]">
                {l}
              </p>
            ))}
            <div className="mt-9">
              <Button href={href} icon="ri-arrow-left-line">
                {cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}