import React from 'react';

type Props = { steps: string[] };

export function Process({ steps }: Props): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Our process</h2>
      <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <li key={i} className="rounded-lg border p-6">
            <div className="text-sm text-slate-500">Step {i + 1}</div>
            <div className="text-lg font-medium">{s}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

