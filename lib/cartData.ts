export const FREE_SHIPPING_THRESHOLD = 300;
export const GIFT_WRAP_FEE = 15;
export const SHIPPING_FEE = 25;

export type Coupon = { type: "percent" | "fixed"; value: number; label: string };

export const coupons: Record<string, Coupon> = {
  SAVE10: { type: "percent", value: 10, label: "خصم 10%" },
  MAJAZ15: { type: "percent", value: 15, label: "خصم 15%" },
  WELCOME20: { type: "fixed", value: 20, label: "خصم 20 ر.س" },
};

export function shippingFor(subtotal: number): number {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
}