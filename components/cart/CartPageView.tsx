"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import CartLineItem from "./CartLineItem";
import FreeShippingBar from "./FreeShippingBar";
import GiftWrapToggle from "./GiftWrapToggle";
import CouponField from "./CouponField";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import { coupons, GIFT_WRAP_FEE, shippingFor, type Coupon } from "@/lib/cartData";

export default function CartPageView() {
  const { items, subtotal, count, giftWrap } = useCart();
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  function apply(code: string) {
    const key = code.trim().toUpperCase();
    const found = coupons[key];
    if (!found) {
      setCoupon(null);
      return { ok: false, msg: "كود الخصم غير صحيح، حاول مرة أخرى" };
    }
    setCoupon(found);
    return { ok: true, msg: `تم تطبيق ${found.label} بنجاح` };
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  const giftWrapFee = giftWrap ? GIFT_WRAP_FEE : 0;
  const discount = coupon
    ? coupon.type === "percent"
      ? Math.round((subtotal * coupon.value) / 100)
      : coupon.value
    : 0;
  const shipping = shippingFor(subtotal);
  const total = subtotal + giftWrapFee - discount + shipping;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="mb-8 flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center text-[24px] text-[#8A6A4F]">
          <i className="ri-shopping-bag-3-line"></i>
        </span>
        <h1 className="font-heading text-[28px] lg:text-[36px] font-semibold text-[#2B211B]">
          سلة التسوق
        </h1>
        <span className="text-[13px] font-bold text-[#FFFDF9] bg-[#C2A06B] rounded-full px-3 py-1">
          {count}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12 items-start">
        <div className="space-y-6">
          <FreeShippingBar subtotal={subtotal} />
          <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
            <ul className="flex flex-col divide-y divide-[#EFE3CC]">
              {items.map((item) => (
                <li key={item.id} className="py-5 first:pt-0 last:pb-0">
                  <CartLineItem item={item} />
                </li>
              ))}
            </ul>
          </div>
          <GiftWrapToggle />
        </div>

        <div className="space-y-6">
          <CouponField onApply={apply} />
          <OrderSummary
            subtotal={subtotal}
            giftWrapFee={giftWrapFee}
            discount={discount}
            couponLabel={coupon?.label ?? ""}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </section>
  );
}