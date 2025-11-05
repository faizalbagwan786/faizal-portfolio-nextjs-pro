// Tell Next/Vercel this is a dynamic Node API — don't try to pre-render
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const revalidate = 0;

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
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;

  // Persist (SQLite in dev / Vercel ephemeral)
  await prisma.message.create({ data: { name, email, subject, body: message } });

  // Optional email (no-op unless env vars are set)
  await sendEmailNotification({ name, email, subject, message });

  return NextResponse.json({ ok: true });
}
