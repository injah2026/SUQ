import Link from "next/link";
import type { ReactNode } from "react";
import Logo from "@/components/site/Logo";

export default function AuthSplitLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2 bg-[#F8F4EE]">
      <div className="flex flex-col items-center justify-center px-6 py-12 lg:py-16 order-2 lg:order-1">
        <Link href="/" aria-label="سوق مجاز" className="lg:hidden mb-10 cursor-pointer">
          <Logo surface="#F8F4EE" tone="light" height={46} />
        </Link>
        <div className="w-full max-w-[440px]">{children}</div>
      </div>

      <div className="relative hidden lg:block order-1 lg:order-2 min-h-screen overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Close%20up%20of%20elegant%20hands%20gently%20holding%20a%20black%20leather%20Saudi%20heritage%20Bisht%20pouch%20bag%20with%20fine%20gold%20embroidered%20stripes%20and%20a%20small%20gold%20tassel%2C%20warm%20beige%20studio%20background%2C%20quiet%20luxury%20lifestyle%20photography%2C%20soft%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20high%20detail&width=1200&height=1600&seq=suqmajazauth1&orientation=portrait"
          alt="يدان تحملان حقيبة بشت مطرزة بالذهب من سوق مجاز"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c140f]/80 via-[#1c140f]/25 to-transparent"></div>

        <div className="absolute inset-x-0 bottom-0 p-12 text-right">
          <Logo surface="#F8F4EE" tone="dark" height={56} />
          <p className="mt-6 font-heading text-[34px] text-[#FFFDF9]">أهلًا بك في عائلة مجاز</p>
          <p className="mt-3 max-w-md text-[15px] leading-8 text-[#EFE7DB]/90">
            فخامة البشت والسدو في تفاصيل يومك، قطعة تحمل ذوقك وذكرياتك.
          </p>
        </div>
      </div>
    </div>
  );
}