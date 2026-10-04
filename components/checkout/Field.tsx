"use client";

export default function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  required,
  maxLength,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  icon?: string;
  required?: boolean;
  maxLength?: number;
  hint?: string;
}) {
  return (
    <label className="block text-right">
      <span className="block mb-2 text-[13.5px] font-semibold text-[#2B211B]">
        {label}
        {required && <span className="text-[#B4552F]"> *</span>}
      </span>
      <span className="relative block">
        {icon && (
          <span className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 flex items-center justify-center text-[18px] text-[#A99C8E] pointer-events-none">
            <i className={icon}></i>
          </span>
        )}
        <input
          type={type}
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-12 rounded-xl bg-[#FBF8F2] border border-[#E8DFD3] text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors ${
            icon ? "ps-12 pe-4" : "px-4"
          }`}
        />
      </span>
      {hint && <span className="mt-1.5 block text-[12px] text-[#A99C8E]">{hint}</span>}
    </label>
  );
}