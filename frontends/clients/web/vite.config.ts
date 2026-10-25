import { defineConfig, mergeConfig } from 'vite';
import { baseConfig } from '../../vite.config.ts';

export default mergeConfig(baseConfig, {
	base: '/web/',
	build: {
		outDir: '../../public/web'
	},
	server: {
		port: 5173
	}
});
