import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import AboutHero from "@/components/about/AboutHero";
import StoryTimeline from "@/components/about/StoryTimeline";
import ValuesSection from "@/components/about/ValuesSection";
import ArtisansSection from "@/components/about/ArtisansSection";
import StatsSection from "@/components/about/StatsSection";
import AboutCta from "@/components/about/AboutCta";

export const metadata = {
  title: "قصتنا | سوق مجاز",
  description:
    "تعرّف على حكاية مجاز: رحلة البشت والسدو من البداية والفكرة إلى الحرفة واليوم، وقيمنا وحرفيينا الذين يصنعون كل قطعة يدويًا.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "قصتنا" },
          ]}
        />
      </div>

      <main className="w-full">
        <AboutHero />
        <StoryTimeline />
        <ValuesSection />
        <ArtisansSection />
        <StatsSection />
        <div className="pt-14 lg:pt-20">
          <AboutCta />
        </div>
      </main>

      <Footer />
    </div>
  );
}