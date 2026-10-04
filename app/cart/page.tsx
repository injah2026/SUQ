import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import CartPageView from "@/components/cart/CartPageView";
import RecommendedProducts from "@/components/cart/RecommendedProducts";

export const metadata = {
  title: "سلة التسوق | سوق مجاز",
  description:
    "راجع قطعك المفضلة في سلة تسوق سوق مجاز، طبّق كود الخصم، وأكمل عملية الشراء بسهولة وأمان مع شحن سريع.",
};

export default function CartPage() {
  return (
    <div className="w-full bg-[#F8F4EE]">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "سلة التسوق" },
          ]}
        />
      </div>

      <main className="w-full">
        <CartPageView />
        <RecommendedProducts />
      </main>

      <Footer />
    </div>
  );
}