import styles from "./success.module.css";

export default function SuccessCheck() {
  return (
    <div className="relative w-28 h-28 mx-auto">
      <span className={`absolute inset-0 rounded-full border-4 border-[#C2A06B] ${styles.ring}`}></span>
      <span
        className={`relative w-28 h-28 rounded-full bg-[#0B3D2E] flex items-center justify-center shadow-[0_16px_40px_-14px_rgba(11,61,46,0.6)] ${styles.badge}`}
      >
        <span className={`w-14 h-14 flex items-center justify-center text-[58px] text-[#FFFDF9] ${styles.check}`}>
          <i className="ri-check-line"></i>
        </span>
      </span>
    </div>
  );
}