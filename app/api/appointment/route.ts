import { NextResponse } from "next/server";
import { contactInfo } from "@/lib/contact";
import { Resend } from "resend";

export const runtime = "nodejs";

type AppointmentRequest = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

function readField(body: Record<string, unknown>, key: keyof AppointmentRequest) {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderHtml(request: AppointmentRequest) {
  const rows = [
    ["Full name", request.fullName],
    ["Phone", request.phone],
    ["Email", request.email || "Not provided"],
    ["Location / borough", request.location],
    ["Service needed", request.service || "Not selected"],
    ["Preferred date", request.preferredDate || "Not provided"],
    ["Preferred time", request.preferredTime || "Not provided"],
    ["Message", request.message || "Not provided"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #101827; line-height: 1.6;">
      <h1 style="font-size: 24px; margin-bottom: 8px;">New AURA Audiology appointment request</h1>
      <p style="color: #6B665C; margin-top: 0;">A new request was submitted from the website.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border-top: 1px solid #E6DDCC; padding: 12px 10px; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                <td style="border-top: 1px solid #E6DDCC; padding: 12px 10px;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

function renderText(request: AppointmentRequest) {
  return [
    "New AURA Audiology appointment request",
    "",
    `Full name: ${request.fullName}`,
    `Phone: ${request.phone}`,
    `Email: ${request.email || "Not provided"}`,
    `Location / borough: ${request.location}`,
    `Service needed: ${request.service || "Not selected"}`,
    `Preferred date: ${request.preferredDate || "Not provided"}`,
    `Preferred time: ${request.preferredTime || "Not provided"}`,
    `Message: ${request.message || "Not provided"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const appointment: AppointmentRequest = {
    fullName: readField(body, "fullName"),
    phone: readField(body, "phone"),
    email: readField(body, "email"),
    location: readField(body, "location"),
    service: readField(body, "service"),
    preferredDate: readField(body, "preferredDate"),
    preferredTime: readField(body, "preferredTime"),
    message: readField(body, "message"),
  };

  if (!appointment.fullName || !appointment.phone || !appointment.location) {
    return NextResponse.json(
      { error: "Please provide your name, phone number, and location." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || contactInfo.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || `AURA Audiology <${contactInfo.email}>`;

  if (!apiKey || !toEmail) {
    console.warn("AURA Audiology appointment request received without Resend configuration.", appointment);

    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, delivery: "not_configured" });
    }

    return NextResponse.json(
      { error: "Appointment request delivery is not configured yet. Please call us directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `New appointment request from ${appointment.fullName}`,
    html: renderHtml(appointment),
    text: renderText(appointment),
  });

  if (error) {
    console.error("Resend appointment email failed.", error);
    return NextResponse.json(
      { error: "Unable to send your request right now. Please call us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivery: "sent" });
}
