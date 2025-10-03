import type { Config } from "@react-router/dev/config";

export default {
  // Отключаем SSR для статического экспорта
  ssr: false,
  
  // Включаем предварительный рендеринг всех маршрутов
  prerender: {
    routes: ['/']
  },
  
  // Настройки для GitHub Pages
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
} satisfies Config;
