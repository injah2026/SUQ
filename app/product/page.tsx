import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Gallery from "@/components/product/Gallery";
import ProductInfo from "@/components/product/ProductInfo";
import Accordions from "@/components/product/Accordions";
import BrandStory from "@/components/site/BrandStory";
import Reviews from "@/components/site/Reviews";
import RelatedProducts from "@/components/product/RelatedProducts";
import CorporateBanner from "@/components/site/CorporateBanner";
import Footer from "@/components/site/Footer";
import StickyBar from "@/components/product/StickyBar";

export const metadata = {
  title: "حقيبة شموخ البشت | سوق مجاز",
  description:
    "حقيبة شموخ البشت بجلد فاخر وتطريز ذهبي مستوحى من البشت السعودي. تعرّف على المواصفات والتفاصيل والألوان المتاحة وأضفها إلى سلتك من سوق مجاز.",
};

export default function ProductPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <main className="w-full pb-28 lg:pb-0">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pb-12 lg:pb-20">
            <div className="lg:order-2 lg:col-span-7">
              <Gallery />
            </div>
            <div className="lg:order-1 lg:col-span-5 lg:pt-6 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto no-scrollbar">
              <ProductInfo />
            </div>
          </section>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Accordions />
        </div>

        <BrandStory />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <Reviews />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <RelatedProducts />
        </div>

        <CorporateBanner />

        <Footer />
      </main>

      <StickyBar />
    </div>
  );
}