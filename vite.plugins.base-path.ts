import type { Plugin } from 'vite';

/**
 * Плагин для правильной обработки базового пути в статических файлах
 */
export function basePathPlugin(): Plugin {
  return {
    name: 'base-path-plugin',
    generateBundle(options, bundle) {
      // Обрабатываем HTML файлы
      for (const fileName in bundle) {
        const chunk = bundle[fileName];
        if (chunk.type === 'asset' && fileName.endsWith('.html')) {
          if (typeof chunk.source === 'string') {
            // Заменяем пути к статическим файлам
            chunk.source = chunk.source.replace(
              /src="\/images\//g,
              'src="/Meadow-Paradise/images/'
            );
            chunk.source = chunk.source.replace(
              /href="\/images\//g,
              'href="/Meadow-Paradise/images/'
            );
          }
        }
      }
    },
    transformIndexHtml(html) {
      // Обрабатываем HTML при разработке
      if (process.env.REACT_ROUTER_CONFIG === 'static') {
        return html
          .replace(/src="\/images\//g, 'src="/Meadow-Paradise/images/')
          .replace(/href="\/images\//g, 'href="/Meadow-Paradise/images/');
      }
      return html;
    }
  };
}
