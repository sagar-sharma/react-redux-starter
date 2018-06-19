const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["webpack-hot-middleware/client?reload=true", "./src/index.js"],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            file: "[path][name].[ext]",
            publicPath: "./assets/",
            outputPath: "./assets/"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
