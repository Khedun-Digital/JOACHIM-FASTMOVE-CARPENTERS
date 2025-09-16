import React from 'react';

type QA = { q: string; a: string };
type Props = { items?: QA[] };

export function FAQ({ items = [] }: Props): JSX.Element {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
      <dl className="space-y-4">
        {items.map((it, i) => (
          <div key={i}>
            <dt className="font-medium text-slate-900">{it.q}</dt>
            <dd className="text-slate-600">{it.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

