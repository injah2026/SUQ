import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import CorporateHero from "@/components/corporate/CorporateHero";
import ClientLogos from "@/components/corporate/ClientLogos";
import WhyMajaz from "@/components/corporate/WhyMajaz";
import Occasions from "@/components/corporate/Occasions";
import CorporatePackages from "@/components/corporate/CorporatePackages";
import HowWeWork from "@/components/corporate/HowWeWork";
import CorporateForm from "@/components/forms/CorporateForm";
import CorporateContact from "@/components/corporate/CorporateContact";

export const metadata = {
  title: "مجاز للأعمال | هدايا الشركات",
  description:
    "هدايا شركات فاخرة من سوق مجاز بتخصيص كامل وتغليف راقٍ وتوصيل للجهات، مثالية للمناسبات والمواسم والمنتجات التذكارية للعملاء والموظفين.",
};

export default function CorporatePage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "مجاز للأعمال" },
          ]}
        />
      </div>

      <main className="w-full">
        <CorporateHero />
        <ClientLogos />
        <WhyMajaz />
        <Occasions />
        <CorporatePackages />
        <HowWeWork />

        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <CorporateForm />
        </section>

        <CorporateContact />
      </main>

      <Footer />
    </div>
  );
}