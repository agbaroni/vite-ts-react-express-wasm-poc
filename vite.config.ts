import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export const baseConfig = defineConfig({
	build: {
		assetsInlineLimit: 0,
		emptyOutDir: true
	},
	plugins: [ react(), tailwindcss() ]
});
