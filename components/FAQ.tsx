"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Do you accept insurance?", "Coverage varies by plan and service. Please contact us with your insurance information, and we can discuss available options before your visit."],
  ["What areas do you serve?", "AuroAudiology provides mobile visits across New York. Availability and possible travel fees depend on your location, so reach out with your ZIP code for current service-area details."],
  ["Can you visit nursing homes and assisted living communities?", "Yes. We coordinate with residents, families, and facility teams to make on-site hearing care comfortable and convenient."],
  ["What happens during a home visit?", "Your visit is tailored to the service requested and may include a hearing evaluation, hearing-aid consultation, device check, cleaning, and personalized recommendations."],
  ["How long does an appointment take?", "Most appointments take approximately 45–75 minutes, depending on the service and individual needs. We’ll provide a clearer estimate when confirming your visit."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map(([question, answer], index) => (
        <div key={question}>
          <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={open === index}>
            <span className="text-base font-bold sm:text-lg">{question}</span>
            <ChevronDown className={`size-5 shrink-0 text-teal transition ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index && <p className="max-w-3xl pb-6 pr-10 leading-relaxed text-ink/65">{answer}</p>}
        </div>
      ))}
    </div>
  );
}
