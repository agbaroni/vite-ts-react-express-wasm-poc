import { defineConfig, mergeConfig } from 'vite';
import { baseConfig } from '../../vite.config.ts';

export default mergeConfig(baseConfig, {
    base: '/pwa/',
    build: {
        outDir: '../../public/pwa'
    },
    server: {
        port: 5174
    }
});
