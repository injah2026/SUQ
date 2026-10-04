"use client";

import { useEffect, useRef, useState } from "react";

const LENGTH = 4;
const RESEND_SECONDS = 45;

export default function OtpForm({
  target,
  onConfirm,
  onEdit,
}: {
  target: string;
  onConfirm: (code: string) => void;
  onEdit: () => void;
}) {
  const [digits, setDigits] = useState<string[]>(Array(LENGTH).fill(""));
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const code = digits.join("");
  const complete = code.length === LENGTH;

  function setAt(i: number, val: string) {
    const clean = val.replace(/\D/g, "");
    if (!clean) {
      setDigits((prev) => prev.map((d, idx) => (idx === i ? "" : d)));
      return;
    }
    setDigits((prev) => {
      const next = [...prev];
      if (clean.length > 1) {
        clean.split("").forEach((c, k) => {
          if (i + k < LENGTH) next[i + k] = c;
        });
      } else {
        next[i] = clean;
      }
      return next;
    });
    const jump = Math.min(i + clean.length, LENGTH - 1);
    refs.current[jump]?.focus();
  }

  function onKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i < LENGTH - 1) refs.current[i + 1]?.focus();
    if (e.key === "ArrowRight" && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "Enter" && complete) onConfirm(code);
  }

  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="text-right">
      <h1 className="font-heading text-[30px] lg:text-[36px] font-semibold text-[#2B211B]">
        أدخل رمز التحقق
      </h1>
      <p className="mt-3 flex flex-wrap items-center gap-2 text-[14.5px] text-[#8A7B6E]">
        أرسلنا رمزًا إلى <span className="font-semibold text-[#2B211B]" dir="ltr">{target}</span>
        <button
          type="button"
          onClick={onEdit}
          className="text-[13.5px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer underline underline-offset-4"
        >
          تعديل
        </button>
      </p>

      <div dir="ltr" className="mt-8 flex items-center justify-center gap-3">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            value={d}
            inputMode="numeric"
            maxLength={1}
            onChange={(e) => setAt(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            className="w-16 h-[72px] rounded-2xl border border-[#E8DFD3] bg-[#FBF8F2] text-center text-[24px] font-bold text-[#2B211B] outline-none focus:border-[#C2A06B] focus:bg-white transition-colors"
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        {seconds > 0 ? (
          <p className="text-[13.5px] text-[#A99C8E]" suppressHydrationWarning={true}>
            إعادة الإرسال خلال{" "}
            <span className="font-semibold text-[#8A7B6E]" dir="ltr">
              {mm}:{ss}
            </span>
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setSeconds(RESEND_SECONDS)}
            className="text-[13.5px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] transition-colors cursor-pointer underline underline-offset-4"
          >
            إعادة إرسال الرمز
          </button>
        )}
      </div>

      <button
        type="button"
        disabled={!complete}
        onClick={() => onConfirm(code)}
        className="mt-4 w-full h-[52px] rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        تأكيد
      </button>

      <p className="mt-6 text-center text-[12.5px] leading-6 text-[#A99C8E]">
        لم يصلك الرمز؟ تأكد من رقمك أو أعد الإرسال بعد قليل.
      </p>
    </div>
  );
}