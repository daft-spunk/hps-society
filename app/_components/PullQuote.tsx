export default function PullQuote() {
  return (
    <section
      className="pull py-28 px-6 text-center max-[960px]:py-20"
      data-reveal
    >
      <div className="pull-bg" aria-hidden="true" data-parallax="-90" />
      <div className="pull-veil" aria-hidden="true" />
      <blockquote className="m-0 mx-auto max-w-[820px] font-cormorant italic leading-[1.45] text-[clamp(24px,2.8vw,34px)]">
        To nurture all to soar, lead and serve.
        <cite className="block not-italic mt-[22px] font-cinzel text-[11px] tracking-ribbon text-gold-400 uppercase">
          — The Core Purpose · HPS Vision 2050
        </cite>
      </blockquote>
    </section>
  );
}
