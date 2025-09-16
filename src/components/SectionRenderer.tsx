import React from 'react';
import { componentRegistry } from './registry';
import { getConfig } from '../lib/config.ts';
import type { SectionInput } from '../lib/schema.ts';

type Props = { sections: SectionInput[] };

function resolvePath(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function SectionRenderer({ sections }: Props): JSX.Element {
  const { business } = getConfig();

  return (
    <div className="flex flex-col gap-16">
      {sections.map((section, idx) => {
        const Cmp = componentRegistry[section.type as keyof typeof componentRegistry];
        if (!Cmp) return null;

        let props: Record<string, unknown> = { ...(section.props || {}) };

        if (section.propsRef) {
          const ref = resolvePath(business, section.propsRef);
          if (ref && typeof ref === 'object') props = { ...props, ...ref };
        }

        if (section.propsFrom) {
          const from = resolvePath(business, section.propsFrom);
          if (from && typeof from === 'object') props = { ...props, ...from };
        }

        if (section.itemsFrom) {
          const items = resolvePath(business, section.itemsFrom);
          if (Array.isArray(items)) props = { ...props, items };
        }

        return <Cmp key={idx} {...(props as any)} />;
      })}
    </div>
  );
}

