import SectionHeader from "./SectionHeader";

const facts: { label: string; value: string }[] = [
  { label: "Founded", value: "1923 — as Jagirdars' College" },
  { label: "Society Constituted", value: "1950 — Societies Registration Act" },
  { label: "First Chairman", value: "Dr. Sarvepalli Radhakrishnan, 1952" },
  {
    label: "Registered Office",
    value: "1-11 87 & 88, S.P. Road, Begumpet, Hyderabad 500 016",
  },
  {
    label: "Campuses",
    value: "Begumpet · Ramanthapur · Kadapa · Warangal",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-paper px-6 pt-14 pb-24 max-[960px]:pt-12 max-[960px]:pb-[72px] max-[960px]:px-5"
      data-reveal
    >
      <div className="max-w-[1120px] mx-auto">
        <SectionHeader
          titleId="about-title"
          eyebrow="— I —"
          title="The Society"
          sub="Stewards of an institution born of royal decree and shaped by independent India."
        />

        <div className="grid grid-cols-[1.1fr_1fr] gap-16 items-start max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <div className="about-prose">
            <p>
              The Hyderabad Public School Society is the apex governing body of
              The Hyderabad Public Schools — a family of institutions that
              traces its lineage to <em>Jagirdars&apos; College</em>, founded
              in 1923 under a Farman-e-Mubarak of H.E.H. Nawab Mir Osman Ali
              Khan, the Seventh Nizam of Hyderabad.
            </p>
            <p>
              Constituted in 1950 under the Societies Registration Act
              following the abolition of the Jagirdari system, the Society
              reorganised the College in 1951 as{" "}
              <em>The Hyderabad Public School</em>, opening its doors to
              children of every community, faith and background.
            </p>
            <p>
              Today the Society oversees campuses at Begumpet, Ramanthapur,
              Kadapa and Warangal — preserving the institution&apos;s rich
              heritage while advancing excellence in education, leadership,
              discipline, service and innovation.
            </p>
          </div>

          <aside className="about-card border border-rule bg-white px-8 pt-8 pb-7">
            <h3 className="font-cinzel text-[14px] tracking-cameo uppercase m-0 mb-[18px] text-navy-800 border-b border-rule pb-[14px]">
              At a Glance
            </h3>
            <dl className="m-0">
              {facts.map((f, i) => (
                <div key={f.label}>
                  <dt className="font-cinzel text-[10px] tracking-glance text-gold-500 uppercase mb-1">
                    {f.label}
                  </dt>
                  <dd
                    className={`font-cormorant text-[22px] text-navy-900 leading-[1.35] m-0 ${
                      i < facts.length - 1 ? "mb-[18px]" : ""
                    }`}
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
