import React from 'react';

type Props = { 
  headline?: string; 
  action?: { label: string; to?: string; href?: string };
  label?: string;
  href?: string;
};

export function CTA({ headline, action, label, href }: Props): JSX.Element {
  const ctaLabel = label || action?.label || 'Get Started';
  const ctaHref = href || action?.href || action?.to || '/contact';
  const ctaHeadline = headline || 'Ready to start your project?';
  
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-4">{ctaHeadline}</h2>
      <a href={ctaHref} className="inline-block rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3">
        {ctaLabel}
      </a>
    </section>
  );
}

