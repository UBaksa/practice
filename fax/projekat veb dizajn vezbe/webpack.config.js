var path = require("path");
module.exports = {
  mode: "development",
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: {
      path: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
  },
};
