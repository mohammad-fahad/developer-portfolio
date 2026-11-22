import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function generateEmailTemplate(name, email, userMessage) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(userMessage).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial,sans-serif;color:#333;padding:20px;background:#f4f4f4;">
      <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1);">
        <h2 style="color:#007BFF;">New Message Received</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left:4px solid #007BFF;padding-left:10px;margin-left:0;">
          ${safeMessage}
        </blockquote>
      </div>
    </div>
  `;
}

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== "string" || !name.trim() || name.length > 100 ||
      typeof email !== "string" || !EMAIL_PATTERN.test(email) || email.length > 100 ||
      typeof message !== "string" || !message.trim() || message.length > 2000
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name, email and message." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || process.env.EMAIL_ADDRESS,
      subject: `Portfolio message from ${escapeHtml(name)}`,
      replyTo: email,
      text: message,
      html: generateEmailTemplate(name, email, message),
    });

    if (!data?.id) {
      console.error("Email provider did not return a message id");
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent!" },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Contact API error:", error?.message || "unknown error");
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
