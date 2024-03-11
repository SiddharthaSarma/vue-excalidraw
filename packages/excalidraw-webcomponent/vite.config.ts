import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript()],
  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react',
        },
      },
    },
  },
})

