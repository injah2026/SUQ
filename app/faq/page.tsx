import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import FaqContent from "@/components/faq/FaqContent";
import { faqHero } from "@/lib/faqData";

export const metadata = {
  title: "الأسئلة الشائعة | سوق مجاز",
  description:
    "إجابات على أكثر الأسئلة شيوعًا حول الطلبات والشحن والدفع والاستبدال والتخصيص في سوق مجاز، مع إمكانية البحث في الأسئلة.",
};

export default function FaqPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "الأسئلة الشائعة" },
          ]}
        />
      </div>

      <main className="w-full">
        <PageHero
          image={faqHero.image}
          label={faqHero.label}
          title={faqHero.title}
          text={faqHero.text}
        />
        <FaqContent />
      </main>

      <Footer />
    </div>
  );
}