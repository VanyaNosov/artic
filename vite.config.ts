import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { imageOptimizerPlugin } from './scripts/plugins/imageOptimizerPlugin'

export default defineConfig({
    plugins: [imageOptimizerPlugin(), react({}), svgr()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src/',
            },
        ],
    },
})
