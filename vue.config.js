module.exports = {
  devServer: {
    proxy: {
      "^/": {
        target: "https://app.exinearn.com/api/v1",
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "theme.custom.scss";`
      }
    }
  }
};
