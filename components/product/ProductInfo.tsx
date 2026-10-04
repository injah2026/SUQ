"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { colorOptions, galleryImages } from "@/lib/data";
import { useCart } from "@/components/cart/CartContext";
import PaymentLogos from "./PaymentLogos";
import TrustRow from "./TrustRow";
import ProductPriceBox from "./ProductPriceBox";
import ProductFeatures from "./ProductFeatures";
import ProductPersonalize from "./ProductPersonalize";
import ProductPurchase from "./ProductPurchase";
import ProductStockBox from "./ProductStockBox";
import ProductShareRow from "./ProductShareRow";

export default function ProductInfo() {
  const [color, setColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [personalize, setPersonalize] = useState(false);
  const [engraving, setEngraving] = useState("");
  const [gift, setGift] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const unitPrice = 150 + (personalize ? 30 : 0);

  const add = () =>
    addItem(
      {
        id: "حقيبة شموخ البشت",
        name: "حقيبة شموخ البشت",
        price: unitPrice,
        image: galleryImages[0].src,
        color: colorOptions[color].name,
      },
      qty
    );

  const addToCart = () => {
    add();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const buyNow = () => {
    add();
    router.push("/checkout");
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2.5">
        <span className="text-[12px] tracking-[0.25em] text-[#C2A06B]">مجموعة البشت</span>
        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#C2A06B]/15 text-[#8A6A4F]">
          الأكثر مبيعًا
        </span>
      </div>

      <h1 className="mt-3 text-[34px] leading-[1.15] font-semibold text-[#2B211B]">
        حقيبة شموخ البشت
      </h1>
      <p className="mt-2 text-[16px] text-[#8A7B6E]">فخامة البشت.. في تفاصيل يومك</p>

      <div className="mt-3.5 flex items-center gap-2">
        <span className="flex items-center gap-0.5 text-[#D9A94E]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="w-4 h-4 flex items-center justify-center text-[15px]">
              <i className="ri-star-fill"></i>
            </span>
          ))}
        </span>
        <span className="text-[13px] text-[#8A7B6E]">4.8 (24 تقييم)</span>
      </div>

      <div className="mt-4">
        <ProductPriceBox price={unitPrice} oldPrice={300} />
      </div>

      <div className="mt-4">
        <ProductFeatures />
      </div>

      <div className="mt-4">
        <p className="text-[13px] text-[#8A7B6E]">
          اللون: <span className="font-semibold text-[#2B211B]">{colorOptions[color].name}</span>
        </p>
        <div className="mt-2.5 flex gap-3">
          {colorOptions.map((c, i) => (
            <button
              key={c.name}
              type="button"
              aria-label={c.name}
              onClick={() => setColor(i)}
              className={`w-9 h-9 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                color === i ? "border-[#C2A06B]" : "border-[#E8DFD3] hover:border-[#C2A06B]/50"
              }`}
            >
              <span className="w-6 h-6 rounded-full border border-black/10" style={{ background: c.swatch }}></span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <ProductPersonalize
          personalized={personalize}
          onTogglePersonal={setPersonalize}
          name={engraving}
          onName={setEngraving}
          gift={gift}
          onGift={setGift}
        />
      </div>

      <div className="mt-4">
        <ProductPurchase qty={qty} setQty={setQty} onAdd={addToCart} onBuy={buyNow} added={added} price={unitPrice} />
      </div>

      <div className="mt-4">
        <ProductStockBox />
      </div>

      <div className="mt-4 rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] p-4">
        <PaymentLogos />
      </div>

      <TrustRow />

      <div className="mt-5">
        <ProductShareRow />
      </div>
    </div>
  );
}