const withCSS                = require('@zeit/next-css')  // to add .css file in TS project
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = withCSS({
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    return config
  },
  cssModules: true,
})
