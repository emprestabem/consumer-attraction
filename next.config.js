module.exports = {
  pageExtensions: ['jsx', 'js'],
  serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static'
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    return config
  }
}
