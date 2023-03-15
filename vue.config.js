const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  outputDir:'P:/nginx/web/beta',
  assetsDir:'assets',
  productionSourceMap:false
});
