import { czechitasRenderVitePlugin } from '@czechitas/render/plugin'
import { glob } from 'glob'
import { extname, relative } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/templating-demo', // Nutno upravit podle názvu repozitáře
	root: 'src',
	build: {
		outDir: '../dist',
		rollupOptions: {
			// input: {
			// 	main: resolve(__dirname, 'src/index.html'),
			// 	den: resolve(__dirname, 'src/den.html'),
			// },
			input: Object.fromEntries(
				glob
					.sync('src/**/*.html')
					.map((file) => [
						relative('src', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url)),
					]),
			),
		},
	},
	plugins: [czechitasRenderVitePlugin()],
})
