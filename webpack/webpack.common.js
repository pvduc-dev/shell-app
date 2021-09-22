const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].[chunkhash].bundle.js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
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
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[name].[chunkhash].vendor.js',
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          filename: 'js/[name].[chunkhash].chunk.js',
          chunks: "all",
          reuseExistingChunk: true
        },
      }
    },
  },
}
