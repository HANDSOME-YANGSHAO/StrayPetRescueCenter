import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// vite是依赖rollup的打包功能，rollup具有tree-shaking的功能，会自动把没有引入的组件给裁剪掉，直接全局引入组件库直接用也可以这是一种办法；
// 下面是按照官方做法实现按需自动引入，用到什么引入什么，但是打包效率会更高，思路也更加的清晰，开发阶段需多下载两个插件和进行一些配置
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src'),
      comps: resolve(__dirname, './src/components'),
      store: resolve(__dirname, './src/store')
    },
    extensions: ['.js', '.json', '.ts']
  },
  plugins: [
    vue(),
    // 组件库实现自动按需引入
    AutoImport({
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })]
    }),
    Components({
      resolvers: [TDesignResolver({
        library: 'vue-next'
      })]
    })
  ],
  // 配置代理
  server: {
    open: true
  }
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import"@/styles/var.scss";'
  //     }
  //   }
  // }
})
