import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_GH3oKMUn_NJSf3x1iaeWJ1ujRm7WjAmts");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, division, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete the required fields before submitting." },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "Bornstellar Website <onboarding@resend.dev>";

    const data = await resend.emails.send({
      from: fromAddress,
      to: ["Bornstellarltd@gmail.com"],
      replyTo: email,
      subject: `New enquiry from ${name}: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${organization || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Division:</strong> ${division || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
