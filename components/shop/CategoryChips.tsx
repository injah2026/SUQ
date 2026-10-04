export default function CategoryChips({
  categories,
  active,
  onSelect,
}: {
  categories: string[];
  active: string;
  onSelect: (c: string) => void;
}) {
  return (
    <div className="w-full pt-7 pb-5">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar -mx-8 px-8 lg:mx-0 lg:px-0">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onSelect(c)}
              className={`shrink-0 h-11 px-5 rounded-full text-[14px] font-semibold whitespace-nowrap cursor-pointer border transition-colors duration-300 ${
                isActive
                  ? "bg-[#8A6A4F] text-[#FFFDF9] border-[#8A6A4F]"
                  : "bg-[#FFFDF9] text-[#6B5D52] border-[#E8DFD3] hover:border-[#C2A06B] hover:text-[#8A6A4F]"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}