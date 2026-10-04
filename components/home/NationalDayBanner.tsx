import Reveal from "./Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type Props = {
  label: string;
  heading: string;
  text: string;
  cta: string;
  href: string;
};

export default function NationalDayBanner({ label, heading, text, cta, href }: Props) {
  return (
    <Reveal className="w-full">
      <div className="max-w-2xl">
        <SectionLabel tone="dark">{label}</SectionLabel>

        <h2 className="mt-0 font-heading text-[26px] lg:text-[36px] leading-[1.2] font-semibold text-[#FFFDF9]">
          {heading}
        </h2>

        <p className="mt-5 text-[15px] leading-8 text-[#FFFDF9]/90 max-w-lg">{text}</p>

        <div className="mt-9">
          <Button href={href} variant="gold" icon="ri-arrow-left-line">
            {cta}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}