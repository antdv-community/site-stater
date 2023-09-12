import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'unplugin-vue-markdown/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoProps from 'unplugin-vue-tsx-auto-props/vite'
import Unocss from 'unocss/vite'
import AntdvResolver from 'antdv-component-resolver'
const baseSrc = fileURLToPath(new URL('./src', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd())
  return {
    plugins: [
      VueRouter({
        extensions: ['.vue', '.md'],
        dts: './types/typed-router.d.ts'
      }),
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      vueJsx(),
      AutoProps(),
      Markdown({
        headEnabled: true
      }),
      // should be placed after `Markdown()`
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        dts: 'types/components.d.ts',
        resolvers: [AntdvResolver()]
        // allow auto import and register components used in markdown
        // customLoaderMatcher: (path) => path.endsWith('.md')
      }),
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'vue-i18n',
          '@vueuse/core',
          VueRouterAutoImports
        ],
        dts: 'types/auto-imports.d.ts',
        dirs: ['src/stores', 'src/composables']
      }),
      Unocss()
    ],
    resolve: {
      alias: [
        {
          find: 'dayjs',
          replacement: 'dayjs/esm'
        },
        {
          find: /^dayjs\/locale/,
          replacement: 'dayjs/esm/locale'
        },
        {
          find: /^dayjs\/plugin/,
          replacement: 'dayjs/esm/plugin'
        },
        {
          find: 'vue-i18n',
          replacement:
            mode === 'development'
              ? 'vue-i18n/dist/vue-i18n.esm-browser.js'
              : 'vue-i18n/dist/vue-i18n.esm-bundler.js'
        },
        {
          find: /^ant-design-vue\/es$/,
          replacement: 'ant-design-vue/es'
        },
        {
          find: /^ant-design-vue\/dist$/,
          replacement: 'ant-design-vue/dist'
        },
        {
          find: /^ant-design-vue\/lib$/,
          replacement: 'ant-design-vue/es'
        },
        {
          find: /^ant-design-vue$/,
          replacement: 'ant-design-vue/es'
        },
        {
          find: 'lodash',
          replacement: 'lodash-es'
        },
        {
          find: '~@',
          replacement: baseSrc
        },
        {
          find: '~',
          replacement: baseSrc
        },
        {
          find: '@',
          replacement: baseSrc
        }
      ]
    }
  }
})
