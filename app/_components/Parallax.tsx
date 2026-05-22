"use client";

import { useEffect } from "react";

// Lightweight scroll-driven parallax: shifts any element with data-parallax
// vertically by `data-parallax * (scroll progress through the element)`.
// IntersectionObserver gates a rAF loop — runs only while the parent is in view,
// works in any browser context including preview iframes.
export default function Parallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (els.length === 0) return;

    const active = new Set<HTMLElement>();
    let rafId = 0;

    const tick = () => {
      const vh = window.innerHeight;
      for (const el of active) {
        const parent = el.parentElement;
        if (!parent) continue;
        const rect = parent.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const raw = (vh / 2 - center) / (vh / 2 + rect.height / 2);
        const progress = Math.max(-1, Math.min(1, raw));
        const strength = Number(el.dataset.parallax || "0");
        const translate = progress * strength;
        const scale = el.dataset.parallaxScale || "1.18";
        el.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
      }
      rafId = active.size > 0 ? requestAnimationFrame(tick) : 0;
    };

    const parentToChild = new Map<Element, HTMLElement>();
    for (const el of els) {
      const parent = el.parentElement;
      if (parent) parentToChild.set(parent, el);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const child = parentToChild.get(entry.target);
          if (!child) continue;
          if (entry.isIntersecting) active.add(child);
          else active.delete(child);
        }
        if (active.size > 0 && !rafId) {
          rafId = requestAnimationFrame(tick);
        }
      },
      { rootMargin: "20% 0px 20% 0px", threshold: 0 }
    );

    for (const parent of parentToChild.keys()) io.observe(parent);

    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      active.clear();
    };
  }, []);

  return null;
}
