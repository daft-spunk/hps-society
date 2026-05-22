import SectionHeader from "./SectionHeader";
import { timeline } from "@/content/society";

export default function Timeline() {
  return (
    <section
      id="history"
      aria-labelledby="history-title"
      className="history-section bg-navy-900 text-ivory px-6 py-24 border-t border-b border-gold-500 max-[960px]:py-[72px] max-[960px]:px-5"
      data-reveal
    >
      <div className="max-w-[1120px] mx-auto relative">
        <SectionHeader
          dark
          titleId="history-title"
          eyebrow="— II —"
          title="Flight of the Eagle"
          sub="A century-long arc, from the Court of Wards to a national institution."
        />

        <div className="timeline">
          {timeline.map((ev) => (
            <div
              key={ev.year}
              className={`t-row ${ev.side}`}
              data-reveal
            >
              <div className="t-spacer t-card-left" aria-hidden="true" />
              <div className="t-year">{ev.year}</div>
              <div className="t-card t-card-right">
                <h4>{ev.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: ev.body }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
