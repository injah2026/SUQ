"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/site/Logo";
import DesktopNav from "@/components/site/DesktopNav";
import MobileNav from "@/components/site/MobileNav";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import { useCart } from "@/components/cart/CartContext";
import { useWishlist } from "@/components/wishlist/WishlistContext";
import { useAuth } from "@/components/auth/AuthProvider";
import cartStyles from "@/components/cart/cart.module.css";

const DUR = "transition-all duration-[300ms] ease-out";

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="absolute top-1 end-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#C2A06B] text-[#FFFDF9] text-[11px] font-bold flex items-center justify-center">
      {count}
    </span>
  );
}

function IconButton({
  label,
  icon,
  onClick,
  badge,
  className = "",
}: {
  label: string;
  icon: string;
  onClick: () => void;
  badge?: number;
  className?: string;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`relative w-11 h-11 flex items-center justify-center text-[22px] text-[#2B211B] hover:text-[#B8913A] transition-colors cursor-pointer shrink-0 ${className}`}
    >
      <i className={icon}></i>
      <CountBadge count={badge ?? 0} />
    </button>
  );
}

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [compact, setCompact] = useState(false);
  const [query, setQuery] = useState("");
  const [cartBounce, setCartBounce] = useState(false);
  const [ready, setReady] = useState(false);
  const { setOpen: setCartOpen, count } = useCart();
  const { count: wishCount } = useWishlist();
  const { openAuth, user } = useAuth();
  const prevCount = useRef(count);
  const router = useRouter();

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (count > prevCount.current) {
      setCartBounce(true);
      const t = setTimeout(() => setCartBounce(false), 650);
      prevCount.current = count;
      return () => clearTimeout(t);
    }
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    let raf = 0;
    const run = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setCompact(window.scrollY > 80);
      });
    };
    run();
    window.addEventListener("scroll", run, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", run);
    };
  }, []);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  const accountClick = () => (user ? router.push("/account") : openAuth());

  const dur = ready ? DUR : "";

  const headerStyle: CSSProperties = compact
    ? {
        backgroundColor: "rgba(250,247,242,0.9)",
        backdropFilter: "blur(16px) saturate(150%)",
        WebkitBackdropFilter: "blur(16px) saturate(150%)",
        borderBottomColor: "rgba(232,223,211,0.8)",
        boxShadow: "0 12px 34px -28px rgba(43,33,27,0.45)",
      }
    : {
        backgroundColor: "#FFFDF9",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottomColor: "transparent",
        boxShadow: "none",
      };

  const logoTransform = compact
    ? "translate(-100%, -50%) scale(0.78)"
    : "translate(-50%, -50%) scale(1)";

  const iconCluster: ReactNode = (
    <div className="flex items-center gap-1 shrink-0">
      <div className={`overflow-hidden ${dur} ${compact ? "w-11 opacity-100" : "w-0 opacity-0"}`}>
        <IconButton label="بحث" icon="ri-search-line" onClick={() => router.push("/search")} />
      </div>
      <IconButton label="حسابي" icon="ri-user-line" onClick={accountClick} />
      <IconButton
        label="المفضلة"
        icon="ri-heart-line"
        onClick={() => router.push("/wishlist")}
        badge={wishCount}
      />
      <IconButton
        label="السلة"
        icon="ri-shopping-bag-line"
        onClick={() => setCartOpen(true)}
        badge={count}
        className={cartBounce ? cartStyles.bounce : ""}
      />
    </div>
  );

  return (
    <>
      <header
        style={headerStyle}
        className={`fixed top-0 inset-x-0 z-40 border-b ${dur}`}
      >
        <div
          className={`w-full overflow-hidden ${dur} ${
            compact ? "h-0 opacity-0 -translate-y-full" : "h-[38px] opacity-100 translate-y-0"
          }`}
        >
          <AnnouncementBar />
        </div>

        <div
          className={`hidden lg:block relative w-full max-w-[1440px] mx-auto ${dur} ${
            compact ? "h-[68px]" : "h-[140px]"
          }`}
        >
          <form
            onSubmit={submitSearch}
            style={{ top: "24px", right: "32px" }}
            className={`absolute z-40 flex items-center h-11 w-[340px] rounded-full overflow-hidden border border-[#E8DFD3] bg-white ${dur} ${
              compact ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            }`}
          >
            <div className="relative w-full h-full">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="ابحث عن هدية أو منتج..."
                className="w-full h-full bg-transparent ps-5 pe-12 text-[14px] text-[#2B211B] placeholder:text-[#A99A8B] outline-none"
              />
              <button
                type="submit"
                aria-label="بحث"
                className="absolute top-1/2 end-1 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-[#8A6A4F] hover:text-[#B8913A] transition-colors cursor-pointer"
              >
                <i className="ri-search-line"></i>
              </button>
            </div>
          </form>

          <div
            style={{ top: compact ? "12px" : "24px", left: "32px" }}
            className={`absolute z-40 ${dur}`}
          >
            {iconCluster}
          </div>

          <Link
            href="/"
            aria-label="سوق مجاز"
            style={{
              left: compact ? "calc(100% - 32px)" : "50%",
              top: compact ? "50%" : "46px",
              transform: logoTransform,
              transformOrigin: "right center",
            }}
            className={`group absolute z-40 inline-flex cursor-pointer hover:opacity-90 ${dur}`}
          >
            <Logo surface="#FFFDF9" tone="light" height={56} />
          </Link>

          <div
            style={{ top: compact ? "10px" : "92px" }}
            className={`absolute inset-x-0 z-30 h-12 border-y ${dur} ${
              compact ? "border-transparent" : "border-[#E8DFD3]"
            }`}
          >
            <DesktopNav light={false} />
          </div>
        </div>

        <div className={`lg:hidden relative ${dur} ${compact ? "h-[60px]" : "h-[72px]"}`}>
          <Link
            href="/"
            aria-label="سوق مجاز"
            className={`group absolute left-1/2 top-1/2 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 cursor-pointer ${dur} ${
              compact ? "scale-[0.85]" : "scale-100"
            }`}
          >
            <Logo surface="#FFFDF9" tone="light" height={44} />
          </Link>

          <button
            onClick={() => setDrawer(true)}
            aria-label="القائمة"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-2xl text-[#2B211B] cursor-pointer transition-colors"
          >
            <i className="ri-menu-line"></i>
          </button>

          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center gap-0.5">
            <IconButton label="حسابي" icon="ri-user-line" onClick={accountClick} />
            <IconButton
              label="السلة"
              icon="ri-shopping-bag-line"
              onClick={() => setCartOpen(true)}
              badge={count}
              className={cartBounce ? cartStyles.bounce : ""}
            />
          </div>
        </div>
      </header>

      <MobileNav open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
}