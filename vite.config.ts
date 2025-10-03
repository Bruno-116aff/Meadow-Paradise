import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isStatic = process.env.REACT_ROUTER_CONFIG === 'static';

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	base: isStatic ? '/Meadow-Paradise/' : '/', // Правильный путь для GitHub Pages
	build: {
		outDir: 'build',
		assetsDir: 'assets',
		sourcemap: false,
	},
});
