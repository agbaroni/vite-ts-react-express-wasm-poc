import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export const baseConfig = defineConfig({
	build: {
		assetsInlineLimit: 0,
		emptyOutDir: true
	},
	plugins: [ react() ]
});
