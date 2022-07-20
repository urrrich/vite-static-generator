import { resolve } from 'path'
import { defineConfig } from "vite"
import VitePluginArtTemplate from './build/vite-plugin-art-template'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      }
    }
  },
  plugins: [
    VitePluginArtTemplate({
      data(ctx) {
        return {
          foo: 'var foo = 123',
          me: `<div style="color:red">my name is xx</div>`
        }
      }
    })
  ],
})
