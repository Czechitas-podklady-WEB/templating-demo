import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/templating-demo', // Nutno upravit podle názvu repozitáře
	plugins: [react()],
})
