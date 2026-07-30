import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
console.log("RESEND_API_KEY loaded:", process.env.RESEND_API_KEY ? `re_...${process.env.RESEND_API_KEY.slice(-4)}` : "MISSING");

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

    const fromAddress = "Bornstellar Website <onboarding@resend.dev>";

    const { data, error: resendError } = await resend.emails.send({
      from: fromAddress,
      to: ["bornstellarltd@gmail.com"], // Resend-registered email (must match exactly, lowercase)
      replyTo: email,
      subject: `New enquiry from ${name}: ${subject}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Bornstellar</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f4f2;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f4f2;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#1a1916;padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#9e9890;">Bornstellar Limited</p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.02em;line-height:1.3;">New Contact Enquiry</h1>
                  </td>
                  <td align="right" valign="middle">
                    <div style="width:40px;height:40px;background-color:#E8500A;border-radius:2px;"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div style="width:40px;height:2px;background-color:#E8500A;margin-top:20px;"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#fafaf8;padding:36px 40px;">

              <p style="margin:0 0 28px;font-size:13px;color:#6b6760;line-height:1.6;">
                A new message has been submitted through the Bornstellar website contact form. Details are below.
              </p>

              <!-- Field: Name -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#f5f4f2;border-left:3px solid #E8500A;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Full Name</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#1a1916;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Field: Email -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#f5f4f2;border-left:3px solid #E8500A;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Email Address</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#1a1916;"><a href="mailto:${email}" style="color:#E8500A;text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
              </table>

              <!-- Row: Organisation + Phone -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td width="48%" style="padding:14px 16px;background-color:#f5f4f2;border-left:3px solid #e8e6e1;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Organisation</p>
                    <p style="margin:0;font-size:14px;color:#1a1916;">${organization || '<span style="color:#9e9890;font-style:italic;">Not provided</span>'}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding:14px 16px;background-color:#f5f4f2;border-left:3px solid #e8e6e1;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Phone Number</p>
                    <p style="margin:0;font-size:14px;color:#1a1916;">${phone || '<span style="color:#9e9890;font-style:italic;">Not provided</span>'}</p>
                  </td>
                </tr>
              </table>

              <!-- Field: Division -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#f5f4f2;border-left:3px solid #e8e6e1;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Division of Interest</p>
                    <p style="margin:0;font-size:14px;color:#1a1916;">${division || '<span style="color:#9e9890;font-style:italic;">Not specified</span>'}</p>
                  </td>
                </tr>
              </table>

              <!-- Field: Subject -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="padding:14px 16px;background-color:#f5f4f2;border-left:3px solid #E8500A;">
                    <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Subject</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#1a1916;">${subject}</p>
                  </td>
                </tr>
              </table>

              <!-- Field: Message -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:18px 16px;background-color:#f5f4f2;border-left:3px solid #E8500A;">
                    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#9e9890;">Message</p>
                    <p style="margin:0;font-size:14px;color:#1a1916;line-height:1.7;white-space:pre-wrap;">${message.replace(/\n/g, "<br />")}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#E8500A;">
                    <a href="mailto:${email}" style="display:inline-block;padding:12px 28px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#ffffff;text-decoration:none;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#1a1916;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#fafaf8;">Bornstellar Limited</p>
                    <p style="margin:0;font-size:11px;color:#6b6760;">Future-ready solutions for Africa's growth</p>
                  </td>
                  <td align="right" valign="middle">
                    <p style="margin:0;font-size:10px;color:#6b6760;">www.bornstellarltd.com</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <div style="height:1px;background-color:#2e2d2a;"></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:12px;">
                    <p style="margin:0;font-size:10px;color:#6b6760;">This message was submitted via the Bornstellar website contact form. Reply directly to this email to respond to the sender.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (resendError) {
      console.error("Resend error details:", JSON.stringify(resendError, null, 2));
      return NextResponse.json(
        { error: "Failed to send email. Please try again.", detail: resendError },
        { status: 500 }
      );
    }

    console.log("Email sent successfully, ID:", data?.id);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
