import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: 
    {
      key: fs.readFileSync('../localhostcert/localhost-key.pem'),
      cert: fs.readFileSync('../localhostcert/localhost.pem'),
      
    }
    ,
  },
  plugins: [
    vue(),
    vueDevTools(),
      ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
