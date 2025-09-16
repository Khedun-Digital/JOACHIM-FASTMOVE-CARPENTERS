import React, { useState } from 'react';

type Props = { endpoint: string };

export function ContactForm({ endpoint }: Props): JSX.Element {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Get a free quote</h2>
      <form onSubmit={onSubmit} className="grid gap-4">
        <input name="name" required placeholder="Your name" className="border rounded-md px-3 py-2" />
        <input name="email" type="email" required placeholder="Email" className="border rounded-md px-3 py-2" />
        <input name="phone" placeholder="Phone" className="border rounded-md px-3 py-2" />
        <textarea name="message" required placeholder="Tell us about your project" className="border rounded-md px-3 py-2 min-h-[120px]" />
        <div>
          <label className="block text-sm text-slate-600 mb-1">Add photos (optional)</label>
          <input name="photos" type="file" multiple accept="image/*" className="block" />
        </div>
        <button disabled={status==='loading'} className="rounded-md bg-amber-500 text-slate-900 font-semibold px-4 py-2">
          {status==='loading' ? 'Sending…' : 'Submit'}
        </button>
        {status==='success' && <p className="text-green-700">Thanks! We will get back to you shortly.</p>}
        {status==='error' && <p className="text-red-700">Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}

