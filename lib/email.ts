export async function sendEmailNotification({
  name, email, subject, message,
}: {
  name: string; email: string; subject?: string; message: string;
}) {
  // If you don't set RESEND_API_KEY or SMTP_* vars, this will silently do nothing.
  try {
    if (process.env.RESEND_API_KEY && process.env.EMAIL_FROM && process.env.EMAIL_TO) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: subject ? `[Portfolio] ${subject}` : "New portfolio message",
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      return true;
    }
    if (process.env.SMTP_HOST && process.env.EMAIL_FROM && process.env.EMAIL_TO) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: subject ? `[Portfolio] ${subject}` : "New portfolio message",
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      return true;
    }
  } catch {
    // ignore email failures for now
  }
  return false;
}
