"use client";

import { useState } from "react";
import AddressCard from "./AddressCard";
import AddressFormModal from "./AddressFormModal";
import AccountEmpty from "./AccountEmpty";
import { addresses as seed, type Address } from "@/lib/accountData";

export default function AddressesSection() {
  const [list, setList] = useState<Address[]>(seed);
  const [modal, setModal] = useState<{ open: boolean; edit?: Address }>({ open: false });

  function save(data: Omit<Address, "id">, id?: string) {
    setList((prev) => {
      let next = id ? prev.map((a) => (a.id === id ? { ...data, id } : a)) : [...prev, { ...data, id: `a${Date.now()}` }];
      if (data.isDefault) {
        const targetId = id ?? next[next.length - 1].id;
        next = next.map((a) => ({ ...a, isDefault: a.id === targetId }));
      }
      return next;
    });
    setModal({ open: false });
  }

  function remove(id: string) {
    setList((prev) => prev.filter((a) => a.id !== id));
  }

  function makeDefault(id: string) {
    setList((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="text-[14px] text-[#8A7B6E]">{list.length} عناوين محفوظة</span>
        <button
          type="button"
          onClick={() => setModal({ open: true })}
          className="h-11 px-6 rounded-full bg-[#8A6A4F] text-[#FFFDF9] text-[14px] font-bold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer hover:bg-[#6F5440] transition-colors"
        >
          <span className="w-4 h-4 flex items-center justify-center text-[17px]">
            <i className="ri-add-line"></i>
          </span>
          إضافة عنوان جديد
        </button>
      </div>

      {list.length === 0 ? (
        <AccountEmpty
          icon="ri-map-pin-line"
          title="لا توجد عناوين محفوظة"
          note="أضف عنوانك الأول لتسريع إتمام طلباتك مرة بعد مرة."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {list.map((a) => (
            <AddressCard
              key={a.id}
              address={a}
              onEdit={() => setModal({ open: true, edit: a })}
              onDelete={() => remove(a.id)}
              onDefault={() => makeDefault(a.id)}
            />
          ))}
        </div>
      )}

      {modal.open && (
        <AddressFormModal
          initial={modal.edit}
          onClose={() => setModal({ open: false })}
          onSave={save}
        />
      )}
    </div>
  );
}