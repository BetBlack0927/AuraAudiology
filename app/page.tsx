import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  CircleDollarSign,
  Clock3,
  Ear,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const services = [
  { icon: Ear, title: "Hearing evaluations", text: "Thorough, comfortable hearing assessments performed in a familiar setting." },
  { icon: SlidersHorizontal, title: "Hearing aid consultations", text: "Thoughtful guidance to help you explore hearing technology suited to your needs." },
  { icon: Sparkles, title: "Cleanings & checks", text: "Routine cleaning, performance checks, and practical support for your hearing devices." },
  { icon: Building2, title: "Nursing home visits", text: "Coordinated on-site care for residents of skilled nursing and assisted living communities." },
  { icon: Home, title: "Concierge home visits", text: "Discreet, one-to-one hearing care delivered to private homes and concierge locations." },
];

const prices = [
  { icon: Home, name: "Basic Visit", desc: "A convenient starting point for device support and general hearing-care needs.", items: ["In-home appointment", "Device inspection", "Care recommendations"] },
  { icon: Ear, name: "Hearing Evaluation", desc: "A comprehensive assessment designed around your hearing concerns and goals.", items: ["Personal hearing history", "Hearing assessment", "Results consultation"], featured: true },
  { icon: HeartHandshake, name: "Concierge Care", desc: "Extended, highly personalized service for individuals, families, and facilities.", items: ["Priority coordination", "Personalized care plan", "Ongoing support"] },
];

export default function HomePage() {
  return (
    <main id="top" className="overflow-hidden">
      <Header />

      <section className="relative min-h-[760px] bg-gradient-to-br from-white via-white to-mist pt-28 sm:pt-32">
        <div className="pointer-events-none absolute right-[-12rem] top-[-14rem] size-[38rem] rounded-full border-[90px] border-sky/70" />
        <div className="section-shell relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-teal shadow-sm backdrop-blur">
              <MapPin className="size-3.5" /> Mobile care across New York
            </div>
            <h1 className="max-w-3xl font-serif text-[3.25rem] font-medium leading-[1.04] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.8rem]">Mobile Audiology Care, <span className="relative whitespace-nowrap text-teal">Brought to You<span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-teal/10" /></span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">Convenient, personalized hearing care in the comfort of your home, nursing community, or concierge location—wherever you feel most at ease.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-4 font-bold text-white shadow-lg shadow-teal/15 transition hover:-translate-y-0.5 hover:bg-teal-dark">Book an Appointment <ArrowRight className="size-4" /></a>
              <a href="tel:+12125550148" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 font-bold text-ink transition hover:border-teal/40 hover:text-teal"><Phone className="size-4" /> Call Now</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-ink/60">
              <span className="flex items-center gap-2"><BadgeCheck className="size-5 text-teal" /> Care at your location</span>
              <span className="flex items-center gap-2"><Clock3 className="size-5 text-teal" /> Flexible scheduling</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.25rem] bg-[#dcefee] soft-shadow">
              <div className="absolute left-[11%] top-[12%] size-20 rounded-full bg-white/45 blur-2xl" />
              <div className="absolute -bottom-[22%] -right-[12%] size-[78%] rounded-full bg-[#b9dfdc]" />
              <svg viewBox="0 0 570 456" className="absolute inset-0 size-full" role="img" aria-label="Audiologist providing personal hearing care during a home visit">
                <path d="M33 367c88-70 145-57 203-16 62 45 114 43 170-1 42-34 81-32 131 1v105H33Z" fill="#eef8f7"/>
                <path d="M368 79c28 0 50 22 50 50 0 17-8 33-21 42l7 33-47-25c-23-5-39-25-39-50 0-28 22-50 50-50Z" fill="#fff" opacity=".8"/>
                <path d="M348 124c13-18 31-19 42-3 9 13 3 27-7 35-8 6-10 11-9 20" fill="none" stroke="#176f73" strokeWidth="7" strokeLinecap="round"/>
                <circle cx="267" cy="156" r="59" fill="#e2ac8e"/>
                <path d="M210 159c-4-51 22-86 68-79 36 6 52 33 47 70-14-4-25-15-29-31-21 23-47 35-86 40Z" fill="#17333b"/>
                <path d="M241 211c19 14 37 14 55 0l8 49-71 1Z" fill="#d99d80"/>
                <path d="M150 442c3-115 41-188 112-190 78-2 121 71 122 190Z" fill="#fff"/>
                <path d="M233 250l29 48 35-48 24 9-19 183h-88l-7-184Z" fill="#f9ffff"/>
                <path d="M220 256c6 49 22 83 42 100 17-15 36-51 48-101" fill="none" stroke="#176f73" strokeWidth="5"/>
                <circle cx="262" cy="358" r="10" fill="#176f73"/>
                <path d="M167 301c-38 29-59 70-71 124l67 17 51-89" fill="#fff"/>
                <path d="M364 317c34 15 70 46 96 85l-55 35-66-74" fill="#fff"/>
                <rect x="349" y="305" width="103" height="121" rx="13" transform="rotate(-9 349 305)" fill="#17333b"/>
                <rect x="362" y="320" width="78" height="88" rx="7" transform="rotate(-9 362 320)" fill="#fff"/>
                <path d="M178 427c40-16 70-15 91 0" fill="none" stroke="#e2ac8e" strokeWidth="21" strokeLinecap="round"/>
                <circle cx="485" cy="106" r="7" fill="#176f73" opacity=".3"/><circle cx="506" cy="130" r="4" fill="#176f73" opacity=".4"/>
              </svg>
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-xl sm:-left-8 sm:bottom-7">
              <span className="grid size-12 place-items-center rounded-full bg-mist text-teal"><ShieldCheck className="size-6" /></span>
              <div><p className="text-sm font-bold">Compassionate care</p><p className="mt-0.5 text-xs text-ink/55">Comfortable. Personal. Convenient.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-white py-7">
        <div className="section-shell flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <p className="max-w-sm font-serif text-xl text-ink/80">Thoughtful hearing care for every setting.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-ink/55"><span>Private homes</span><span>•</span><span>Nursing communities</span><span>•</span><span>Concierge locations</span><span>•</span><span>Care facilities</span></div>
        </div>
      </section>

      <section id="services" className="py-24 sm:py-32">
        <div className="section-shell">
          <div className="max-w-2xl"><span className="eyebrow">Our services</span><h2 className="mt-5 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Expert hearing care, wherever you are.</h2><p className="mt-5 text-lg leading-8 text-ink/60">From routine device care to comprehensive evaluations, every visit is designed around your comfort and hearing goals.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={`group rounded-3xl border border-ink/[.08] bg-white p-7 transition hover:-translate-y-1 hover:border-teal/20 hover:shadow-xl hover:shadow-ink/5 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}>
                <span className="grid size-12 place-items-center rounded-2xl bg-mist text-teal transition group-hover:bg-teal group-hover:text-white"><Icon className="size-6" strokeWidth={1.7} /></span>
                <h3 className="mt-7 text-xl font-bold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-ink/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-sand py-24 sm:py-32">
        <div className="section-shell">
          <div className="text-center"><span className="eyebrow">How it works</span><h2 className="mt-5 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Better hearing care in three simple steps.</h2></div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[17%] right-[17%] top-10 hidden border-t border-dashed border-teal/30 md:block" />
            {[
              [CalendarCheck, "01", "Request an appointment", "Tell us what you need and where you’d like to be seen."],
              [Home, "02", "We come to you", "We coordinate a convenient time and travel to your location."],
              [Stethoscope, "03", "Receive personalized care", "Get focused, one-to-one care and clear next-step guidance."],
            ].map(([Icon, number, title, text]) => {
              const StepIcon = Icon as typeof CalendarCheck;
              return <article key={number as string} className="relative text-center"><span className="relative z-10 mx-auto grid size-20 place-items-center rounded-full border-8 border-sand bg-white text-teal shadow-md"><StepIcon className="size-7" /></span><span className="mt-6 block text-xs font-bold tracking-[.18em] text-teal">STEP {number as string}</span><h3 className="mt-3 text-xl font-bold">{title as string}</h3><p className="mx-auto mt-3 max-w-xs leading-7 text-ink/60">{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 sm:py-32">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl text-center"><span className="eyebrow">Visit options</span><h2 className="mt-5 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Straightforward care options.</h2><p className="mt-5 text-lg leading-8 text-ink/60">Choose the type of visit that best fits your needs. Contact us for a personalized estimate.</p></div>
          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {prices.map(({ icon: Icon, name, desc, items, featured }) => (
              <article key={name} className={`relative flex flex-col rounded-3xl border p-7 sm:p-9 ${featured ? "border-teal bg-ink text-white soft-shadow lg:-translate-y-3" : "border-ink/10 bg-white"}`}>
                {featured && <span className="absolute right-7 top-7 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Most requested</span>}
                <span className={`grid size-12 place-items-center rounded-2xl ${featured ? "bg-white/10 text-[#83d2cc]" : "bg-mist text-teal"}`}><Icon className="size-6" /></span>
                <h3 className="mt-7 text-2xl font-bold">{name}</h3><p className={`mt-3 min-h-20 leading-7 ${featured ? "text-white/65" : "text-ink/60"}`}>{desc}</p>
                <div className={`my-6 border-t ${featured ? "border-white/10" : "border-ink/10"}`} />
                <ul className="space-y-3">{items.map(item => <li key={item} className={`flex items-center gap-3 text-sm font-medium ${featured ? "text-white/80" : "text-ink/70"}`}><Check className="size-4 text-teal" />{item}</li>)}</ul>
                <a href="#contact" className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition ${featured ? "bg-white text-ink hover:bg-mist" : "bg-mist text-teal hover:bg-teal hover:text-white"}`}>Get visit details</a>
              </article>
            ))}
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-ink/55"><CircleDollarSign className="size-4 text-teal" /> Pricing may vary based on location and service.</p>
        </div>
      </section>

      <section id="about" className="bg-mist py-24 sm:py-32">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#b9dfdc] to-[#e5f3f2]">
              <svg viewBox="0 0 560 420" className="size-full" role="img" aria-label="A warm, modern mobile audiology consultation">
                <rect x="68" y="61" width="424" height="294" rx="35" fill="#fff" opacity=".76"/><circle cx="178" cy="175" r="58" fill="#e6ad8c"/><path d="M119 172c4-58 33-89 78-74 29 10 41 35 37 68-26-4-44-18-53-41-15 25-33 40-62 47Z" fill="#17333b"/><path d="M91 357c9-93 42-135 91-135 53 0 89 46 94 135Z" fill="#176f73"/><circle cx="376" cy="181" r="52" fill="#dba080"/><path d="M327 177c0-53 34-77 71-68 29 7 42 31 37 67-20-4-38-16-46-35-17 22-38 33-62 36Z" fill="#667b7f"/><path d="M288 357c8-86 42-127 92-127 52 0 86 43 93 127Z" fill="#f5f3ec"/><path d="M245 276c45 29 86 29 123 0" fill="none" stroke="#e3a07e" strokeWidth="18" strokeLinecap="round"/><circle cx="493" cy="86" r="23" fill="#176f73"/><path d="M483 86l7 7 14-16" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white p-5 shadow-xl sm:right-8"><p className="font-serif text-3xl text-teal">Care that listens.</p><p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink/45">Our practice philosophy</p></div>
          </div>
          <div><span className="eyebrow">About AuroAudiology</span><h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Hearing care built around real life.</h2><div className="mt-6 space-y-5 text-lg leading-8 text-ink/65"><p>AuroAudiology is a growing mobile practice founded by a licensed audiology professional with a simple belief: high-quality hearing care should feel personal, accessible, and unrushed.</p><p>By bringing appointments directly to homes, nursing communities, and concierge settings, the practice is designed to remove common barriers to care while creating space for genuine connection and thoughtful support.</p><p>Our goal is to help each person feel heard, informed, and confident in their next step—without the stress of traveling to a clinic.</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2"><span className="flex items-center gap-3 rounded-xl bg-white/70 p-4 text-sm font-bold"><Check className="size-4 text-teal" /> Patient-centered approach</span><span className="flex items-center gap-3 rounded-xl bg-white/70 p-4 text-sm font-bold"><Check className="size-4 text-teal" /> Care in familiar settings</span></div></div>
        </div>
      </section>

      <section id="faq" className="py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><span className="eyebrow">Common questions</span><h2 className="mt-5 font-serif text-4xl font-medium tracking-tight sm:text-5xl">Good to know before your visit.</h2><p className="mt-5 leading-7 text-ink/60">Still have a question? Call us and we’ll be happy to talk it through.</p><a href="tel:+12125550148" className="mt-7 inline-flex items-center gap-2 font-bold text-teal"><Phone className="size-4" /> (212) 555-0148</a></div>
          <FAQ />
        </div>
      </section>

      <section id="contact" className="bg-ink py-24 text-white sm:py-32">
        <div className="section-shell grid items-start gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-8"><span className="eyebrow !text-[#83d2cc]">Book a visit</span><h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Let’s bring better hearing care to you.</h2><p className="mt-6 text-lg leading-8 text-white/60">Share a few details and we’ll reach out to coordinate a convenient appointment at your location.</p><div className="mt-10 space-y-5"><a href="tel:+12125550148" className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-white/10 text-[#83d2cc]"><Phone className="size-5" /></span><span><small className="block text-xs uppercase tracking-widest text-white/45">Phone</small><strong className="mt-1 block">(212) 555-0148</strong></span></a><a href="mailto:hello@auroaudiology.com" className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-white/10 text-[#83d2cc]"><Mail className="size-5" /></span><span><small className="block text-xs uppercase tracking-widest text-white/45">Email</small><strong className="mt-1 block">hello@auroaudiology.com</strong></span></a><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-white/10 text-[#83d2cc]"><MapPin className="size-5" /></span><span><small className="block text-xs uppercase tracking-widest text-white/45">Service area</small><strong className="mt-1 block">New York</strong></span></div></div></div>
          <BookingForm />
        </div>
      </section>

      <footer className="bg-[#102a31] py-10 text-white/55">
        <div className="section-shell flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center"><a href="#top" className="text-xl font-bold text-white">Auro<span className="font-medium text-[#83d2cc]">Audiology</span></a><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm"><a href="#services" className="hover:text-white">Services</a><a href="#pricing" className="hover:text-white">Visit options</a><a href="#about" className="hover:text-white">About</a><a href="#faq" className="hover:text-white">FAQ</a><a href="#contact" className="hover:text-white">Contact</a></nav></div>
          <div className="flex flex-col justify-between gap-4 text-xs leading-relaxed sm:flex-row"><p>© {new Date().getFullYear()} AuroAudiology. All rights reserved.</p><p className="max-w-xl sm:text-right">This website is for informational purposes only and does not replace medical advice.</p></div>
        </div>
      </footer>
    </main>
  );
}
