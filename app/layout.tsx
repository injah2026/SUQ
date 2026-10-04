import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Almarai } from "next/font/google";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { CartProvider } from "@/components/cart/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import CartToast from "@/components/cart/CartToast";
import { WishlistProvider } from "@/components/wishlist/WishlistContext";
import { AuthProvider } from "@/components/auth/AuthProvider";
import AuthModal from "@/components/auth/AuthModal";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-ibm",
});

const almarai = Almarai({
  weight: ["700"],
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-almarai",
});

const brandGlyph =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="28" fill="#2B211B"/><text x="60" y="62" text-anchor="middle" dominant-baseline="central" fill="#B8913A" font-family="Aref Ruqaa, serif" font-weight="700" font-size="34">سوق مجاز</text></svg>';
const faviconUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(brandGlyph)}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://suqmajaz.com"),
  title: "سوق مجاز | SUQ MAJAZ",
  description:
    "سوق مجاز: فخامة البشت والسدو في تفاصيل يومك. حقائب ومسابح وأكواب وهدايا فاخرة مستوحاة من التراث السعودي بصناعة يدوية وتطريز ذهبي.",
  keywords: ["سوق مجاز", "مجاز", "البشت", "السدو", "هدايا فاخرة", "تراث سعودي", "حقائب", "مسابح"],
  icons: {
    icon: [{ url: faviconUrl, type: "image/svg+xml" }],
    apple: [{ url: faviconUrl }],
    shortcut: [faviconUrl],
  },
  openGraph: {
    title: "سوق مجاز | SUQ MAJAZ",
    description: "فخامة البشت والسدو في تفاصيل يومك.",
    type: "website",
    locale: "ar_SA",
    siteName: "سوق مجاز",
  },
  twitter: {
    card: "summary_large_image",
    title: "سوق مجاز | SUQ MAJAZ",
    description: "فخامة البشت والسدو في تفاصيل يومك.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Aref+Ruqaa:wght@400;700&family=Cormorant+Garamond:wght@400;500;600;700&family=Reem+Kufi+Ink&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body{ background:#F8F4EE; color:#2B211B; font-family:var(--font-ibm), system-ui, sans-serif; font-weight:400; }
              html, body{ overflow-x: clip; }
              img{ max-width:100%; }
              *{ -webkit-tap-highlight-color: transparent; }
              @media (max-width: 1023px){
                input:not([type="checkbox"]):not([type="radio"]), textarea, select{ font-size: 16px; }
              }
              .tap-target{ min-height:44px; min-width:44px; }
              .safe-bottom{ padding-bottom: env(safe-area-inset-bottom, 0px); }
              button, input, select, textarea{ font-family:var(--font-ibm), system-ui, sans-serif; }
              .font-heading, h1, h2, h3, h4{ font-family:var(--font-ibm), system-ui, sans-serif; }
              h1, h2, h3, h4, h5, h6{ font-weight:600; line-height:1.3; letter-spacing:normal; }
              p, li{ font-weight:400; line-height:1.8; }
              button, [type="button"], [type="submit"], nav a, nav button, [role="menuitem"]{ font-weight:500 !important; }
              input, textarea, select{ font-weight:400; }
              @media (max-width:640px){
                .p-8{ padding:1.5rem !important; }
                .px-8{ padding-left:1.25rem !important; padding-right:1.25rem !important; }
                .-mx-8{ margin-left:-1.25rem !important; margin-right:-1.25rem !important; }
              }
              .no-scrollbar::-webkit-scrollbar{ display:none; }
              .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none; }
              .majaz-guard{
                position:absolute;
                left:-9999px;
                top:-9999px;
                width:1px;
                height:1px;
                overflow:hidden;
                opacity:0;
                pointer-events:none;
              }
              .surface-dark{ color:#FFFDF9; }
            `,
          }}
        />
      </head>
      <body className={`${ibmPlex.variable} ${almarai.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <CartDrawer />
              <CartToast />
            </WishlistProvider>
          </CartProvider>
          <AuthModal />
        </AuthProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}