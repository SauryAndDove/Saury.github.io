import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入 Node.js 的 path 模块，用于解析绝对路径（Node.js 内置，无需额外安装）
import path from 'path'

export default defineConfig({
  // 个人主页的 base 必须设为 '/'
  base: '/', 
  plugins: [vue()],
  resolve: {
    alias: {
      // 修正：用 path.resolve 解析项目根目录下的 src 文件夹，避免打包后路径错误
      '@': path.resolve(__dirname, 'src') 
      // 原配置 '@': '/src' 是浏览器端的绝对路径，打包后会指向域名根目录的 src（不存在），必须改
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
      }
    }
  }
})
