const BuildVersionWebpackPlugin = require("./build-version.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildVersion = Date.now();
console.log("当前编译版本: >>", buildVersion);
module.exports = {
  productionSourceMap: true,
  configureWebpack: (config) => {
    config.plugins.forEach((plugin) => {
      if (plugin instanceof HtmlWebpackPlugin) {
        plugin.options.version = buildVersion;
      }
    });
    config.plugins.push(
      new BuildVersionWebpackPlugin({
        output: "./dist",
        version: buildVersion,
      })
    );
  },
};
