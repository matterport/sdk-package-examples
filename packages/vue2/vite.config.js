import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { setDefaultResultOrder } from 'dns'

// use 'localhost' instead of IP (needed by MP SDK)
setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()]
});
