import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'unplugin-vue-markdown/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import AutoProps from 'unplugin-vue-tsx-auto-props/vite'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    AutoProps(),
    Markdown({}),
    // should be placed after `Markdown()`
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      dts: 'types/components.d.ts'

      // allow auto import and register components used in markdown
      // customLoaderMatcher: (path) => path.endsWith('.md')
    }),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: 'types/auto-imports.d.ts'
    }),
    Unocss()
  ]
})
