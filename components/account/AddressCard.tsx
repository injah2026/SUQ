import type { Address } from "@/lib/accountData";

export default function AddressCard({
  address,
  onEdit,
  onDelete,
  onDefault,
}: {
  address: Address;
  onEdit: () => void;
  onDelete: () => void;
  onDefault: () => void;
}) {
  return (
    <div
      className={`rounded-[24px] bg-[#FFFDF9] border p-6 flex flex-col ${
        address.isDefault ? "border-[#C2A06B]" : "border-[#E8DFD3]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[15px] font-bold text-[#2B211B]">
          <span className="w-5 h-5 flex items-center justify-center text-[18px] text-[#8A6A4F]">
            <i className="ri-map-pin-2-line"></i>
          </span>
          {address.label}
        </span>
        {address.isDefault ? (
          <span className="text-[12px] font-bold text-[#0B3D2E] bg-[#E9F5EE] border border-[#C4E4D2] px-3 py-1 rounded-full">
            افتراضي
          </span>
        ) : (
          <button
            type="button"
            onClick={onDefault}
            className="text-[12.5px] font-semibold text-[#8A6A4F] hover:text-[#6F5440] cursor-pointer transition-colors"
          >
            تعيين افتراضي
          </button>
        )}
      </div>

      <div className="mt-4 space-y-1.5 text-[14px] leading-7 text-[#5c5349] flex-1">
        <p className="font-semibold text-[#2B211B]">{address.name}</p>
        <p>{address.phone}</p>
        <p>
          {address.city}، {address.district}، {address.street}
        </p>
        <p className="text-[#8A7B6E]">العنوان الوطني {address.national}</p>
      </div>

      <div className="mt-5 pt-4 border-t border-[#EFE7DB] flex items-center gap-3">
        <button
          type="button"
          onClick={onEdit}
          className="h-10 px-5 rounded-full border border-[#E0D6C8] text-[13.5px] font-semibold text-[#2B211B] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:border-[#C2A06B] transition-colors"
        >
          <span className="w-4 h-4 flex items-center justify-center text-[16px]">
            <i className="ri-edit-line"></i>
          </span>
          تعديل
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="h-10 px-5 rounded-full border border-[#E0D6C8] text-[13.5px] font-semibold text-[#B4552F] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:border-[#B4552F] transition-colors"
        >
          <span className="w-4 h-4 flex items-center justify-center text-[16px]">
            <i className="ri-delete-bin-line"></i>
          </span>
          حذف
        </button>
      </div>
    </div>
  );
}