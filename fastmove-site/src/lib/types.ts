export type NavItem = { label: string; path: string };

export type SitePage = { path: string; label: string; sectionsKey: string };

export type SiteConfig = {
  title: string;
  description: string;
  nav: NavItem[];
  pages: SitePage[];
};

export type Brand = {
  name: string;
  colors: {
    brand: string;
    brandForeground: string;
    background: string;
    foreground: string;
    muted: string;
    accent?: string;
    surface?: string;
  };
  radius: { sm: string; md: string; lg: string; xl: string };
  font: { family: string; sizeBase: string };
  typography?: {
    heading: string;
    body: string;
    scale: Record<string, string>;
  };
  spacing?: Record<string, number>;
  shadows?: Record<string, string>;
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  lead_time_days?: number;
  from_price_zar?: number;
};

export type BusinessProfile = {
  legalName: string;
  displayName?: string;
  tagline: string;
  phone: string;
  whatsapp?: string;
  email: string;
  address: { street: string; city: string; postcode: string; province?: string; country: string };
  hours: { days: string; open: string; close: string }[];
  serviceAreas: string[];
  services?: Service[];
  social: Record<string, string>;
  cta?: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  faqs?: { q: string; a: string }[];
  testimonials?: { quote: string; author: string }[];
};

