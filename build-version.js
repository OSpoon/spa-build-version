const pluginName = "BuildVersionWebpackPlugin";
const fs = require("fs");
const path = require("path");

/**
 * 编译后生成版本文件
 */
class BuildVersionWebpackPlugin {
  constructor({ output = "./", version = Date.now() }) {
    this.output = output;
    this.version = version;
  }
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, () => {
      console.log("webpack 编译完成,正在生成版本文件！");
      const outputPath = path.resolve(this.output, "./version.json");
      const versionJson = JSON.stringify({
        version: this.version,
      });
      fs.writeFileSync(outputPath, versionJson, {
        encoding: "utf-8",
      });
    });
  }
}

module.exports = BuildVersionWebpackPlugin;
