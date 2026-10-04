import PaymentLogos from "./PaymentLogos";

export default function PaymentIcons() {
  return (
    <div className="flex flex-col gap-3">
      <PaymentLogos />
      <span className="text-[12.5px] text-[#8A7B6E]">
        قسّمها على 4 دفعات بدون فوائد عبر تابي وتمارا
      </span>
    </div>
  );
}