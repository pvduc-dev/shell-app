const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { dependencies } = require('../package.json')

module.exports = merge(common, {
  mode: 'production',
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'react-router-dom': 'ReactRouterDOM'
  // },
  plugins: [
    new ModuleFederationPlugin({
      runtime: 'my-runtime',
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
