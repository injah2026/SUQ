"use client";

export type LoginMode = "phone" | "email";

export default function LoginForm({
  mode,
  setMode,
  phone,
  setPhone,
  email,
  setEmail,
  onSend,
}: {
  mode: LoginMode;
  setMode: (m: LoginMode) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  onSend: () => void;
}) {
  const canSend = mode === "phone" ? phone.replace(/\D/g, "").length >= 9 : /\S+@\S+\.\S+/.test(email);

  return (
    <div className="text-right">
      <h1 className="font-heading text-[30px] lg:text-[36px] font-semibold text-[#2B211B]">تسجيل الدخول</h1>
      <p className="mt-3 text-[14.5px] leading-7 text-[#8A7B6E]">
        سجّل دخولك لتتبع طلباتك وحفظ مفضلتك
      </p>

      <div className="mt-8">
        {mode === "phone" ? (
          <div className="flex items-stretch rounded-xl border border-[#E8DFD3] bg-[#FBF8F2] overflow-hidden focus-within:border-[#C2A06B] transition-colors" dir="ltr">
            <span className="flex items-center gap-2 px-3.5 border-r border-[#E8DFD3]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt="علم المملكة العربية السعودية"
                loading="lazy"
                decoding="async"
                className="w-6 h-4 rounded-sm object-cover shrink-0"
              />
              <span className="text-[15px] font-semibold text-[#2B211B]">+966</span>
            </span>
            <input
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, "").slice(0, 10))}
              onKeyDown={(e) => e.key === "Enter" && canSend && onSend()}
              placeholder="5X XXX XXXX"
              className="flex-1 h-[52px] min-w-0 bg-transparent px-4 text-[15px] tracking-wide text-[#2B211B] placeholder:text-[#A99C8E] outline-none"
            />
          </div>
        ) : (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && canSend && onSend()}
            placeholder="name@email.com"
            className="w-full h-[52px] rounded-xl border border-[#E8DFD3] bg-[#FBF8F2] px-4 text-[15px] text-[#2B211B] placeholder:text-[#A99C8E] outline-none focus:border-[#C2A06B] transition-colors"
          />
        )}

        <button
          type="button"
          disabled={!canSend}
          onClick={onSend}
          className="mt-4 w-full h-[52px] rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          أرسل رمز التحقق
        </button>
      </div>

      <div className="my-7 flex items-center gap-4">
        <span className="flex-1 h-px bg-[#E8DFD3]"></span>
        <span className="text-[13px] text-[#A99C8E]">أو</span>
        <span className="flex-1 h-px bg-[#E8DFD3]"></span>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          className="w-full h-[52px] rounded-full bg-[#2B211B] text-[#FFFDF9] text-[15px] font-semibold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors hover:bg-[#3a2e26]"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[20px]">
            <i className="ri-apple-fill"></i>
          </span>
          الدخول عبر Apple
        </button>
        <button
          type="button"
          className="w-full h-[52px] rounded-full bg-white border border-[#E8DFD3] text-[#2B211B] text-[15px] font-semibold inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer transition-colors hover:border-[#C2A06B]"
        >
          <span className="w-5 h-5 flex items-center justify-center text-[19px]">
            <i className="ri-google-fill"></i>
          </span>
          الدخول عبر Google
        </button>
      </div>

      <div className="mt-7 text-center">
        <button
          type="button"
          onClick={() => setMode(mode === "phone" ? "email" : "phone")}
          className="text-[14px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer underline underline-offset-4 decoration-[#C2A06B]/50"
        >
          {mode === "phone" ? "الدخول بالبريد الإلكتروني" : "الدخول برقم الجوال"}
        </button>
      </div>

      <p className="mt-8 text-center text-[12.5px] leading-6 text-[#A99C8E]">
        بتسجيلك أنت توافق على{" "}
        <span className="text-[#8A6A4F] cursor-pointer hover:underline">الشروط</span> و
        <span className="text-[#8A6A4F] cursor-pointer hover:underline">سياسة الخصوصية</span>
      </p>
    </div>
  );
}