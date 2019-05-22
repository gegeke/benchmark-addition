module.exports = {
  css: {
    sourceMap: true
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/benchmark-addition/'
    : '/',
  outputDir: 'docs',
  productionSourceMap: false
}
