import React from 'react';
import { getConfig } from '@/lib/config';
import { SectionRenderer } from '@/components/SectionRenderer';

export default function Contact(): JSX.Element {
  const { components } = getConfig();
  return <SectionRenderer sections={components.contact} />;
}

