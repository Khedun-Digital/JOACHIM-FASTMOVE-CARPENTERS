import React from 'react';
import { getConfig } from '../lib/config.ts';
import { SectionRenderer } from '../components/SectionRenderer.tsx';

export default function Reviews(): JSX.Element {
  const { components } = getConfig();
  return <SectionRenderer sections={components.reviews as any[]} />;
}

