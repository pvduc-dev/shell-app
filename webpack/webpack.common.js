const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].[contenthash:8].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: "index.html",
      favicon: 'public/favicon.ico',
      minify: true,
    }),
    new HtmlWebPackPlugin({
      template: 'public/silent-check-sso.html',
      filename: "silent-check-sso.html",
      inject: false,
      minify: true,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
}
