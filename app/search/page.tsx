import { Suspense } from "react";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import SearchView from "@/components/search/SearchView";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata = {
  title: "البحث في سوق مجاز",
  description:
    "ابحث بين كل منتجات سوق مجاز من حقائب البشت والسدو والإكسسوارات والهدايا واعثر على ما يناسبك بسرعة.",
};

function SearchFallback() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="h-14 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] animate-pulse"></div>
      <p className="mt-6 text-center text-[14.5px] text-[#8A7B6E]">جارٍ التحميل...</p>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "البحث" },
          ]}
        />
      </div>

      <main className="w-full">
        <section className="w-full border-y border-[#E8DFD3] bg-[#FFFDF9]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 text-center">
            <SectionLabel align="center">المتجر</SectionLabel>
            <h1 className="mt-0 font-heading text-[28px] lg:text-[40px] font-semibold text-[#2B211B]">
              ابحث في مجاز
            </h1>
          </div>
        </section>

        <Suspense fallback={<SearchFallback />}>
          <SearchView />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}