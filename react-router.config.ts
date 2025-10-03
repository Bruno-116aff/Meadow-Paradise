import type { Config } from '@react-router/dev/config';

const isStatic = process.env.REACT_ROUTER_CONFIG === 'static';

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: !isStatic,

	// Базовый путь для GitHub Pages
	// basename: isStatic ? '/Meadow-Paradise' : '/',
	basename: '/',

	// Настройки для статического экспорта
	...(isStatic && {
		prerender: ['/'],
	}),
} satisfies Config;
