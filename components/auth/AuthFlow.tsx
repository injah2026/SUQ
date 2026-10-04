"use client";

import { useState } from "react";
import LoginForm, { type LoginMode } from "./LoginForm";
import OtpForm from "./OtpForm";
import NewUserForm, { type NewUserValue } from "./NewUserForm";
import { useAuth, type AuthUser } from "./AuthProvider";

type Step = "login" | "otp" | "new" | "done";

const KNOWN_KEY = "majaz_known_phones";

function getKnown(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KNOWN_KEY) || "[]");
  } catch {
    return [];
  }
}

function remember(value: string) {
  try {
    const list = getKnown();
    if (!list.includes(value)) localStorage.setItem(KNOWN_KEY, JSON.stringify([...list, value]));
  } catch {}
}

export default function AuthFlow({ compact = false, onDone }: { compact?: boolean; onDone?: () => void }) {
  const { loginUser, closeAuth } = useAuth();
  const [step, setStep] = useState<Step>("login");
  const [mode, setMode] = useState<LoginMode>("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState<NewUserValue>({ name: "", email: "", birthdate: "" });
  const [pending, setPending] = useState("");

  const target = mode === "phone" ? `+966 ${phone || "5X XXX XXXX"}` : email || "name@email.com";

  function send() {
    setPending(target);
    setStep("otp");
  }

  function confirmOtp() {
    const isKnown = getKnown().includes(pending);
    if (isKnown) {
      const saved = (() => {
        try {
          return JSON.parse(localStorage.getItem("majaz_user") || "null") as AuthUser | null;
        } catch {
          return null;
        }
      })();
      loginUser(saved ?? { name: "عميل مجاز", phone: mode === "phone" ? phone : undefined, email: mode === "email" ? email : undefined });
      setStep("done");
    } else {
      setNewUser((v) => ({ ...v, email: mode === "email" ? email : v.email }));
      setStep("new");
    }
  }

  function finishRegistration() {
    const user: AuthUser = {
      name: newUser.name.trim(),
      phone: mode === "phone" ? phone : undefined,
      email: newUser.email || (mode === "email" ? email : undefined),
      birthdate: newUser.birthdate || undefined,
    };
    remember(pending);
    loginUser(user);
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="text-right">
        <span className="w-16 h-16 rounded-full bg-[#E5F0E8] flex items-center justify-center text-[34px] text-[#0B3D2E]">
          <i className="ri-check-line"></i>
        </span>
        <h1 className="mt-6 font-heading text-[28px] lg:text-[32px] font-semibold text-[#2B211B]">
          أهلًا بك في مجاز
        </h1>
        <p className="mt-3 text-[14.5px] leading-7 text-[#8A7B6E]">
          تم تسجيل دخولك بنجاح. يمكنك الآن تتبع طلباتك وحفظ مفضلتك بسهولة.
        </p>
        <button
          type="button"
          onClick={onDone ?? closeAuth}
          className="mt-8 w-full h-[52px] rounded-full bg-[#0B3D2E] text-[#FFFDF9] text-[15px] font-bold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#0f5140]"
        >
          ابدأ التسوق
        </button>
      </div>
    );
  }

  return (
    <div className={compact ? "" : "w-full"}>
      {step === "login" && (
        <LoginForm
          mode={mode}
          setMode={setMode}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          onSend={send}
        />
      )}

      {step === "otp" && (
        <OtpForm target={mode === "phone" ? `+966 ${phone}` : email} onConfirm={confirmOtp} onEdit={() => setStep("login")} />
      )}

      {step === "new" && (
        <NewUserForm value={newUser} onChange={setNewUser} onSubmit={finishRegistration} />
      )}
    </div>
  );
}