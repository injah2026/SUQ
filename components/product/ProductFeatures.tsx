const features = [
  "جلد طبيعي فاخر بملمس ناعم",
  "تطريز ذهبي يدوي مستوحى من البشت",
  "بطانة داخلية وجيب صغير",
  "المقاس: 25 × 18 سم",
];

export default function ProductFeatures() {
  return (
    <ul className="flex flex-col gap-2">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#4A4038]">
          <span className="w-5 h-5 flex items-center justify-center text-[17px] text-[#C2A06B]">
            <i className="ri-checkbox-circle-fill"></i>
          </span>
          {f}
        </li>
      ))}
    </ul>
  );
}