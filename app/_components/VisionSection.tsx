import SectionHeader from "./SectionHeader";
import { values } from "@/content/society";

export default function VisionSection() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-title"
      className="bg-paper px-6 py-24 max-[960px]:py-[72px] max-[960px]:px-5"
      data-reveal
    >
      <div className="max-w-[1120px] mx-auto">
        <SectionHeader
          titleId="vision-title"
          eyebrow="— III —"
          title="Vision 2050"
          sub="Six guiding values, set down by the Society for the century ahead."
        />

        <div className="mission" aria-label="Our Mission">
          <div className="label">Our Mission</div>
          <p>
            &ldquo;To nurture all to soar, lead and serve&rdquo; — to stand
            among the foremost schools of the world by 2050, shaping young
            women and men of character, intellect and compassion who will lead
            with a universal outlook and serve the society they inherit.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7 mt-2 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
          {values.map((v) => (
            <article
              key={v.numeral}
              className="value relative bg-white border border-rule px-[26px] pt-[30px] pb-7"
            >
              <div className="font-cinzel text-[11px] tracking-glance text-gold-500 mb-3 uppercase">
                {v.numeral}
              </div>
              <h3 className="font-cormorant font-semibold text-[24px] m-0 mb-3 text-navy-900 leading-[1.2]">
                {v.title}
              </h3>
              <p className="m-0 text-ink-soft text-[17px] leading-[1.6]">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
