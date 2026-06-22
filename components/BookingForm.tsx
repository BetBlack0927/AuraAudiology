"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="grid min-h-[480px] place-items-center rounded-3xl bg-white p-8 text-center soft-shadow" role="status">
        <div>
          <CheckCircle2 className="mx-auto mb-5 size-12 text-teal" />
          <h3 className="font-serif text-3xl font-medium">Request received</h3>
          <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink/65">Thank you. We’ll call you shortly to confirm the details of your visit.</p>
          <button onClick={() => setSent(false)} className="mt-7 text-sm font-bold text-teal underline underline-offset-4">Send another request</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 soft-shadow sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Name<span className="text-teal"> *</span><input className="field mt-2" name="name" autoComplete="name" required placeholder="Your full name" /></label>
        <label className="text-sm font-semibold">Phone<span className="text-teal"> *</span><input className="field mt-2" name="phone" type="tel" autoComplete="tel" required placeholder="(212) 555-0000" /></label>
        <label className="text-sm font-semibold">Email<input className="field mt-2" name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label className="text-sm font-semibold">Location<span className="text-teal"> *</span><input className="field mt-2" name="location" required placeholder="City or ZIP code" /></label>
        <label className="text-sm font-semibold">Service needed<select className="field mt-2" name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Hearing evaluation</option><option>Hearing aid consultation</option><option>Hearing aid cleaning or check</option><option>Nursing home visit</option><option>Concierge home visit</option><option>Other</option></select></label>
        <label className="text-sm font-semibold">Preferred date<input className="field mt-2" name="date" type="date" /></label>
        <label className="text-sm font-semibold sm:col-span-2">Message<textarea className="field mt-2 min-h-28 resize-y" name="message" placeholder="Tell us how we can help" /></label>
      </div>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-dark sm:w-auto">Request appointment <ArrowRight className="size-4" /></button>
      <p className="mt-4 text-xs leading-relaxed text-ink/50">Submitting this form does not confirm an appointment. We’ll contact you to coordinate availability and service details.</p>
    </form>
  );
}
