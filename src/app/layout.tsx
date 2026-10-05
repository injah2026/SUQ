import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./fonts.css";
import "./style.css";
import "./refinement.css";

export const metadata: Metadata = {
  title: "سوق مجاز — أثرٌ من هنا",
  description: "سوق مجاز: قطع وإكسسوارات مستوحاة من الإرث السعودي، هدايا مختارة وتطريز شخصي.",
  icons: { icon: "/favicon.svg?v=4.4" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#183E32",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <Script src="/theme.js?v=4" strategy="beforeInteractive" />
        <a className="skip" href="#main">انتقل للمحتوى</a>
        <div id="header"></div>
        {children}
        <div id="footer"></div>
        <div id="overlays"></div>
        <div className="toast" role="status" hidden></div>
      </body>
    </html>
  );
}
