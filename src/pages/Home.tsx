import React from 'react';
import { getConfig } from '../lib/config.ts';
import { SectionRenderer } from '../components/SectionRenderer.tsx';

export default function Home(): JSX.Element {
  console.log('Home component rendering');
  
  try {
    const { components } = getConfig();
    console.log('Components loaded:', components);
    return <SectionRenderer sections={components.home as any[]} />;
  } catch (error) {
    console.error('Error in Home component:', error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">FastMove Carpenters</h1>
        <p>Welcome to our carpentry services!</p>
        <p className="text-red-500">Debug: {error?.toString()}</p>
      </div>
    );
  }
}

