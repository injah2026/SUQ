import Header from "@/components/site/Header";
import TopBar from "@/components/site/TopBar";
import Footer from "@/components/site/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeTrustBar from "@/components/home/HomeTrustBar";
import CategoryGrid from "@/components/home/CategoryGrid";
import NationalDaySection from "@/components/home/NationalDaySection";
import BestSellers from "@/components/home/BestSellers";
import JalabiyaSection from "@/components/home/JalabiyaSection";
import CollectionSpotlight from "@/components/home/CollectionSpotlight";
import GiftBundles from "@/components/home/GiftBundles";
import CustomDesignBanner from "@/components/home/CustomDesignBanner";
import CorporateGifts from "@/components/home/CorporateGifts";
import BrandStoryHome from "@/components/home/BrandStoryHome";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import InstagramGallery from "@/components/home/InstagramGallery";
import { bishtSpotlight, saduSpotlight } from "@/lib/homeData";

export const metadata = {
  title: "سوق مجاز | فخامة البشت والسدو في تفاصيل يومك",
  description:
    "تسوّق حقائب البشت والسدو والمسابح والأكواب وبكجات الهدايا الفاخرة من سوق مجاز، بلمسات تراثية سعودية وتطريز ذهبي وصناعة يدوية مع توصيل سريع.",
};

export default function Home() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <main className="w-full">
        <HomeHero />
        <HomeTrustBar />
        <CategoryGrid />
        <NationalDaySection />
        <BestSellers />
        <JalabiyaSection />

        <CollectionSpotlight
          label={bishtSpotlight.label}
          title={bishtSpotlight.title}
          lines={bishtSpotlight.lines}
          image={bishtSpotlight.image}
          href="/collection/bisht"
        />

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-[#E8DFD3]"></div>
        </div>

        <CollectionSpotlight
          label={saduSpotlight.label}
          title={saduSpotlight.title}
          lines={saduSpotlight.lines}
          image={saduSpotlight.image}
          reverse
          href="/collection/sadu"
        />

        <GiftBundles />
        <CustomDesignBanner />
        <CorporateGifts />
        <BrandStoryHome />
        <ReviewsCarousel />
        <InstagramGallery />

        <Footer />
      </main>
    </div>
  );
}