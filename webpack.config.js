const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src"),
  output: {
    path: path.resolve(__dirname, "/bundle"),
    filename: "bundle.js"
  },
  devServer: {
    watchContentBase: true,
    open: true
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new MiniCssExtractPlugin({
      template: "./src/index.css",
      filename: "bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
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
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader"
      }
    ]
  }
};
