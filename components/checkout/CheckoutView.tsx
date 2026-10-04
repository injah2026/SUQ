"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart/CartContext";
import EmptyCart from "@/components/cart/EmptyCart";
import StepCard from "./StepCard";
import ContactStep, { type ContactValue } from "./ContactStep";
import AddressStep, { type AddressValue } from "./AddressStep";
import ShippingStep from "./ShippingStep";
import PaymentStep from "./PaymentStep";
import GiftOptions, { type GiftValue } from "./GiftOptions";
import CheckoutSummary from "./CheckoutSummary";
import { coupons, GIFT_WRAP_FEE, FREE_SHIPPING_THRESHOLD, type Coupon } from "@/lib/cartData";
import {
  shippingMethods,
  paymentMethods,
  computeTotals,
  makeOrderNumber,
  LAST_ORDER_KEY,
  type LastOrder,
} from "@/lib/checkoutData";

export default function CheckoutView() {
  const router = useRouter();
  const { items, subtotal, giftWrap, clearCart } = useCart();

  const [step, setStep] = useState(1);
  const [contact, setContact] = useState<ContactValue>({ name: "", email: "", phone: "", guest: true });
  const [address, setAddress] = useState<AddressValue>({
    city: "",
    district: "",
    street: "",
    national: "",
    extra: "",
  });
  const [shippingId, setShippingId] = useState("standard");
  const [paymentId, setPaymentId] = useState("");
  const [gift, setGift] = useState<GiftValue>({ isGift: false, message: "", hidePrice: false });
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [error, setError] = useState("");

  if (items.length === 0) {
    return <EmptyCart />;
  }

  const method = shippingMethods.find((m) => m.id === shippingId) ?? shippingMethods[1];
  const freeShip = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = method.id === "pickup" ? 0 : freeShip ? 0 : method.fee;
  const giftWrapFee = giftWrap ? GIFT_WRAP_FEE : 0;
  const discount = coupon
    ? coupon.type === "percent"
      ? Math.round((subtotal * coupon.value) / 100)
      : coupon.value
    : 0;
  const { total, vat } = computeTotals(subtotal, shipping, giftWrapFee, discount);

  function applyCoupon(code: string) {
    const key = code.trim().toUpperCase();
    const found = coupons[key];
    if (!found) {
      setCoupon(null);
      return { ok: false, msg: "كود الخصم غير صحيح، حاول مرة أخرى" };
    }
    setCoupon(found);
    return { ok: true, msg: `تم تطبيق ${found.label} بنجاح` };
  }

  function pay() {
    if (!paymentId) {
      setError("الرجاء اختيار طريقة الدفع أولًا");
      setStep(4);
      return;
    }
    setError("");
    const order: LastOrder = {
      number: makeOrderNumber(),
      total,
      count: items.reduce((s, i) => s + i.qty, 0),
      city: address.city || "الرياض",
      method: method.name,
      date: new Date().toISOString(),
    };
    try {
      sessionStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
    } catch {}
    clearCart();
    router.push("/order-success");
  }

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
      <div className="mb-8 text-right">
        <h1 className="font-heading text-[28px] lg:text-[36px] font-semibold text-[#2B211B]">
          إتمام الطلب
        </h1>
        <p className="mt-2 text-[14px] text-[#8A7B6E]">أكمل خطواتك بسهولة — يمكنك الدفع كضيف بدون تسجيل.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-8 items-start">
        <div className="space-y-4">
          <StepCard
            index={1}
            title="معلومات التواصل"
            summary={contact.name ? `${contact.name} · ${contact.phone}` : undefined}
            open={step === 1}
            done={step > 1}
            onEdit={() => setStep(1)}
          >
            <ContactStep value={contact} onChange={setContact} onNext={() => setStep(2)} />
          </StepCard>

          <StepCard
            index={2}
            title="عنوان التوصيل"
            summary={address.city ? `${address.city}${address.district ? " · " + address.district : ""}` : undefined}
            open={step === 2}
            done={step > 2}
            onEdit={() => setStep(2)}
          >
            <AddressStep value={address} onChange={setAddress} onNext={() => setStep(3)} />
          </StepCard>

          <StepCard
            index={3}
            title="طريقة الشحن"
            summary={method.name}
            open={step === 3}
            done={step > 3}
            onEdit={() => setStep(3)}
          >
            <ShippingStep
              value={shippingId}
              onChange={setShippingId}
              onNext={() => setStep(4)}
              freeShip={freeShip}
            />
          </StepCard>

          <StepCard
            index={4}
            title="طريقة الدفع"
            summary={paymentId ? paymentMethods.find((p) => p.id === paymentId)?.name : undefined}
            open={step === 4}
            done={false}
            onEdit={() => setStep(4)}
          >
            <PaymentStep value={paymentId} onChange={setPaymentId} onPay={pay} total={total} />
          </StepCard>

          <GiftOptions value={gift} onChange={setGift} />

          {error && (
            <p className="flex items-center gap-2 rounded-2xl bg-[#FBEDE7] border border-[#EFCDBE] px-4 py-3 text-[13.5px] text-[#B4552F]">
              <span className="w-4 h-4 flex items-center justify-center text-[16px]">
                <i className="ri-error-warning-line"></i>
              </span>
              {error}
            </p>
          )}
        </div>

        <CheckoutSummary
          giftWrapFee={giftWrapFee}
          discount={discount}
          couponLabel={coupon?.label ?? ""}
          shipping={shipping}
          vat={vat}
          total={total}
          onApplyCoupon={applyCoupon}
          onPay={pay}
        />
      </div>
    </section>
  );
}