import { czechitasRenderVitePlugin } from '@czechitas/render/plugin'
import { glob } from 'glob'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/templating-react-demo/', // Nutno upravit podle názvu repozitáře
	root: 'src/pages',
	publicDir: '../../public',
	build: {
		outDir: '../../dist',
		emptyOutDir: true,
		target: 'es2022',
		rollupOptions: {
			input: glob.sync('src/pages/**/*.html'),
		},
	},
	plugins: [czechitasRenderVitePlugin()],
})
