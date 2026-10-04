import type { ReactNode } from "react";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Breadcrumb from "@/components/site/Breadcrumb";
import Footer from "@/components/site/Footer";
import AccountShell from "./AccountShell";

export default function AccountPageLayout({
  title,
  subtitle,
  crumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  crumbs: string[];
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-[#F8F4EE] min-h-screen flex flex-col">
      <TopBar />
      <Header />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-16">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, ...crumbs.map((c) => ({ label: c }))]} />
      </div>

      <main className="w-full flex-1">
        <AccountShell title={title} subtitle={subtitle}>
          {children}
        </AccountShell>
      </main>

      <Footer />
    </div>
  );
}