import { HeroCanvas } from './hero/HeroCanvas';
import { ServiceCards } from './content/ServiceCards';
import { Process } from './content/Process';
import { Gallery } from './content/Gallery';
import { TestimonialList } from './content/TestimonialList';
import { ContactForm } from './content/ContactForm';
import { FAQ } from './content/FAQ';
import { CTA } from './content/CTA';

export const componentRegistry = {
  HeroCanvas,
  ServiceCards,
  Process,
  Gallery,
  TestimonialList,
  ContactForm,
  FAQ,
  CTA
};

export type ComponentRegistry = typeof componentRegistry;

