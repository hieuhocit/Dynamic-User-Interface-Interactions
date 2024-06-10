const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: "/home.html" },
        { from: /^\/dropdown-menu.html/, to: "/dropdown-menu.html" },
        { from: /^\/image-carousel.html/, to: "/image-carousel.html" },
      ],
    },
  },
});
