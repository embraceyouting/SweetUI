import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './packages',
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.json',
      cleanVueFileName: true,
    })
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `${format}/index.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css'
          }
          return '[name].[ext]'
        },
        chunkFileNames: 'es/[name].js',
        preserveModules: false
      },
      treeshake: true
    },
    cssCodeSplit: true,
    emptyOutDir: true
  }
})