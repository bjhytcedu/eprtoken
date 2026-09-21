import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署地址：https://bjhytcedu.github.io/eprtoken/
export default defineConfig({
  plugins: [react()],
  base: '/eprtoken/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
