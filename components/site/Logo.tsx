type LogoProps = {
  surface?: string;
  tone?: "light" | "dark";
  height?: number;
  textSize?: number;
  subSize?: number;
};

export default function Logo({
  surface = "#FFFDF9",
  tone = "light",
  height = 44,
  textSize,
  subSize,
}: LogoProps) {
  const nameColor = tone === "dark" ? "#F8F4EE" : "#2B211B";
  const scale = height / 34;
  const iconWidth = Math.round(30 * scale);
  const kind = textSize ?? Math.round(height * 0.6);
  const sub = subSize ?? Math.max(8, Math.round(height * 0.22));

  return (
    <span className="inline-flex items-center gap-3 select-none whitespace-nowrap">
      <span
        className="relative inline-block shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: iconWidth, height }}
        aria-hidden="true"
      >
        <span
          className="absolute top-0 left-1/2 block"
          style={{
            width: 30,
            height: 34,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <span
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg,#D3B27C 0%, #C2A06B 55%, #A9864F 100%)",
              clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0 100%)",
            }}
          />
          <span
            className="absolute"
            style={{
              top: 9,
              left: 6,
              width: 0,
              height: 0,
              borderLeft: "2.5px solid transparent",
              borderRight: "2.5px solid transparent",
              borderBottom: `6px solid ${surface}`,
            }}
          />
          <span
            className="absolute"
            style={{
              top: 9,
              left: 12.5,
              width: 0,
              height: 0,
              borderLeft: "2.5px solid transparent",
              borderRight: "2.5px solid transparent",
              borderBottom: `6px solid ${surface}`,
            }}
          />
          <span
            className="absolute"
            style={{
              top: 9,
              left: 19,
              width: 0,
              height: 0,
              borderLeft: "2.5px solid transparent",
              borderRight: "2.5px solid transparent",
              borderBottom: `6px solid ${surface}`,
            }}
          />
          <span
            className="absolute"
            style={{
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 7,
              height: 11,
              borderRadius: "3px 3px 0 0",
              background: surface,
            }}
          />
        </span>
      </span>

      <span className="flex flex-col items-center leading-none">
        <span
          className="font-['Aref_Ruqaa'] whitespace-nowrap"
          style={{ color: nameColor, fontSize: kind, lineHeight: 1.15 }}
        >
          سوق مجاز
        </span>
        <span
          className="mt-1 whitespace-nowrap"
          style={{
            color: "#C2A06B",
            fontSize: sub,
            letterSpacing: "0.34em",
            textIndent: "0.34em",
            fontFamily: "var(--font-almarai), system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          SUQ MAJAZ
        </span>
      </span>
    </span>
  );
}