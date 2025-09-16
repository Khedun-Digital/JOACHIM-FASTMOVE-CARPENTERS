import { getConfig } from './config';

function hexToRgbComponents(hex: string): string {
  const v = hex.replace('#', '');
  const r = parseInt(v.substring(0, 2), 16);
  const g = parseInt(v.substring(2, 4), 16);
  const b = parseInt(v.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
}

export function applyBrandTokens(): void {
  const { brand } = getConfig();
  const root = document.documentElement;
  root.style.setProperty('--color-brand', hexToRgbComponents(brand.colors.brand));
  root.style.setProperty('--color-brand-foreground', hexToRgbComponents(brand.colors.brandForeground));
  root.style.setProperty('--radius-sm', brand.radius.sm);
  root.style.setProperty('--radius-md', brand.radius.md);
  root.style.setProperty('--radius-lg', brand.radius.lg);
  root.style.setProperty('--radius-xl', brand.radius.xl);
}

