const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

// presets: [
//   ['@babel/preset-env',
//     {
//       targets: {
//         edge: "17",
//         firefox: "60",
//         chrome: "67",
//         safari: "11.1",
//       },
//       useBuiltIns: 'usage'
//     }
//   ]
// ]

const devConfig = {
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    usedExports: true
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(devConfig, commonConfig);
