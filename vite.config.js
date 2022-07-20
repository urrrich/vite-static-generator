import { resolve } from 'path'
import template from "art-template"
import { defineConfig } from "vite"

template.defaults.minimize = false

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
    {
      name: "art-template",
      transformIndexHtml: {
        enforce: "pre",
        transform(html, { path, filename }) {
          html = template(filename, {})
          return html
        },
      },
    },
    {
      name: "watch-template",
      apply: "serve",
      handleHotUpdate({ server }) {
        server.ws.send({
          type: "full-reload",
        })
        return []
      },
    },
  ],
})
