import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import { ArrowRight, Check, Phone } from "lucide-react";
import Image from "next/image";

const trustCards = [
  {
    title: "Mobile visits",
    text: "Professional hearing care brought directly to the setting where you feel most comfortable.",
  },
  {
    title: "Concierge care",
    text: "A discreet, private-service experience for patients, families, and busy households.",
  },
  {
    title: "Facility support",
    text: "Coordinated visits for nursing homes, assisted living communities, and care teams.",
  },
  {
    title: "Patient-centered service",
    text: "Clear guidance, calm communication, and thoughtful next steps after every visit.",
  },
];

const services = [
  "Hearing evaluations",
  "Hearing aid consultations",
  "Hearing aid cleanings and checks",
  "Hearing aid troubleshooting",
  "Nursing home visits",
  "Assisted living facility visits",
  "Concierge home visits",
];

const steps = [
  {
    number: "01",
    title: "Request a visit",
    text: "Share your location, service needs, and preferred appointment window.",
  },
  {
    number: "02",
    title: "We come to your location",
    text: "AURA Audiology coordinates the visit and brings hearing care to you.",
  },
  {
    number: "03",
    title: "Receive personalized hearing care",
    text: "Your appointment is tailored to your hearing needs, comfort, and goals.",
  },
];

const audiences = [
  "Private homes",
  "Nursing homes",
  "Assisted living facilities",
  "Concierge clients",
  "Families coordinating care for loved ones",
];

export default function HomePage() {
  return (
    <main id="top" className="overflow-hidden bg-ivory">
      <Header />

      <section className="relative border-b border-line pt-36 sm:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute right-[-12rem] top-32 h-[28rem] w-[28rem] rounded-full border border-gold/20" />
        </div>

        <div className="section-shell relative grid items-center gap-14 pb-24 pt-10 lg:grid-cols-[1.08fr_.92fr] lg:pb-32">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
                Expert care. Clearer connections.
              </p>
            </div>
            <h1 className="max-w-4xl font-serif text-[3.7rem] font-semibold leading-[0.92] tracking-[-0.045em] text-navy sm:text-7xl lg:text-[6.2rem]">
              Concierge Mobile Audiology in New York
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              Expert hearing care brought to homes, nursing homes, assisted living
              communities, and private concierge settings.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b1120]"
              >
                Request an Appointment <ArrowRight className="size-4" />
              </a>
              <a
                href="tel:+12125550148"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-7 py-4 font-bold text-navy transition hover:-translate-y-0.5 hover:border-gold/70"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-gold/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-paper p-8 soft-shadow sm:p-10">
              <Image
                src="/aura-logo.png"
                alt="AURA Audiology logo"
                width={720}
                height={720}
                className="mx-auto w-full max-w-[430px]"
                priority
              />
              <div className="mt-7 border-t border-line pt-6 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-dark">
                  Mobile audiology for New York
                </p>
                <p className="mx-auto mt-3 max-w-sm leading-7 text-muted">
                  A refined, private-service approach to hearing care for homes,
                  facilities, and family-coordinated appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.6rem] border border-line bg-paper p-7"
              >
                <div className="mb-7 h-px w-12 bg-gold" />
                <h2 className="font-serif text-3xl font-semibold text-navy">
                  {card.title}
                </h2>
                <p className="mt-4 leading-7 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-paper py-24 sm:py-32">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <div>
              <span className="eyebrow">Services</span>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-[-0.035em] text-navy sm:text-6xl">
                Elevated care for everyday hearing needs.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                Each visit is built around comfort, privacy, and clarity, whether
                care is needed at home or in a residential care setting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service}
                  className="group rounded-[1.5rem] border border-line bg-ivory p-6 transition hover:-translate-y-1 hover:border-gold/60"
                >
                  <span className="mb-8 block h-px w-10 bg-gold transition group-hover:w-16" />
                  <h3 className="font-serif text-3xl font-semibold leading-tight text-navy">
                    {service}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-line py-24 sm:py-32">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">How it works</span>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-[-0.035em] text-navy sm:text-6xl">
              Private hearing care, simplified.
            </h2>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-line bg-paper p-8"
              >
                <p className="font-serif text-5xl font-semibold text-gold">
                  {step.number}
                </p>
                <div className="my-7 h-px bg-line" />
                <h3 className="font-serif text-3xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white sm:py-32">
        <div className="section-shell grid items-start gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <span className="eyebrow !text-gold">Who we serve</span>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-[-0.035em] sm:text-6xl">
              Designed for patients, families, and care settings.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              AURA Audiology supports people who need a more convenient,
              coordinated, and personal approach to hearing care.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <Check className="size-4" />
                </span>
                <span className="font-semibold text-white/88">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32">
        <div className="section-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="rounded-[2rem] border border-line bg-paper p-8 soft-shadow sm:p-10">
            <Image
              src="/aura-logo.png"
              alt="AURA Audiology logo"
              width={720}
              height={720}
              className="mx-auto w-full max-w-[390px]"
            />
          </div>
          <div>
            <span className="eyebrow">About AURA Audiology</span>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-[-0.035em] text-navy sm:text-6xl">
              Hearing care made more accessible and personal.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-9 text-muted">
              <p>
                AURA Audiology was created to make hearing care more accessible,
                personal, and convenient for patients and families across New York.
              </p>
              <p>
                The practice brings audiology services into homes, nursing homes,
                assisted living communities, and concierge settings so patients can
                receive care with less travel and more personal attention.
              </p>
              <p>
                Every appointment is approached with calm communication, respect for
                the patient&apos;s environment, and practical guidance for the next
                step in care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-paper py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-[-0.035em] text-navy sm:text-6xl">
              Questions before requesting a visit.
            </h2>
            <p className="mt-6 leading-8 text-muted">
              If your situation is time-sensitive or you are coordinating care for a
              loved one, call directly and we will help you understand the next step.
            </p>
            <a
              href="tel:+12125550148"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-bold text-navy transition hover:border-gold/70"
            >
              <Phone className="size-4" /> (212) 555-0148
            </a>
          </div>
          <FAQ />
        </div>
      </section>

      <section id="contact" className="bg-ivory py-24 sm:py-32">
        <div className="section-shell grid items-start gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-[-0.035em] text-navy sm:text-6xl">
              Request a private mobile audiology visit.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Share a few details and AURA Audiology will contact you to confirm
              availability, location, and service needs.
            </p>
            <div className="mt-10 space-y-5 border-y border-line py-7">
              <a href="tel:+12125550148" className="block">
                <small className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
                  Phone
                </small>
                <strong className="mt-1 block text-xl text-navy">(212) 555-0148</strong>
              </a>
              <a href="mailto:hello@auraaudiology.com" className="block">
                <small className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
                  Email
                </small>
                <strong className="mt-1 block text-xl text-navy">
                  hello@auraaudiology.com
                </strong>
              </a>
              <div>
                <small className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
                  Service area
                </small>
                <strong className="mt-1 block text-xl text-navy">New York</strong>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy py-10 text-white/60">
        <div className="section-shell flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-center">
            <a href="#top" className="flex items-center gap-3" aria-label="AURA Audiology home">
              <span className="grid size-12 place-items-center overflow-hidden rounded-full bg-paper">
                <Image
                  src="/aura-logo.png"
                  alt="AURA Audiology logo"
                  width={96}
                  height={96}
                  className="size-12 object-cover"
                />
              </span>
              <span>
                <span className="block font-serif text-2xl font-semibold tracking-[0.14em] text-white">
                  AURA
                </span>
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold">
                  Audiology
                </span>
              </span>
            </a>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </div>
          <div className="grid gap-4 text-xs leading-relaxed md:grid-cols-[.65fr_1.35fr]">
            <p>© {new Date().getFullYear()} AURA Audiology. All rights reserved.</p>
            <p className="md:text-right">
              This website is for informational purposes only and does not replace
              medical advice. If you are experiencing a medical emergency, call 911.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
