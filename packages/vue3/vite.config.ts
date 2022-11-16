import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setDefaultResultOrder } from 'dns'

// use 'localhost' instead of IP (needed by MP SDK)
setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
