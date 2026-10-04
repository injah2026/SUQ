import { statusMeta, type OrderStatus } from "@/lib/accountData";

export default function StatusBadge({ status }: { status: OrderStatus }) {
  const meta = statusMeta[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[13px] font-bold px-3 py-1.5 rounded-full border ${meta.className}`}
    >
      <span className="w-4 h-4 flex items-center justify-center text-[15px]">
        <i className={meta.icon}></i>
      </span>
      {meta.label}
    </span>
  );
}