import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import CustomHero from "@/components/custom/CustomHero";
import CustomStudio from "@/components/custom/CustomStudio";
import CustomSteps from "@/components/custom/CustomSteps";
import WorksGallery from "@/components/custom/WorksGallery";
import CustomFaq from "@/components/custom/CustomFaq";

export const metadata = {
  title: "صمّم باسمك | سوق مجاز",
  description:
    "اطلب تصميمًا مخصصًا باسمك أو مناسبتك على حقائب البشت والسدو والهدايا الفاخرة، مع معاينة مباشرة وتطريز ذهبي يدوي من سوق مجاز.",
};

export default function CustomPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "صمّم باسمك" },
          ]}
        />
      </div>

      <main className="w-full">
        <CustomHero />
        <CustomStudio />
        <CustomSteps />
        <WorksGallery />
        <CustomFaq />
      </main>

      <Footer />
    </div>
  );
}