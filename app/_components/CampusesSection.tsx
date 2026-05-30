import SectionHeader from "./SectionHeader";
import { campuses } from "@/content/society";

export default function CampusesSection() {
  return (
    <section
      id="campuses"
      aria-labelledby="campuses-title"
      className="bg-white border-t border-rule px-6 py-24 max-[960px]:py-[72px] max-[960px]:px-5"
      data-reveal
    >
      <div className="max-w-[1120px] mx-auto">
        <SectionHeader
          titleId="campuses-title"
          eyebrow="— II —"
          title="The Four Campuses"
          sub="Distinct in setting, united in purpose."
        />

        <div className="grid grid-cols-2 gap-9 mt-2 max-[760px]:grid-cols-1 max-[760px]:gap-7">
          {campuses.map((c) => (
            <article
              key={c.name}
              className="campus border border-rule bg-paper overflow-hidden flex flex-col"
            >
              <figure className="m-0 relative aspect-[16/10] border-b border-gold-500 overflow-hidden campus-figure">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`HPS ${c.name} campus`}
                    className="w-full h-full object-cover campus-img"
                  />
                ) : (
                  <div className="campus-ph w-full h-full flex items-center justify-center font-cinzel uppercase text-[11px] tracking-glance text-gold-300">
                    HPS&nbsp;{c.name.toUpperCase()}
                  </div>
                )}
                <div className="campus-overlay" aria-hidden="true" />
                <div className="campus-year">
                  <span className="campus-year-label">Established</span>
                  <span className="campus-year-num">{c.founded}</span>
                </div>
              </figure>
              <div className="px-7 py-6 pb-7">
                <h3 className="font-cinzel text-[14px] tracking-roll m-0 mb-1.5 text-navy-900 uppercase">
                  {c.website ? (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-900 no-underline border-b border-transparent hover:border-gold-500 hover:text-navy-900 transition-colors"
                    >
                      HPS {c.name}
                    </a>
                  ) : (
                    <>HPS {c.name}</>
                  )}
                </h3>
                <p className="font-cormorant italic text-gold-500 text-[15px] m-0 mb-3">
                  {c.region}
                </p>
                <p className="m-0 text-[16px] text-ink-soft leading-[1.65]">
                  {c.body}
                </p>
                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 mt-5 px-4 py-2 font-cinzel text-[10px] tracking-roll uppercase text-navy-900 border border-gold-500 hover:bg-gold-500/15 transition-colors no-underline"
                  >
                    <span>Visit Website</span>
                    <span
                      aria-hidden="true"
                      className="inline-block text-gold-500 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
