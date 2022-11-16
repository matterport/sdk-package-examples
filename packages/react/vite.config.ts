import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { setDefaultResultOrder } from 'dns'

// use 'localhost' instead of IP (needed by MP SDK)
setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
