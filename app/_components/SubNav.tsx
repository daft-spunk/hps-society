const links = [
  { href: "#about", label: "The Society" },
  { href: "#history", label: "Our History" },
  { href: "#vision", label: "Vision 2050" },
  { href: "#campuses", label: "Campuses" },
  { href: "#members", label: "Board & Members" },
];

export default function SubNav() {
  return (
    <nav
      className="subnav sticky top-0 z-50 border-b border-rule"
      style={{
        background: "rgba(250,246,236,0.92)",
        backdropFilter: "saturate(140%) blur(8px)",
        WebkitBackdropFilter: "saturate(140%) blur(8px)",
      }}
    >
      <ul className="list-none m-0 py-[10px] px-6 flex gap-9 justify-center flex-wrap font-cinzel text-[11px] tracking-ribbon uppercase max-[600px]:gap-5 max-[600px]:py-2 max-[600px]:px-4 max-[600px]:text-[10px] max-[600px]:tracking-roll">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-navy-800 no-underline pb-1 border-b border-transparent transition-[border-color,color] duration-200 hover:text-navy-900 hover:border-gold-500"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
