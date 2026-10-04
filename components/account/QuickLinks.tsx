import Link from "next/link";
import { accountMenu } from "@/lib/accountData";

export default function QuickLinks() {
  const links = accountMenu.filter((m) => m.key !== "overview");

  return (
    <div className="rounded-[24px] bg-[#FFFDF9] border border-[#E8DFD3] p-6">
      <h2 className="font-heading text-[19px] font-semibold text-[#2B211B]">روابط سريعة</h2>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {links.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="group rounded-2xl bg-[#FBF8F2] border border-[#EFE3CC] px-4 py-5 flex flex-col items-center gap-3 text-center cursor-pointer hover:border-[#C2A06B] hover:bg-[#FFFDF9] transition-colors"
          >
            <span className="w-11 h-11 rounded-full bg-[#FFFDF9] border border-[#E8DFD3] flex items-center justify-center text-[22px] text-[#8A6A4F] group-hover:bg-[#0B3D2E] group-hover:text-[#FFFDF9] transition-colors">
              <i className={item.icon}></i>
            </span>
            <span className="text-[14px] font-semibold text-[#2B211B]">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}