import { ComponentItem } from '../types/ComponentItem';
import { headers } from './headers';
import { heroes } from './heroes';
import { carousels } from './carousels';
import { reviews } from './reviews';
import { ctas } from './ctas';
import { contactForms } from './contactForms';
import { faqs } from './faqs';
import { accordions } from './accordions';
import { buttons } from './buttons';
import { animations } from './animations';
import { footers } from './footers';
import { colorPalettes } from './colorPalettes';
import { fonts } from './fonts';

export const components: ComponentItem[] = [
  ...headers,      // Indices 0-14 (15 items)
  ...heroes,       // Indices 15-19 (5 items)
  ...carousels,    // Indices 20-27 (8 items)
  ...reviews,      // Indices 28-33 (6 items)
  ...ctas,         // Indices 34-38 (5 items)
  ...contactForms, // Indices 39-46 (8 items)
  ...faqs,         // Indices 47-51 (5 items)
  ...accordions,   // Indices 52-56 (5 items)
  ...buttons,      // Indices 57-66 (10 items)
  ...animations,   // Indices 67-74 (8 items)
  ...footers,      // Indices 75-79 (5 items)
  ...colorPalettes,// Indices 80-101 (22 items)
  ...fonts,        // Indices 102-109 (8 items)
];

export {
  headers,
  heroes,
  carousels,
  reviews,
  ctas,
  contactForms,
  faqs,
  accordions,
  buttons,
  animations,
  footers,
  colorPalettes,
  fonts,
};