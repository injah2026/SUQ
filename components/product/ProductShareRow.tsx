"use client";

import { useState } from "react";

const socials = [
  { icon: "ri-whatsapp-line", label: "واتساب", base: "https://wa.me/?text=" },
  { icon: "ri-twitter-x-line", label: "إكس", base: "https://x.com/intent/tweet?url=" },
  { icon: "ri-snapchat-line", label: "سناب شات", base: "https://www.snapchat.com/scan?attachmentUrl=" },
];

export default function ProductShareRow() {
  const [copied, setCopied] = useState(false);

  const shareUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] text-[#8A7B6E]">شارك:</span>
      {socials.map((s) => (
        <a
          key={s.label}
          href={`${s.base}${encodeURIComponent(shareUrl())}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E8DFD3] text-[17px] text-[#6F6357] hover:border-[#C2A06B] hover:text-[#B8913A] transition-colors cursor-pointer"
        >
          <i className={s.icon}></i>
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="نسخ الرابط"
        title="نسخ الرابط"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E8DFD3] text-[17px] text-[#6F6357] hover:border-[#C2A06B] hover:text-[#B8913A] transition-colors cursor-pointer"
      >
        <i className={copied ? "ri-check-line" : "ri-link"}></i>
      </button>
      {copied && <span className="text-[12.5px] text-[#3F7A4A]">تم نسخ الرابط</span>}
    </div>
  );
}