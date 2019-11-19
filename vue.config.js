module.exports = {
  transpileDependencies: ["vuex-persist"],
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "pt",
      localeDir: "assets/locales",
      enableInSFC: true
    }
  },
  devServer: {
    proxy: {
      "/bcr/*": {
        target: "https://bcr.bee-eng.pt",
        secure: false
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
