import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: '/src/assets/',
			components: '/src/components/',
			data: '/src/data/',
			hooks: '/src/hooks/',
			interfaces: '/src/interfaces/',
			store: '/src/store/',
			styles: '/src/styles/',
			utils: '/src/utils/'
		}
	}
})
