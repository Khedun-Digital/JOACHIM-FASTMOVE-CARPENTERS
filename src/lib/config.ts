import siteJson from '../../config/site.json';
import brandJson from '../../config/brand.json';
import businessJson from '../../config/business_profile.json';
import componentsJson from '../../config/components.json';
import { siteConfigSchema, brandSchema, businessProfileSchema, componentsSchema } from './schema';
import type { SiteConfig, Brand, BusinessProfile } from './types';

function safeParse<T>(schema: any, data: unknown, name: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[config] Failed to parse ${name}:`, result.error.flatten());
    throw result.error;
  }
  return result.data as T;
}

const site: SiteConfig = safeParse(siteConfigSchema, siteJson, 'site.json');
const brand: Brand = safeParse(brandSchema, brandJson, 'brand.json');
const business: BusinessProfile = safeParse(businessProfileSchema, businessJson, 'business_profile.json');
const components = safeParse(componentsSchema, componentsJson, 'components.json');

export type Config = {
  site: SiteConfig;
  brand: Brand;
  business: BusinessProfile;
  components: any;
};

export function getConfig(): Config {
  return { site, brand, business, components };
}

