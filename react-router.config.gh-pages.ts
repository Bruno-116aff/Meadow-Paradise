import type { Config } from '@react-router/dev/config';

export default {
  // Настройки для GitHub Pages
  ssr: false,
  prerender: {
    routes: ['/']
  },
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
  buildDirectory: 'build',
  publicPath: '/MEADOW-PARADISE-RANCHO/', // Замените на название вашего репозитория
} satisfies Config;
