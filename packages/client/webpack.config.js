const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  plugins: [
    // github.com/jantimon/html-webpack-plugin/issues/895
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3003
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", 
              "@babel/preset-react"
            ]
          }
        },
      }
    ]
  }  
}