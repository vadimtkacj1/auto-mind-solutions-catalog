# Category Buttons / כפתורי קטגוריות

Коллекция из 5 уникальных компонентов кнопок с разными анимациями и формами для FilterBar.

## Компоненты

### 1. ScaleButton
**Форма:** Rounded (12px border-radius)
**Анимация:** Scale + градиент overlay
**Особенности:**
- Кнопка масштабируется при hover (1.05x)
- Внутренний контент увеличивается отдельно (1.1x)
- Gradient overlay появляется плавно
- Активное состояние с подсветкой

**Использование:**
```tsx
<ScaleButton isActive={false} onClick={handleClick}>
  Текст кнопки
</ScaleButton>
```

---

### 2. SlideButton
**Форма:** Pill (24px border-radius - полностью скругленная)
**Анимация:** Sliding background слева направо
**Особенности:**
- Фон "въезжает" слева при hover
- Cubic-bezier easing для упругого эффекта
- Smooth color transition
- Gradient background в активном состоянии

**Использование:**
```tsx
<SlideButton isActive={false} onClick={handleClick}>
  Текст кнопки
</SlideButton>
```

---

### 3. RotateButton
**Форма:** Square (8px border-radius)
**Анимация:** 3D flip вращение (180°)
**Особенности:**
- 3D перспектива (1000px)
- Двусторонняя кнопка (front/back)
- Backface-visibility для реалистичного флипа
- Разные фоны для каждой стороны

**Использование:**
```tsx
<RotateButton isActive={false} onClick={handleClick}>
  Текст кнопки
</RotateButton>
```

---

### 4. MorphButton
**Форма:** Морфинг от квадрата (4px) к pill (24px)
**Анимация:** Shape morphing + expanding background
**Особенности:**
- Форма меняется при hover
- Фон расширяется от центра (круг → скругленный прямоугольник)
- Плавная трансформация border-radius
- Cubic-bezier для органичного движения

**Использование:**
```tsx
<MorphButton isActive={false} onClick={handleClick}>
  Текст кнопки
</MorphButton>
```

---

### 5. RippleButton
**Форма:** Rounded medium (16px border-radius)
**Анимация:** Material Design ripple effect
**Особенности:**
- Динамическая ripple анимация при клике
- Позиция ripple определяется координатами клика
- Auto-cleanup анимаций через 600ms
- Hover с подъемом и тенью

**Использование:**
```tsx
<RippleButton isActive={false} onClick={handleClick}>
  Текст кнопки
</RippleButton>
```

## Общие характеристики

### Props
```typescript
interface CategoryButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}
```

### Цветовая палитра
Все кнопки используют единую цветовую схему:
- **База:** rgba(255, 255, 255, 0.05) - прозрачный белый
- **Градиент:** rgba(139, 92, 246, 0.2-0.5) → rgba(59, 130, 246, 0.2-0.5)
- **Текст:** rgba(255, 255, 255, 0.7) → #fff
- **Borders:** rgba(255, 255, 255, 0.1-0.5)

### Технологии
- React TypeScript
- CSS Modules
- CSS3 Animations & Transitions
- Glassmorphism effects
- Backdrop filters

## Структура файлов

```
CategoryButtons/
├── index.ts                      # Exports
├── CategoryButton.types.ts       # Shared TypeScript types
├── README.md                     # Documentation
├── ScaleButton/
│   ├── ScaleButton.tsx
│   └── ScaleButton.module.css
├── SlideButton/
│   ├── SlideButton.tsx
│   └── SlideButton.module.css
├── RotateButton/
│   ├── RotateButton.tsx
│   └── RotateButton.module.css
├── MorphButton/
│   ├── MorphButton.tsx
│   └── MorphButton.module.css
└── RippleButton/
    ├── RippleButton.tsx
    └── RippleButton.module.css
```

## Интеграция с FilterBar

В `FilterBar.tsx` кнопки циклически распределяются по категориям:

```tsx
const buttonComponents = [
  ScaleButton,    // категория 0, 5, 10...
  SlideButton,    // категория 1, 6, 11...
  RotateButton,   // категория 2, 7, 12...
  MorphButton,    // категория 3, 8, 13...
  RippleButton,   // категория 4, 9, 14...
];

{categories.map((category, index) => {
  const ButtonComponent = buttonComponents[index % buttonComponents.length];
  return <ButtonComponent ... />;
})}
```

## Performance

- Все анимации используют `transform` и `opacity` для GPU-ускорения
- `will-change` не используется (добавляется автоматически при необходимости)
- Transitions оптимизированы с cubic-bezier easing
- RippleButton автоматически очищает старые ripples

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (включая backdrop-filter)
- Mobile browsers: ✅ Полностью адаптивно
