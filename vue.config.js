const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  productionSourceMap: false,
  //outputDir: 'P:/nginx/web/beta',
  assetsDir: 'assets',
});
