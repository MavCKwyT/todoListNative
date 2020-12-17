const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./public/src"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
    publicPath: "/"
  },
  devServer: {
    watchContentBase: true,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new MiniCssExtractPlugin({
      template: "./public/src/index.css",
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  }
};
