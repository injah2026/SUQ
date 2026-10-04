"use client";

import { useMemo, useState } from "react";
import { customProducts, threadColors, fontStyles, EMBROIDERY_FEE } from "@/lib/customData";
import SectionLabel from "@/components/ui/SectionLabel";
import { useCart } from "@/components/cart/CartContext";
import ProductOptions from "./ProductOptions";
import NameField from "./NameField";
import StylePicker from "./StylePicker";
import CustomPreview from "./CustomPreview";
import PriceSummary from "./PriceSummary";

function StepBox({
  n,
  title,
  hint,
  children,
}: {
  n: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6 lg:p-7">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[14px] font-bold">
          {n}
        </span>
        <h3 className="font-heading text-[18px] font-semibold text-[#2B211B]">{title}</h3>
        {hint && <span className="ms-auto text-[12px] text-[#A99C8E]">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

export default function CustomStudio() {
  const { addItem } = useCart();
  const [productId, setProductId] = useState(customProducts[0].id);
  const [text, setText] = useState("");
  const [thread, setThread] = useState(threadColors[0].name);
  const [fontKey, setFontKey] = useState(fontStyles[0].key);
  const [added, setAdded] = useState(false);

  const product = customProducts.find((p) => p.id === productId) ?? customProducts[0];
  const color = threadColors.find((t) => t.name === thread)?.hex ?? "#C2A06B";
  const font = fontStyles.find((f) => f.key === fontKey) ?? fontStyles[0];
  const total = product.price + EMBROIDERY_FEE + font.extra;
  const canAdd = text.trim().length > 0;

  const cartId = useMemo(
    () => `custom-${productId}-${text.trim()}-${thread}-${fontKey}`,
    [productId, text, thread, fontKey]
  );

  function handleAdd() {
    if (!canAdd) return;
    addItem(
      {
        id: cartId,
        name: `${product.name} — تطريز «${text.trim()}»`,
        price: total,
        image: product.image,
      },
      1
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <section
      id="custom-studio"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20"
    >
      <div className="text-center mb-10 lg:mb-14 max-w-2xl mx-auto">
        <SectionLabel align="center">أداة التخصيص</SectionLabel>
        <h2 className="mt-0 font-heading text-[28px] lg:text-[38px] font-semibold text-[#2B211B]">
          صمّم قطعتك في 3 خطوات
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        <div className="space-y-5">
          <StepBox n="1" title="اختر القطعة">
            <ProductOptions products={customProducts} value={productId} onChange={setProductId} />
          </StepBox>

          <StepBox n="2" title="اكتب الاسم أو الحروف" hint="حتى 12 حرفًا">
            <NameField value={text} onChange={setText} fontKey={fontKey} />
          </StepBox>

          <StepBox n="3" title="لون الخيط ونمط الخط">
            <StylePicker
              thread={thread}
              fontKey={fontKey}
              onThread={setThread}
              onFont={setFontKey}
            />
          </StepBox>
        </div>

        <div className="space-y-5 lg:sticky lg:top-28">
          <CustomPreview image={product.image} text={text} color={color} fontClass={font.cls} />
          <PriceSummary
            productName={product.name}
            basePrice={product.price}
            embroideryFee={EMBROIDERY_FEE}
            fontExtra={font.extra}
            total={total}
            canAdd={canAdd}
            added={added}
            onAdd={handleAdd}
          />
        </div>
      </div>
    </section>
  );
}