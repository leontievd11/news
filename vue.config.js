module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~@/scss/common.scss';`
      }
    }
  }
}
