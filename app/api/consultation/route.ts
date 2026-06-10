import { NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ConsultationRequest = {
  name?: unknown;
  email?: unknown;
  projectDescription?: unknown;
};

export async function POST(request: Request) {
  let body: ConsultationRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const projectDescription = typeof body.projectDescription === "string" ? body.projectDescription.trim() : "";

  if (!name || !email || !projectDescription) {
    return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!resendApiKey) {
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 500 });
  }

  const emailBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Project Description:",
    projectDescription
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Elegant Home Automation <designs@eleganthomeautomation.com>",
      to: ["shorabtuli1975@gmail.com"],
      reply_to: email,
      subject: "New Consultation Request - Elegant Home Automation",
      text: emailBody
    })
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
