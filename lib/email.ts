export async function sendEmailNotification({
  name, email, subject, message
}: { name: string; email: string; subject?: string; message: string; }) {
  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: process.env.EMAIL_TO!,
        subject: subject ? `[Portfolio] ${subject}` : "New portfolio message",
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      return true;
    }
    if (process.env.SMTP_HOST) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_FROM!,
        to: process.env.EMAIL_TO!,
        subject: subject ? `[Portfolio] ${subject}` : "New portfolio message",
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      return true;
    }
  } catch (e) {
    console.error("Email send failed", e);
  }
  return false;
}
