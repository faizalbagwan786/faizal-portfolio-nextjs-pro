'use client'
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    setStatus(res.ok ? 'ok' : 'error');
    if (res.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card p-5 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm">Name</span>
          <input name="name" required className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2" />
        </label>
        <label className="space-y-2">
          <span className="text-sm">Email</span>
          <input name="email" type="email" required className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2" />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm">Subject</span>
        <input name="subject" className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2" />
      </label>
      <label className="space-y-2">
        <span className="text-sm">Message</span>
        <textarea name="message" required minLength={10} rows={5} className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2" />
      </label>
      <button className="btn-primary" disabled={status==='loading'}>{status==='loading' ? 'Sending…' : 'Send message'}</button>
      {status==='ok' && <p className="text-sm text-green-400">Thanks! I’ll get back to you soon.</p>}
      {status==='error' && <p className="text-sm text-red-400">Something went wrong. Try again.</p>}
    </form>
  );
}
