import Link from "next/link";

export type Crumb = string | { label: string; href?: string };

const defaultItems: Crumb[] = [
  { label: "الرئيسية", href: "/" },
  { label: "منتجات البشت" },
  { label: "حقيبة شموخ البشت" },
];

export default function Breadcrumb({
  items = defaultItems,
  tone = "light",
}: {
  items?: Crumb[];
  tone?: "light" | "dark";
}) {
  const crumbs: { label: string; href?: string }[] = (items as Crumb[]).map((it) => (typeof it === "string" ? { label: it } : it));
  const dark = tone === "dark";

  return (
    <nav aria-label="مسار التنقل" className="w-full py-7">
      <ol className={`flex items-center flex-wrap gap-2 text-[13px] ${dark ? "text-[#FFFDF9]/75" : "text-[#8A7B6E]"}`}>
        {crumbs.map((item, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span className={isLast ? `font-semibold ${dark ? "text-[#FFFDF9]" : "text-[#2B211B]"}` : ""}>{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors cursor-pointer ${dark ? "hover:text-[#FFFDF9]" : "hover:text-[#8A6A4F]"}`}
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <span className={dark ? "text-[#FFFDF9]/50" : "text-[#C2A06B]/70"}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}