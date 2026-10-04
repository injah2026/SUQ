import { Suspense } from "react";
import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import GiftsView from "@/components/gifts/GiftsView";

export const metadata = {
  title: "الهدايا | سوق مجاز",
  description:
    "اكتشف بكجات الهدايا الفاخرة من سوق مجاز: حقائب ومسبحة وكوب القهوة العربية بتغليف أنيق يليق بكل مناسبة، مع خيار التخصيص بالاسم.",
};

export default function GiftsPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "الهدايا" },
          ]}
        />
      </div>

      <Suspense
        fallback={
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <span className="text-[15px] text-[#8A7B6E]">جارٍ تحميل الهدايا...</span>
          </div>
        }
      >
        <GiftsView />
      </Suspense>

      <Footer />
    </div>
  );
}