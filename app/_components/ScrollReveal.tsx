"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (els.length === 0) return;

    const reveal = (el: Element) => el.classList.add("is-visible");

    // Failsafe: regardless of IntersectionObserver, reveal everything after
    // 4s so content is never permanently hidden if IO misfires (some preview
    // iframes, exotic browsers, edge cases).
    const failsafe = window.setTimeout(() => {
      els.forEach(reveal);
    }, 4000);

    if (typeof IntersectionObserver === "undefined") {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      // 0 threshold = any pixel visible counts; negative bottom rootMargin
      // means the section's top must cross ~12% into the viewport before
      // triggering. Works for arbitrarily tall sections (members is 5000+ px).
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    // Reveal anything that's already in view at mount time (the first viewport
    // of content shouldn't animate in — it should already be there).
    const vh = window.innerHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) reveal(el);
      else io.observe(el);
    });

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, []);

  return null;
}
