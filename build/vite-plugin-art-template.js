import template from "art-template"

const VitePluginArtTemplate = (options) => {

  template.defaults.minimize = false

  return {
    name: 'vite-plugin-art-template',
    transformIndexHtml: {
      enforce: 'pre',
      transform(_, ctx) {
        const { filename } = ctx
        const data = options?.data?.(ctx) || {}
        return template(filename, data)
      },
    },
    handleHotUpdate({ server }) {
      server.ws.send({
        type: 'full-reload',
      })
      return []
    },
  }
}

export default VitePluginArtTemplate