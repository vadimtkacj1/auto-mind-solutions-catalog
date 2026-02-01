// Главный barrel export - сохраняет обратную совместимость
// Все существующие импорты продолжают работать без изменений

export type { ComponentItem } from './types/ComponentItem';
export { categories } from './categories/categories';
export { components } from './components';

// Опционально: Экспорт отдельных массивов компонентов для более гранулярных импортов
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
} from './components';
