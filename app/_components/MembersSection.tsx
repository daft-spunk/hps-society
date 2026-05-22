import SectionHeader from "./SectionHeader";
import {
  firstChairman,
  managingCommittee,
  boardOfGovernors,
  societyMembers,
  affiliateMembers,
  type Person,
} from "@/content/society";

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mt-20 mb-14 max-[600px]:mt-12 max-[600px]:mb-10">
      <div className="flex items-center justify-center gap-3 mb-3" aria-hidden="true">
        <span className="block w-16 h-px bg-gold-500 opacity-70" />
        <span className="block w-2 h-2 border border-gold-500 rotate-45" />
        <span className="block w-2 h-2 bg-gold-500 rotate-45" />
        <span className="block w-2 h-2 border border-gold-500 rotate-45" />
        <span className="block w-16 h-px bg-gold-500 opacity-70" />
      </div>
      <h3 className="font-cinzel text-[15px] tracking-cameo text-navy-900 uppercase m-0">
        {children}
      </h3>
    </div>
  );
}

type Size = "lg" | "md" | "sm";

const sizeClasses: Record<Size, { frame: string; name: string; role: string }> = {
  lg: {
    frame: "cameo-lg mb-5",
    name: "font-cormorant font-semibold text-[20px] text-navy-900 leading-[1.2] m-0",
    role: "font-cinzel text-[10px] tracking-cameo text-gold-500 uppercase mt-1.5 leading-[1.45]",
  },
  md: {
    frame: "cameo-md mb-4",
    name: "font-cormorant font-semibold text-[17px] text-navy-900 leading-[1.2] m-0",
    role: "font-cinzel text-[9.5px] tracking-cameo text-gold-500 uppercase mt-1.5 leading-[1.45]",
  },
  sm: {
    frame: "cameo-sm mb-3",
    name: "font-cormorant font-semibold text-[15px] text-navy-900 leading-[1.2] m-0",
    role: "font-cinzel text-[9px] tracking-roll text-ink-soft uppercase mt-1 leading-[1.45]",
  },
};

function Cameo({ p, size }: { p: Person; size: Size }) {
  const s = sizeClasses[size];
  return (
    <figure className="text-center m-0 px-1">
      <div className={`mx-auto relative overflow-hidden ${s.frame}`}>
        {p.portrait ? (
          <img
            src={p.portrait}
            alt={`${p.name} — ${p.role}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="cameo-ph w-full h-full" />
        )}
      </div>
      <figcaption>
        <div className={s.name}>{p.name}</div>
        <div className={s.role}>{p.role}</div>
      </figcaption>
    </figure>
  );
}

export default function MembersSection() {
  return (
    <section
      id="members"
      aria-labelledby="members-title"
      className="bg-paper border-t border-rule px-6 py-24 max-[960px]:py-[72px] max-[960px]:px-5"
      data-reveal
    >
      <div className="max-w-[1120px] mx-auto">
        <SectionHeader
          titleId="members-title"
          eyebrow="— V —"
          title="The Society & Board of Governors"
          sub="The custodians of the institution — past and present."
        />

        {/* First Chairman — special historical callout */}
        <div className="text-center mb-12 max-[600px]:mb-8">
          <div className="font-cinzel text-[10px] tracking-glance text-gold-500 uppercase mb-3">
            — In Memoriam · First Chairman —
          </div>
          <div className="first-chairman-frame mx-auto mb-5 relative overflow-hidden">
            <img
              src={firstChairman.portrait}
              alt={`${firstChairman.name} — ${firstChairman.role}`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-cormorant font-semibold text-[26px] text-navy-900 m-0 mb-2">
            {firstChairman.name}
          </h3>
          <div className="font-cinzel text-[11px] tracking-cameo text-gold-500 uppercase">
            {firstChairman.role}
          </div>
          {firstChairman.honorific && (
            <div className="font-cormorant italic text-ink-soft text-[16px] mt-2.5">
              {firstChairman.honorific}
            </div>
          )}
        </div>

        {/* Managing Committee — 4-up large lockets */}
        <SubHeading>The Managing Committee</SubHeading>
        <div className="grid grid-cols-4 gap-y-14 gap-x-10 max-[960px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:gap-y-10 max-[600px]:gap-x-4">
          {managingCommittee.map((p) => (
            <Cameo key={p.name} p={p} size="lg" />
          ))}
        </div>

        {/* Board of Governors — 4-up medium lockets */}
        <SubHeading>The Board of Governors</SubHeading>
        <div className="grid grid-cols-4 gap-y-12 gap-x-10 max-[960px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:gap-y-10 max-[600px]:gap-x-4">
          {boardOfGovernors.map((p) => (
            <Cameo key={p.name + p.role} p={p} size="md" />
          ))}
        </div>

        {/* Society Members — 5-up small lockets */}
        <SubHeading>Members of the Society</SubHeading>
        <div className="grid grid-cols-5 gap-y-11 gap-x-8 max-[960px]:grid-cols-4 max-[760px]:grid-cols-3 max-[480px]:grid-cols-2 max-[600px]:gap-y-9 max-[600px]:gap-x-4">
          {societyMembers.map((p) => (
            <Cameo key={p.name} p={p} size="sm" />
          ))}
        </div>

        {/* Affiliate Membership */}
        <SubHeading>Affiliate Membership</SubHeading>
        <div className="grid grid-cols-5 gap-y-11 gap-x-8 max-[960px]:grid-cols-4 max-[760px]:grid-cols-3 max-[480px]:grid-cols-2">
          {affiliateMembers.map((p) => (
            <Cameo key={p.name} p={p} size="sm" />
          ))}
        </div>
      </div>
    </section>
  );
}
