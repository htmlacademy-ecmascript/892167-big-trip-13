const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    watchContentBase: true,
    hot: true,
  },
  plugins: [
    // TODO cleanWebpackPlugin
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'public/index.html'
    }),
  ]
};
