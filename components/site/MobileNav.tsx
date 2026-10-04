"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/site/Logo";
import { megaColumns, giftLinks } from "@/lib/nav";
import { useCart } from "@/components/cart/CartContext";
import { useAuth } from "@/components/auth/AuthProvider";

type Props = { open: boolean; onClose: () => void };

function Accordion({
  label,
  groups,
  onClose,
}: {
  label: string;
  groups: { title?: string; links: { label: string; href: string }[] }[];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <li className="border-b border-[#E8DFD3]">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-[15px] font-medium text-[#2B211B] cursor-pointer"
      >
        {label}
        <span className={`w-5 h-5 flex items-center justify-center text-xl text-[#8A6A4F] transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}>
          <i className="ri-add-line"></i>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-[520px] pb-4" : "max-h-0"}`}>
        <div className="flex flex-col gap-4">
          {groups.map((g, gi) => (
            <div key={g.title ?? gi}>
              {g.title && (
                <p className="text-[12px] tracking-[0.15em] text-[#C2A06B] mb-2">{g.title}</p>
              )}
              <ul className="flex flex-col gap-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="block text-[14.5px] text-[#8A7B6E] hover:text-[#8A6A4F] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function MobileNav({ open, onClose }: Props) {
  const { setOpen: setCartOpen } = useCart();
  const { openAuth, user } = useAuth();
  const router = useRouter();
  if (!open) return null;

  const shopGroups = megaColumns.map((c) => ({ title: c.title, links: c.links }));
  const giftGroups = [{ links: giftLinks }];

  const simpleLinks = [
    { label: "مجموعة البشت", href: "/collection/bisht" },
    { label: "قصتنا", href: "/about" },
    { label: "صمّم باسمك", href: "/custom" },
    { label: "للشركات", href: "/corporate" },
    { label: "تتبع طلبك", href: "/track-order" },
    { label: "الأسئلة الشائعة", href: "/faq" },
    { label: "تواصل معنا", href: "/contact" },
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-[#2B211B]/40" onClick={onClose}></div>
      <div className="relative mr-auto w-[85%] max-w-xs h-full bg-[#FFFDF9] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-[#E8DFD3]">
          <Link href="/" onClick={onClose} className="cursor-pointer">
            <Logo surface="#FFFDF9" tone="light" height={40} />
          </Link>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-2xl text-[#2B211B] cursor-pointer"
            aria-label="إغلاق"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          <ul className="flex flex-col">
            <Accordion label="تسوّق" groups={shopGroups} onClose={onClose} />
            <Accordion label="الهدايا" groups={giftGroups} onClose={onClose} />
            {simpleLinks.map((l) => (
              <li key={l.label} className="border-b border-[#E8DFD3]">
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="block py-4 text-[15px] font-medium text-[#2B211B] hover:text-[#8A6A4F] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                href="/collection/national-day"
                onClick={onClose}
                className="inline-flex items-center h-8 px-4 rounded-full bg-[#006C35] text-white text-[13px] font-medium whitespace-nowrap cursor-pointer hover:bg-[#005a2c] transition-colors"
              >
                اليوم الوطني
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-[#E8DFD3] p-5 flex flex-col gap-3">
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 h-12 px-5 rounded-full bg-[#25D366] text-white text-[15px] font-medium whitespace-nowrap cursor-pointer hover:bg-[#1EBE5A] transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center text-[22px]">
              <i className="ri-whatsapp-fill"></i>
            </span>
            تواصل معنا عبر واتساب
          </a>
          <div className="flex items-center gap-6 pt-1 text-[14px] text-[#8A7B6E]">
            <button
              onClick={() => {
                onClose();
                if (user) router.push("/account");
                else openAuth();
              }}
              className="flex items-center gap-2 hover:text-[#8A6A4F] transition-colors cursor-pointer"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-user-line"></i>
              </span>
              حسابي
            </button>
            <button
              onClick={() => {
                onClose();
                router.push("/wishlist");
              }}
              className="flex items-center gap-2 hover:text-[#8A6A4F] transition-colors cursor-pointer"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-heart-line"></i>
              </span>
              المفضلة
            </button>
            <button
              onClick={() => {
                onClose();
                setCartOpen(true);
              }}
              className="flex items-center gap-2 hover:text-[#8A6A4F] transition-colors cursor-pointer"
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-shopping-bag-line"></i>
              </span>
              السلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}