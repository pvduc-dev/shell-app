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
    // compress: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_shell',
      remotes: {
        map: 'map@https://gallant-hoover-3d46f7.netlify.app/js/remoteEntry.js',
      },
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
