export default function Masthead() {
  return (
    <header className="masthead text-ivory text-center border-b border-gold-500 px-6 pt-12 pb-9 overflow-hidden">
      <div
        className="masthead-bg"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/heritage/begumpet-palace-hero.jpg)",
        }}
      />
      <div
        className="masthead-veil"
        aria-hidden="true"
      />
      <div className="relative max-w-[1100px] mx-auto z-10 masthead-inner">
        <span
          className="block mx-auto mb-[18px] rounded-full overflow-hidden bg-navy-900 reveal-up"
          style={{
            width: 120,
            height: 120,
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
          aria-hidden="true"
        >
          <img
            src="/images/crest.jpeg"
            alt=""
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.18)" }}
          />
        </span>
        <h1
          className="font-cinzel font-medium text-white leading-[1.15] m-0 reveal-up text-[clamp(26px,4.2vw,52px)]"
          style={{ animationDelay: "120ms", letterSpacing: "0.12em" }}
        >
          The Hyderabad Public
          <br />
          School&nbsp;Society
          <em className="block not-italic text-gold-300 font-normal text-[0.55em] tracking-h1sub mt-4">
            — Stewards of a Century of Soaring, Leading &amp; Serving —
          </em>
        </h1>
        <p
          className="font-cormorant italic text-gold-100 mt-[14px] text-[clamp(16px,1.6vw,20px)] tracking-[0.02em] reveal-up"
          style={{ animationDelay: "240ms" }}
        >
          Custodians of a hundred-year legacy across Begumpet, Ramanthapur,
          Kadapa &amp; Warangal.
        </p>
        <div
          className="flex items-center justify-center gap-[14px] mt-[18px] text-gold-500 reveal-up"
          style={{ animationDelay: "360ms" }}
          aria-hidden="true"
        >
          <span className="block h-px w-20 bg-gold-500 opacity-70" />
          <span className="block w-2 h-2 border border-gold-500 rotate-45" />
          <span className="block w-2 h-2 bg-gold-500 rotate-45" />
          <span className="block w-2 h-2 border border-gold-500 rotate-45" />
          <span className="block h-px w-20 bg-gold-500 opacity-70" />
        </div>
      </div>
    </header>
  );
}
