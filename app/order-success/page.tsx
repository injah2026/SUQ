import Link from "next/link";
import Logo from "@/components/site/Logo";
import OrderSuccessView from "@/components/order/OrderSuccessView";

export const metadata = {
  title: "تم استلام طلبك | سوق مجاز",
  description:
    "شكرًا لطلبك من سوق مجاز. تم استلام طلبك بنجاح وسنبدأ بتجهيزه وشحنه قريبًا، مع إمكانية تتبّع الطلب في أي وقت.",
};

export default function OrderSuccessPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8F4EE] flex flex-col">
      <header className="w-full bg-[#FFFDF9] border-b border-[#E8DFD3]">
        <div className="w-full px-6 lg:px-12 h-[72px] lg:h-[80px] flex items-center justify-center">
          <Link href="/" aria-label="سوق مجاز" className="cursor-pointer transition-opacity duration-300 hover:opacity-90">
            <Logo surface="#FFFDF9" tone="light" height={42} />
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full">
        <OrderSuccessView />
      </main>

      <footer className="w-full border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <p className="w-full px-6 py-6 text-center text-[13px] text-[#8A7B6E]">
          للاستفسار عن طلبك تواصل معنا عبر واتساب في أي وقت
        </p>
      </footer>
    </div>
  );
}