/**
 * Возвращает правильный путь к изображению для GitHub Pages
 * Vite автоматически обрабатывает базовый путь, поэтому просто возвращаем исходный путь
 * @param path - путь к изображению (например: '/images/logo.png')
 * @returns - правильный путь (Vite сам добавит базовый путь)
 */
export function getImagePath(path: string): string {
  return path;
}

/**
 * Возвращает базовый URL для GitHub Pages
 */
export function getBaseUrl(): string {
  if (process.env.REACT_ROUTER_CONFIG === 'static') {
    return '/Meadow-Paradise';
  }
  return '';
}
