const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "docs")
  },
  plugins: [new HTMLWebpackPlugin({
    filename: 'index.html',
    template: './index.html'
  })],
  mode: 'production'
}