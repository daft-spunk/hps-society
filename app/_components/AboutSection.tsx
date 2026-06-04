import SectionHeader from "./SectionHeader";

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
        />

        <div className="about-prose max-w-[760px] mx-auto">
          <p>
            The Hyderabad Public School Society traces its lineage to{" "}
            <em>Jagirdars&apos; College</em>, founded in 1923 under a
            Farman-e-Mubarak of H.E.H. Nawab Mir Osman Ali Khan, the Seventh
            Nizam of Hyderabad. The Hyderabad Public School Society was
            constituted on September 20, 1951.
          </p>
          <p>
            Today the Society oversees campuses at Begumpet, Ramanthapur,
            Kadapa and Warangal — preserving the institution&apos;s rich
            heritage while advancing excellence in education, leadership,
            discipline, service and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
