import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        base: env.VITE_BASE_URI,
        plugins: [vue()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        server: {
            cors: true,
            port: env.VITE_DEV_PORT,
            proxy: {
                '/api': {
                    target: env.VITE_DEV_PROXY_URI,
                    changeOrigin: true,
                },
            },
        },
    }
})
