import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import TrackView from "@/components/track/TrackView";
import { trackHero } from "@/lib/trackData";

export const metadata = {
  title: "تتبّع طلبك | سوق مجاز",
  description:
    "تابع حالة طلبك من سوق مجاز خطوة بخطوة: التجهيز ثم الشحن ثم التسليم، من خلال رقم الطلب أو رقم الجوال.",
};

export default function TrackOrderPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "تتبّع طلبك" },
          ]}
        />
      </div>

      <main className="w-full">
        <PageHero
          image="https://readdy.ai/api/search-image?query=Cinematic%20wide%20photograph%20of%20a%20warm%20beige%20delivery%20scene%20with%20a%20luxury%20craft%20gift%20box%20tied%20with%20a%20gold%20ribbon%20and%20a%20black%20leather%20Bisht%20pouch%20resting%20on%20a%20doorstep%2C%20soft%20natural%20morning%20light%2C%20generous%20negative%20space%20on%20the%20left%2C%20quiet%20luxury%20mood%2C%20warm%20sand%20tones%2C%20high%20detail&width=1920&height=900&seq=trackhero01&orientation=landscape"
          label={trackHero.label}
          title={trackHero.title}
          text={trackHero.text}
        />
        <TrackView />
      </main>

      <Footer />
    </div>
  );
}