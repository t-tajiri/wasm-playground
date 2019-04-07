const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

const ENV = process.env.NODE_ENV || 'development'

module.exports = {
  mode: ENV,
  entry: __dirname + '/js',
  resolve: {
    extensions: ['.js', '.wasm']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'js/index.html')
    }),
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, 'rust')
    })
  ]
}