import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const libConfig = {
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, './src'),
      name: 'be-ui',
      fileName: (format) => `be-ui.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return 'be-ui.css'
          return assetInfo.name
        },
      },
    },
    sourcemap: true,
  },
}

const docsConfig = {
  root: './demo',
  base: process.env.NODE_ENV === 'production' ? '/beui/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./demo/src', import.meta.url)),
    },
  },
  server: {
    port: 5178,
  },
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const executionMode = process.env.MODE || 'lib'

  const mode = command === 'build' ? 'production' : 'development'

  if (executionMode === 'demo') {
    return { ...docsConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})
