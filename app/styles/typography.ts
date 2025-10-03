// Типографика и размеры текста
export const typography = {
  // Размеры заголовков
  h1: 'text-h1 font-serif font-bold leading-tight',
  h2: 'text-h2 font-serif font-semibold leading-tight',
  h3: 'text-h3 font-serif font-medium leading-tight',
  h4: 'text-xl font-serif font-medium leading-snug',
  
  // Размеры текста
  lead: 'text-lead font-sans leading-relaxed',
  body: 'text-body font-sans leading-relaxed',
  small: 'text-sm font-sans leading-relaxed',
  caption: 'text-xs font-sans leading-relaxed',
  
  // Цвета текста
  primary: 'text-charcoal',
  secondary: 'text-earth-brown',
  accent: 'text-forest-green',
  muted: 'text-warm-beige',
  white: 'text-white',
  
  // Веса шрифтов
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

// Классы для разных типов контента
export const textStyles = {
  heading: `${typography.h2} ${typography.accent}`,
  subheading: `${typography.h3} ${typography.primary}`,
  body: `${typography.body} ${typography.secondary}`,
  lead: `${typography.lead} ${typography.primary}`,
  button: `${typography.small} ${typography.medium}`,
  link: `${typography.body} ${typography.accent} hover:underline transition-colors`,
  caption: `${typography.caption} ${typography.muted}`,
} as const;
