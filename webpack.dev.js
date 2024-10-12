const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: [
      "./src/template.html",
      "./src/styles.css",
      "./src/header/header.css",
      "./src/home/home.css",
      "./src/about/about.css",
      "./src/menu/menu.css",
    ],
    static: "./dist",
  },
});
