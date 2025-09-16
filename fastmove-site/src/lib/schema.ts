import { z } from 'zod';

export const navItemSchema = z.object({
  label: z.string(),
  path: z.string()
});

export const sitePageSchema = z.object({
  path: z.string(),
  label: z.string(),
  sectionsKey: z.string()
});

export const siteConfigSchema = z.object({
  title: z.string(),
  description: z.string(),
  nav: z.array(navItemSchema),
  pages: z.array(sitePageSchema)
});

export const brandSchema = z.object({
  name: z.string(),
  colors: z.object({
    brand: z.string(),
    brandForeground: z.string(),
    background: z.string(),
    foreground: z.string(),
    muted: z.string(),
    accent: z.string().optional(),
    surface: z.string().optional()
  }),
  radius: z.object({ sm: z.string(), md: z.string(), lg: z.string(), xl: z.string() }),
  font: z.object({ family: z.string(), sizeBase: z.string() }),
  typography: z.object({
    heading: z.string(),
    body: z.string(),
    scale: z.record(z.string())
  }).optional(),
  spacing: z.record(z.number()).optional(),
  shadows: z.record(z.string()).optional()
});

export const businessProfileSchema = z.object({
  legalName: z.string(),
  displayName: z.string().optional(),
  tagline: z.string(),
  phone: z.string(),
  whatsapp: z.string().optional(),
  email: z.string(),
  address: z.object({ 
    street: z.string(), 
    city: z.string(), 
    postcode: z.string(), 
    province: z.string().optional(),
    country: z.string() 
  }),
  hours: z.array(z.object({ days: z.string(), open: z.string(), close: z.string() })),
  serviceAreas: z.array(z.string()),
  services: z.array(z.object({
    slug: z.string(),
    name: z.string(),
    description: z.string(),
    lead_time_days: z.number().optional(),
    from_price_zar: z.number().optional()
  })).optional(),
  social: z.record(z.string()),
  cta: z.object({
    primary: z.object({ label: z.string(), href: z.string() }),
    secondary: z.object({ label: z.string(), href: z.string() })
  }).optional(),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  testimonials: z.array(z.object({ quote: z.string(), author: z.string() })).optional()
});

// Components schema: object with keys for pages; value is array of sections
export const sectionSchema = z.object({
  type: z.string(),
  props: z.record(z.any()).optional(),
  propsRef: z.string().optional(),
  propsFrom: z.string().optional(),
  itemsFrom: z.string().optional()
});

export const componentsSchema = z.record(z.array(sectionSchema));

export type SectionInput = z.infer<typeof sectionSchema>;

