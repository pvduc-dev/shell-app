const { merge } = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const common = require('./webpack.common');
const { dependencies } = require('../package.json')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'app_shell',
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
          eager: true,
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
          eager: true,
        },
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/index.html',
              '**/favicon.ico'
            ],
          }
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[name].[contenthash:8].vendor.js',
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          filename: 'js/[name].[contenthash:8].chunk.js',
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
