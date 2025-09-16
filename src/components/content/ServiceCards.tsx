import React from 'react';
import type { Service } from '../../lib/types.ts';

type Props = { 
  services?: Service[];
  items?: Service[];
};

export function ServiceCards({ services, items }: Props): JSX.Element {
  const serviceList = services || items || [];
  
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Our services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceList.map((s) => (
          <div key={s.slug || s.name} className="rounded-lg border p-6">
            <h3 className="text-lg font-medium">{s.name}</h3>
            <p className="mt-2 text-slate-600">{s.description}</p>
            {s.from_price_zar && (
              <p className="mt-2 text-sm text-slate-500">From R{s.from_price_zar.toLocaleString()}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

