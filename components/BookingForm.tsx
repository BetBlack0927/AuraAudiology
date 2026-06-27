"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "sent" | "error";

const services = [
  "Hearing evaluation",
  "Hearing aid consultation",
  "Hearing aid cleaning/check",
  "Hearing aid troubleshooting",
  "Nursing home visit",
  "Assisted living facility visit",
  "Concierge home visit",
  "Other",
];

export default function BookingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Unable to send your request right now.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your request right now. Please call us directly.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div
        className="grid min-h-[520px] place-items-center rounded-[2rem] border border-line bg-paper p-8 text-center soft-shadow"
        role="status"
      >
        <div>
          <CheckCircle2 className="mx-auto mb-6 size-12 text-gold-dark" />
          <p className="eyebrow justify-center">Request received</p>
          <h3 className="mt-4 font-serif text-4xl font-semibold text-navy">
            Thank you for reaching out.
          </h3>
          <p className="mx-auto mt-4 max-w-md leading-8 text-muted">
            AURA Audiology will contact you to confirm availability and appointment
            details.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-sm font-bold text-gold-dark underline underline-offset-4"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-line bg-paper p-6 soft-shadow sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-navy">
          Full name<span className="text-gold-dark"> *</span>
          <input
            className="field mt-2"
            name="fullName"
            autoComplete="name"
            required
            placeholder="Your full name"
          />
        </label>
        <label className="text-sm font-bold text-navy">
          Phone<span className="text-gold-dark"> *</span>
          <input
            className="field mt-2"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(347) 280-3523"
          />
        </label>
        <label className="text-sm font-bold text-navy">
          Email
          <input
            className="field mt-2"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@yourdomain.com"
          />
        </label>
        <label className="text-sm font-bold text-navy">
          Location / borough<span className="text-gold-dark"> *</span>
          <input
            className="field mt-2"
            name="location"
            required
            placeholder="Borough, neighborhood, or ZIP"
          />
        </label>
        <label className="text-sm font-bold text-navy">
          Service needed
          <select className="field mt-2" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-bold text-navy">
          Preferred date
          <input className="field mt-2" name="preferredDate" type="date" />
        </label>
        <label className="text-sm font-bold text-navy">
          Preferred time
          <input className="field mt-2" name="preferredTime" type="time" />
        </label>
        <label className="text-sm font-bold text-navy sm:col-span-2">
          Message
          <textarea
            className="field mt-2 min-h-32 resize-y"
            name="message"
            placeholder="Tell us who the visit is for, where care is needed, and anything helpful to know."
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b1120] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
      >
        {status === "submitting" ? "Sending request..." : "Request appointment"}
        <ArrowRight className="size-4" />
      </button>
      <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
        Submitting this form does not confirm an appointment. AURA Audiology will
        contact you to confirm availability.
      </p>
    </form>
  );
}
