import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { setDefaultResultOrder } from 'dns'

// use 'localhost' instead of IP (needed by MP SDK)
setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()]
})
