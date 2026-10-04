import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import ShopView from "@/components/shop/ShopView";
import { Suspense } from "react";

export const metadata = {
  title: "المتجر | كل منتجات سوق مجاز",
  description:
    "تصفّح تشكيلة سوق مجاز الكاملة من حقائب البشت والسدو والإكسسوارات والهدايا الفاخرة، مع فلاتر للفئة والسعر واللون وترتيب حسب الأحدث والأكثر مبيعًا.",
};

export default function ShopPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "المتجر", href: "/shop" },
            { label: "كل المنتجات" },
          ]}
        />
      </div>

      <Suspense>
        <ShopView />
      </Suspense>

      <Footer />
    </div>
  );
}