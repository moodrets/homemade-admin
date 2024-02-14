import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development'

    return {
        base: isDev ? '/' : '/homemade-admin/',
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        server: {
            cors: true,
            proxy: {
                '/api': {
                    target: 'http://82.97.241.147:8082',
                    changeOrigin: true,
                },
            },
        },
    }
})
