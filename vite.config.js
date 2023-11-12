import { defineConfig } from 'vite';

export default defineConfig({
    base: 'https://aldairuam-azc.github.io/connect4-local/',

    server: {
        port: 3000,
    },

    build: {
        outDir: 'dist',
    },
});