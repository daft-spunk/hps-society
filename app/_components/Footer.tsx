export default function Footer() {
  return (
    <footer className="bg-navy-900 text-ivory px-6 pt-[72px] pb-9 border-t border-gold-500 relative">
      <div className="max-w-[1120px] mx-auto grid grid-cols-3 gap-12 items-start max-[960px]:grid-cols-1 max-[960px]:gap-9">
        <div>
          <h2 className="font-cinzel text-[11px] tracking-glance text-gold-400 m-0 mb-4 uppercase">
            The Society Office
          </h2>
          <p className="text-gold-100 text-[16px] leading-[1.6] m-0">
            The Hyderabad Public School Society
            <br />
            1-11 87 &amp; 88, S.P. Road,
            <br />
            Begumpet, Hyderabad,
            <br />
            Telangana 500 016 · India
          </p>
        </div>
        <div>
          <h2 className="font-cinzel text-[11px] tracking-glance text-gold-400 m-0 mb-4 uppercase">
            Correspondence
          </h2>
          <p className="text-gold-100 text-[16px] leading-[1.6] m-0">
            <a
              href="mailto:office.alumni@hpss.org.in"
              className="text-gold-100 no-underline border-b border-transparent hover:border-gold-400"
            >
              office.alumni@hpss.org.in
            </a>
          </p>
          <p className="text-gold-100 text-[16px] leading-[1.6] m-0 mt-2">
            For matters of admission, please visit the respective campus
            website.
          </p>
        </div>
        <div>
          <h2 className="font-cinzel text-[11px] tracking-glance text-gold-400 m-0 mb-4 uppercase">
            The Four Schools
          </h2>
          <ul className="list-none p-0 m-0 text-[16px] leading-[1.9]">
            {[
              { name: "HPS Begumpet", href: "https://www.hpsbegumpet.org.in/" },
              { name: "HPS Ramanthapur", href: "https://hpsramanthapur.org/" },
              { name: "HPS Kadapa", href: "https://www.hpskadapa.org/" },
              { name: "HPS Warangal", href: "https://www.hpswarangal.org/" },
            ].map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-100 no-underline border-b border-transparent hover:border-gold-400 hover:text-white transition-colors"
                >
                  {s.name}
                  <span
                    className="inline-block ml-1.5 text-gold-400"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto mt-[60px] pt-6 border-t border-[rgba(201,163,90,0.25)] flex justify-between items-center flex-wrap gap-4 font-cinzel text-[10px] tracking-glance text-gold-300 uppercase">
        <div className="flex items-center gap-[14px]">
          <img
            src="/images/crest.jpeg"
            alt=""
            className="w-14 h-14 rounded-full"
            style={{ boxShadow: "0 0 0 1px var(--gold-500)" }}
          />
          <div>
            <span className="block font-cinzel text-[13px] tracking-roll text-white">
              HPS Society
            </span>
            <small className="font-cormorant italic text-gold-300 text-[13px] tracking-[0.02em]">
              Soar · Lead · Serve
            </small>
          </div>
        </div>
        <div>© 2026 · The Hyderabad Public School Society</div>
      </div>
    </footer>
  );
}
