const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const {dependencies} = require("../package.json");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_shell',
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        },
      },
    }),
  ]
})
