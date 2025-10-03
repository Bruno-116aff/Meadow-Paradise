import type { Config } from "@react-router/dev/config";

const isStatic = process.env.REACT_ROUTER_CONFIG === 'static';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: !isStatic,
  
  // Настройки для статического экспорта
  ...(isStatic && {
    prerender: {
      routes: ['/']
    },
  }),
  
  // Настройки для GitHub Pages
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
} satisfies Config;
