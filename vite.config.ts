import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import typescript2 from 'rollup-plugin-typescript2'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vuetify(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
    libInjectCss(),
    Components({
      dirs: ['src/components'],
      dts: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/math',
        'vue-i18n',
      ],
      vueTemplate: true,
    }),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
    cssCodeSplit: true,
    lib: {
      // src/indext.ts is where we have exported the component(s)
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'PhDatePicker',
      formats: ['es', 'cjs', 'umd'],

      // the name of the output files when the build is run
      fileName: format => `ph-date-picker.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'vuetify',
        'vuetify/styles',
        'vue-i18n',
        'moment',
        'vue-flatpickr-component',
      ],
      input: {
        main: resolve(__dirname, 'src/components/index.ts'),
      },
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'index.css')
            return 'ph-date-picker.css'

          return assetInfo.name
        },
        exports: 'named',
        globals: {
          'vue': 'Vue',
          'vuetify': 'vuetify',
          'vue-i18n': 'vue-i18n',
          'vuetify/styles': 'vuetify/styles',
          'moment': 'moment',
          'vue-flatpickr-component': 'vue-flatpickr-component',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue'],
  },
})
