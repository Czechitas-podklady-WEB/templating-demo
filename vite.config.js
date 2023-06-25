import { czechitasRenderVitePlugin } from '@czechitas/render/plugin'
import { glob } from 'glob'
import { extname, relative } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/templating-demo', // Nutno upravit podle názvu repozitáře
	root: 'src/pages',
	build: {
		outDir: '../../dist',
		rollupOptions: {
			input: Object.fromEntries(
				glob
					.sync('src/pages/**/*.html')
					.map((file) => [
						relative(
							'src/pages',
							file.slice(0, file.length - extname(file).length),
						),
						fileURLToPath(new URL(file, import.meta.url)),
					]),
			),
		},
	},
	plugins: [czechitasRenderVitePlugin()],
})
