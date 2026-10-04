const rows = [
  { icon: "ri-checkbox-circle-fill", cls: "text-[#3F7A4A]", text: "متوفر – جاهز للشحن" },
  { icon: "ri-time-line", cls: "text-[#C2A06B]", text: "اطلبه خلال 3 ساعات ويُشحن اليوم" },
  { icon: "ri-truck-line", cls: "text-[#C2A06B]", text: "يصلك خلال 2–4 أيام عمل" },
];

export default function ProductStockBox() {
  return (
    <div className="rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] p-4 flex flex-col gap-2.5">
      {rows.map((r) => (
        <span key={r.text} className="flex items-center gap-2.5 text-[13.5px] text-[#4A4038]">
          <span className={`w-5 h-5 flex items-center justify-center text-[17px] ${r.cls}`}>
            <i className={r.icon}></i>
          </span>
          {r.text}
        </span>
      ))}
    </div>
  );
}