import { czechitasRenderVitePlugin } from '@czechitas/render/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/templating-demo', // Nutno upravit podle názvu repozitáře
	plugins: [czechitasRenderVitePlugin()],
})
