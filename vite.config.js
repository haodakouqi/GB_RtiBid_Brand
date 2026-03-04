import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const alias = {
  '@': pathResolve("src")
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  server: {
    port: 8006,
    host: '0.0.0.0',
    open: true,
    proxy: { // 代理配置
      '/api': {
        // target: 'http://172.30.135.120:8081', // 马斌接口
        changeOrigin: true,
      }
    },
  },
  build: {
    outDir: "dsp",
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹(路径为存放所有svg图标的文件夹不单个svg图标)
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
  ],
})
