import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { basePathPlugin } from './vite.plugins.base-path';

const isStatic = process.env.REACT_ROUTER_CONFIG === 'static';

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), basePathPlugin()],
	base: isStatic ? '/Meadow-Paradise/' : '/', // Правильный путь для GitHub Pages
	build: {
		outDir: 'build',
		assetsDir: 'assets',
		sourcemap: false,
	},
	// Настройки для обработки статических файлов
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
	// Правильная обработка путей для GitHub Pages
	publicDir: 'public',
});
