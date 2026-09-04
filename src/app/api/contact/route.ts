import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Escape HTML so user input can't break layout or inject markup into emails. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BRAND = {
  name: "Kanhaiya Prajapati",
  role: "Frontend Engineer",
  email: "kanhaiyaprajapati756@gmail.com",
  github: "https://github.com/KanhaiyaPrajapati",
  linkedin: "https://www.linkedin.com/in/kanhaiya-prajapati-a59b7a157/",
  portfolio: "https://kanhaiya-portfolio.vercel.app",
  primary: "#6366f1",
  accent: "#8b5cf6",
};

/**
 * Notification email sent to the site owner when someone submits the form.
 * Uses a table-based, light-themed layout for reliable rendering across
 * Gmail, Outlook, and Apple Mail.
 */
function ownerNotificationTemplate(name: string, email: string, message: string) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";
  const sentAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <title>New Portfolio Inquiry</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,${BRAND.primary},${BRAND.accent});padding:36px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <p style="margin:0 0 6px;color:rgba(255,255,255,0.75);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;">New Inquiry</p>
                      <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">You have a new message</h1>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Sender identity -->
            <tr>
              <td style="padding:32px 40px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;padding-right:16px;">
                      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,${BRAND.primary},${BRAND.accent});color:#ffffff;font-size:22px;font-weight:700;line-height:52px;text-align:center;">${initial}</div>
                    </td>
                    <td style="vertical-align:middle;">
                      <p style="margin:0;color:#0f172a;font-size:18px;font-weight:700;">${name}</p>
                      <a href="mailto:${email}" style="color:${BRAND.primary};font-size:14px;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:20px 40px 8px;">
                <p style="margin:0 0 8px;color:#64748b;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid ${BRAND.primary};border-radius:10px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0;color:#334155;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding:24px 40px 32px;" align="center">
                <a href="mailto:${email}?subject=Re:%20Your%20message%20via%20portfolio" style="display:inline-block;background:linear-gradient(135deg,${BRAND.primary},${BRAND.accent});color:#ffffff;padding:13px 34px;border-radius:10px;font-size:15px;font-weight:600;text-decoration:none;">Reply to ${name}</a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;" align="center">
                <p style="margin:0;color:#94a3b8;font-size:12px;">Received ${sentAt} IST &middot; via your portfolio contact form</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

/** Auto-reply sent back to the person who submitted the form. */
function autoReplyTemplate(name: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <title>Thanks for reaching out</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,${BRAND.primary},${BRAND.accent});padding:40px;" align="center">
                <div style="width:64px;height:64px;border-radius:50%;background-color:rgba(255,255,255,0.15);color:#ffffff;font-size:28px;font-weight:700;line-height:64px;text-align:center;margin:0 auto 14px;">KP</div>
                <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">Thanks for reaching out!</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px 40px 16px;">
                <p style="margin:0 0 16px;color:#0f172a;font-size:16px;line-height:1.7;">Hi ${name},</p>
                <p style="margin:0 0 16px;color:#475569;font-size:15px;line-height:1.7;">Thank you for getting in touch. I've received your message and will get back to you within 1&ndash;2 business days.</p>
                <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.7;">In the meantime, feel free to explore my work and connect with me:</p>

                <!-- Links -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 8px;">
                  <tr>
                    <td style="padding:0 6px;">
                      <a href="${BRAND.portfolio}" style="display:inline-block;background-color:#f1f5f9;color:${BRAND.primary};padding:10px 20px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;">Portfolio</a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="${BRAND.github}" style="display:inline-block;background-color:#f1f5f9;color:${BRAND.primary};padding:10px 20px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;">GitHub</a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="${BRAND.linkedin}" style="display:inline-block;background-color:#f1f5f9;color:${BRAND.primary};padding:10px 20px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;">LinkedIn</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Signature -->
            <tr>
              <td style="padding:16px 40px 36px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e2e8f0;">
                  <tr>
                    <td style="padding-top:24px;">
                      <p style="margin:0;color:#0f172a;font-size:16px;font-weight:700;">${BRAND.name}</p>
                      <p style="margin:2px 0 0;color:${BRAND.primary};font-size:13px;font-weight:600;">${BRAND.role}</p>
                      <a href="mailto:${BRAND.email}" style="color:#94a3b8;font-size:13px;text-decoration:none;">${BRAND.email}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:18px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;" align="center">
                <p style="margin:0;color:#94a3b8;font-size:12px;">This is an automated confirmation &middot; Please don't reply to this email.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Guard: make missing credentials an obvious, actionable error instead of a
    // cryptic SMTP failure. This is the #1 cause of the 500 (server not restarted
    // after editing .env.local, so these are undefined at runtime).
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(
        "Contact form: EMAIL_USER or EMAIL_PASS is not set. " +
          "Check .env.local and restart the dev server."
      );
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        // Gmail shows App Passwords with spaces for readability, but the real
        // password has none. Strip them so either format works.
        pass: process.env.EMAIL_PASS.replace(/\s+/g, ""),
      },
    });

    // Verify the SMTP connection/credentials up front so failures are explicit.
    await transporter.verify();

    // Sanitize user input before embedding it in HTML emails.
    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeMessage = escapeHtml(String(message).trim());

    // Notification email to the site owner.
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New portfolio inquiry from ${safeName}`,
      html: ownerNotificationTemplate(safeName, safeEmail, safeMessage),
    });

    // Auto-reply confirmation to the sender.
    await transporter.sendMail({
      from: `"${BRAND.name}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${safeName}!`,
      html: autoReplyTemplate(safeName),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const detail =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "Failed to send message",
        // Only expose the underlying cause outside production to aid debugging.
        ...(process.env.NODE_ENV !== "production" ? { detail } : {}),
      },
      { status: 500 }
    );
  }
}
