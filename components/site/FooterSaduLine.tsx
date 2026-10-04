export default function FooterSaduLine({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="w-full h-px bg-[#C2A06B]/15"></div>
    </div>
  );
}