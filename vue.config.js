const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  outputDir: 'P:/nginx/web/beta',
  assetsDir: 'assets',
  productionSourceMap: false,
//  devServer: {
//    proxy: {
//      "/api": {
//        target: "http://localhost:5001",
//        changeOrigin: false,
//        pathRewrite: {
//          "/api": ""
//        }
//      }
//    }
//  }
});
