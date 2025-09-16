import React from 'react';
import { getConfig } from '@/lib/config';
import { SectionRenderer } from '@/components/SectionRenderer';

export default function Reviews(): JSX.Element {
  const { components } = getConfig();
  return <SectionRenderer sections={components.reviews} />;
}

