import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import CheckoutView from "@/components/checkout/CheckoutView";
import { trustBadges } from "@/lib/data";

export const metadata = {
  title: "إتمام الطلب | سوق مجاز",
  description:
    "أكمل بيانات الشحن والدفع لإتمام طلبك من سوق مجاز بأمان، مع شحن سريع وخيارات دفع موثوقة وتغليف هدايا اختياري.",
};

export default function CheckoutPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8F4EE] flex flex-col">
      <CheckoutHeader />

      <main className="flex-1 w-full">
        <CheckoutView />
      </main>

      <footer className="w-full border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="w-full px-6 lg:px-12 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBadges.map((b) => (
            <span key={b.icon} className="flex items-center gap-2 text-[13px] text-[#8A7B6E]">
              <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#C2A06B]">
                <i className={b.icon}></i>
              </span>
              {b.label}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}