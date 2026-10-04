import Link from "next/link";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function NotFound() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center text-center">
        <span className="font-heading text-[80px] lg:text-[120px] leading-none font-semibold text-[#C2A06B]">
          404
        </span>

        <h1 className="mt-6 font-heading text-[30px] lg:text-[44px] font-semibold text-[#2B211B]">
          الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-[16px] lg:text-[17px] leading-9 text-[#8A7B6E] max-w-xl">
          يبدو أن الرابط الذي تبحث عنه غير متوفر أو تم نقله. لا تقلق، تشكيلتنا كاملة بانتظارك.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="h-[52px] px-8 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap hover:bg-[#6F5440] transition-colors cursor-pointer"
          >
            <span className="w-5 h-5 flex items-center justify-center text-[18px]">
              <i className="ri-store-2-line"></i>
            </span>
            العودة للمتجر
          </Link>
          <Link
            href="/"
            className="h-[52px] px-8 rounded-full border-[1.5px] border-[#2B211B] text-[#2B211B] text-[15px] font-bold inline-flex items-center justify-center gap-2.5 whitespace-nowrap hover:bg-[#2B211B] hover:text-[#FFFDF9] transition-colors cursor-pointer"
          >
            الصفحة الرئيسية
          </Link>
        </div>

        <div className="mt-14 w-full max-w-3xl rounded-[28px] overflow-hidden border border-[#E8DFD3]">
          <img
            src="https://readdy.ai/api/search-image?query=Warm%20minimalist%20flat%20lay%20of%20a%20black%20leather%20Bisht%20pouch%20with%20gold%20embroidery%20and%20a%20small%20folded%20gift%20card%20on%20a%20soft%20beige%20linen%20surface%20beside%20dried%20pampas%2C%20quiet%20luxury%20brand%20mood%20photography%2C%20warm%20sand%20tones%2C%20soft%20natural%20light%2C%20high%20detail&width=1600&height=700&seq=notfound01&orientation=landscape"
            alt="حقيبة بشت جلدية مطرزة بالذهب مع بطاقة هدية من سوق مجاز"
            loading="lazy"
            decoding="async"
            className="w-full h-[220px] lg:h-[280px] object-cover object-top"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}