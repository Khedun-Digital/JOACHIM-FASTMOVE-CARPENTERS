import React from 'react';

type Testimonial = { author: string; quote: string };
type Props = { items?: Testimonial[] };

export function TestimonialList({ items = [] }: Props): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">What clients say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <figure key={i} className="rounded-lg border p-6 bg-white">
            <blockquote className="text-slate-700">"{t.quote}"</blockquote>
            <figcaption className="mt-3 text-sm text-slate-500">— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

