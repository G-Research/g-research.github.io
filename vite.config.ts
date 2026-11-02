import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'

// PATH_PREFIX is set by CI for forks, where the site is served from a sub-path
// rather than the domain root. Gatsby read this as `pathPrefix`.
const prefix = process.env.PATH_PREFIX?.replace(/\/+$/, '') ?? ''

export default defineConfig({
    base: prefix ? `${prefix}/` : '/',

    plugins: [react()],

    publicDir: 'static',

    
    server: {port: 9000},
    preview: {port: 9000},

    resolve: {
        alias: {
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        },
    },
})