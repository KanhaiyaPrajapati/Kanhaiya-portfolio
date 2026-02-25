import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you — notification about new contact
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f23; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1, #a855f7); padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 700;">New Contact Message</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">Someone reached out via your portfolio</p>
          </div>
          <div style="padding: 32px;">
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <p style="color: #a5b4fc; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">Name</p>
              <p style="color: #fff; font-size: 16px; font-weight: 600; margin: 0;">${name}</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
              <p style="color: #a5b4fc; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">Email</p>
              <a href="mailto:${email}" style="color: #818cf8; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
            </div>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px;">
              <p style="color: #a5b4fc; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
              <p style="color: #e2e8f0; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none;">Reply to ${name}</a>
            </div>
          </div>
          <div style="padding: 16px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">Sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Kanhaiya Prajapati" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f23; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1, #a855f7); padding: 32px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 700;">Thank You!</h1>
          </div>
          <div style="padding: 32px;">
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.7; margin: 0 0 16px;">Hi ${name},</p>
            <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
            <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">In the meantime, feel free to check out my work on <a href="https://github.com/KanhaiyaPrajapati" style="color: #818cf8; text-decoration: none;">GitHub</a> or connect on <a href="https://www.linkedin.com/in/kanhaiya-prajapati-a59b7a157/" style="color: #818cf8; text-decoration: none;">LinkedIn</a>.</p>
            <p style="color: #e2e8f0; font-size: 15px; margin: 0;">Best regards,<br><strong style="color: #a5b4fc;">Kanhaiya Prajapati</strong><br><span style="color: #94a3b8; font-size: 13px;">Frontend Engineer</span></p>
          </div>
          <div style="padding: 16px 32px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">kanhaiyaprajapati756@gmail.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
