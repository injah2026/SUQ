"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import SectionLabel from "@/components/ui/SectionLabel";
import PointsCard from "./PointsCard";
import LastOrderCard from "./LastOrderCard";
import QuickLinks from "./QuickLinks";

export default function OverviewSection() {
  const { user } = useAuth();
  const name = user?.name || "ضيف مجاز";

  return (
    <div className="space-y-6">
      <div className="rounded-[24px] bg-gradient-to-l from-[#F3ECE0] to-[#FBF8F2] border border-[#EFE3CC] p-6 lg:p-8">
        <SectionLabel>مجاز</SectionLabel>
        <h2 className="mt-0 font-heading text-[24px] lg:text-[30px] font-semibold text-[#2B211B]">
          مرحبًا {name}، نورت مجاز
        </h2>
        <p className="mt-3 max-w-xl text-[14.5px] leading-7 text-[#8A7B6E]">
          من هنا تدير طلباتك وعناوينك ومفضلاتك ونقاطك. كل تفاصيل تجربتك مع مجاز في مكان واحد.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PointsCard />
        <LastOrderCard />
      </div>

      <QuickLinks />
    </div>
  );
}