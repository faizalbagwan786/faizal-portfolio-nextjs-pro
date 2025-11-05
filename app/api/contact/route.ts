import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/db";
import { sendEmailNotification } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { name, email, subject, message } = parsed.data;

  // Persist to SQLite (dev.db). On Vercel this is ephemeral, but it avoids build/runtime errors.
  await prisma.message.create({ data: { name, email, subject, body: message } });

  // Try sending an email if env vars are configured (safe no-op otherwise)
  await sendEmailNotification({ name, email, subject, message });

  return NextResponse.json({ ok: true });
}
