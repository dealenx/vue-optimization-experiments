module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.output.chunkFilename(`js/[name].js`);
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: "css/[name].css",
            chunkFilename: "css/[name].css"
          }
        ]);
    }
  },
  configureWebpack: {
    output: {
      filename: "js/app.js"
    },
    optimization: {
      splitChunks: false
    }
  }
};
