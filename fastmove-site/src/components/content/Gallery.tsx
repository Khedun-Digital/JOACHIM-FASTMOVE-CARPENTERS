import React from 'react';

type Props = { folder: string };

export function Gallery({ folder }: Props): JSX.Element {
  // In a real app you'd load images from the folder. Placeholder grid here.
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Recent work</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {placeholders.map((i) => (
          <div key={i} className="aspect-[4/3] rounded-lg bg-slate-200" aria-label={`Image ${i} from ${folder}`} />
        ))}
      </div>
    </section>
  );
}

