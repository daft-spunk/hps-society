export default function SectionHeader({
  eyebrow,
  title,
  sub,
  dark = false,
  titleId,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  titleId?: string;
}) {
  return (
    <>
      <div
        className={`font-cinzel text-[11px] tracking-eyebrow uppercase text-center mb-[18px] ${
          dark ? "text-gold-400" : "text-gold-500"
        }`}
        aria-hidden="true"
      >
        {eyebrow}
      </div>
      <h2
        id={titleId}
        className={`font-cinzel font-medium text-center tracking-h2 m-0 mb-[14px] text-[clamp(26px,3.4vw,40px)] ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-center font-cormorant italic text-[20px] max-w-[640px] mx-auto mb-10 ${
            dark ? "text-gold-100" : "text-ink-soft"
          }`}
        >
          {sub}
        </p>
      )}
    </>
  );
}
