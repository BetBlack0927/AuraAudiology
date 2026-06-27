"use client";

import Image from "next/image";
import { contactInfo } from "@/lib/contact";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Services", "#services"],
  ["How It Works", "#how-it-works"],
  ["About", "#about"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="AURA Audiology home">
      <span className="grid size-12 place-items-center overflow-hidden rounded-full border border-line bg-paper shadow-sm">
        <Image
          src="/aura-logo.png"
          alt="AURA Audiology logo"
          width={96}
          height={96}
          className="size-12 object-cover"
          priority
        />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-2xl font-semibold tracking-[0.14em] text-navy">
          AURA
        </span>
        <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold-dark">
          Audiology
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ivory/92 backdrop-blur-xl">
      <div className="section-shell flex h-24 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-muted transition hover:text-navy"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-gold/40 bg-navy px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-[#0b1120] lg:inline-flex"
        >
          Request Appointment
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-full border border-line bg-paper text-navy lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav
          className="mx-4 rounded-3xl border border-line bg-paper p-3 shadow-2xl shadow-navy/10 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-semibold text-muted hover:bg-cream hover:text-navy"
            >
              {label}
            </a>
          ))}
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-2xl bg-navy px-4 py-3 font-bold text-white"
            >
              Request Appointment
            </a>
            <a
              href={contactInfo.phoneHref}
              className="flex items-center justify-center gap-2 rounded-2xl border border-line px-4 py-3 font-bold text-navy"
            >
              <Phone className="size-4" /> Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
