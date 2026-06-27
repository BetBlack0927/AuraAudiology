"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  [
    "Do you visit nursing homes?",
    "Yes. AURA Audiology can coordinate mobile visits for residents in nursing homes and care communities, with appointment details confirmed in advance.",
  ],
  [
    "Do you offer home visits?",
    "Yes. Home visits are available for patients who prefer hearing care in a private, familiar setting.",
  ],
  [
    "What areas do you serve?",
    "AURA Audiology provides mobile audiology services in New York. Availability may vary by borough, location, and scheduling needs.",
  ],
  [
    "Do you accept insurance?",
    "Insurance and payment options may vary. Please contact AURA Audiology before booking to discuss your situation. This website does not guarantee insurance acceptance.",
  ],
  [
    "How long does a visit take?",
    "Visit length depends on the service needed, but many appointments take approximately 45 to 75 minutes. A clearer estimate can be provided when your appointment is confirmed.",
  ],
  [
    "Is submitting the form a confirmed appointment?",
    "No. Submitting the appointment request form does not confirm an appointment. AURA Audiology will contact you to confirm availability and next steps.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map(([question, answer], index) => (
        <div key={question}>
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-6 py-7 text-left"
            aria-expanded={open === index}
          >
            <span className="font-serif text-2xl font-semibold leading-tight text-navy">
              {question}
            </span>
            <ChevronDown
              className={`size-5 shrink-0 text-gold-dark transition ${
                open === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === index && (
            <p className="max-w-3xl pb-7 pr-10 leading-8 text-muted">{answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
