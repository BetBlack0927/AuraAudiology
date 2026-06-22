"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Services", "#services"],
  ["How it works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["About", "#about"],
  ["FAQ", "#faq"],
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="AuroAudiology home">
      <span className="grid size-10 place-items-center rounded-full bg-teal text-white shadow-sm">
        <svg viewBox="0 0 32 32" className="size-6" aria-hidden="true">
          <path d="M16 5.5c-5 0-8.5 3.7-8.5 8.2 0 3.4 1.8 5.3 4 6.7 1.5 1 1.8 2.2 2 3.8.2 1.3 1.2 2.3 2.6 2.3 1.5 0 2.5-1 2.7-2.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M12 14.5c0-2.3 1.7-4.2 4-4.2s4 1.7 4 4c0 2.6-1.6 3.5-3.1 4.7-.7.6-1.2 1.3-1.2 2.3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="text-[1.08rem] font-bold tracking-[-0.03em] text-ink">Auro<span className="font-medium text-teal">Audiology</span></span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="section-shell flex h-20 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-ink/70 transition hover:text-teal">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal lg:inline-flex">Book a visit</a>
        <button onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-ink/10 bg-white lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="mx-4 rounded-2xl border border-ink/10 bg-white p-3 shadow-xl lg:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium hover:bg-mist">{label}</a>
          ))}
          <a href="tel:+12125550148" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-teal px-4 py-3 font-semibold text-white"><Phone className="size-4" /> Call now</a>
        </nav>
      )}
    </header>
  );
}
