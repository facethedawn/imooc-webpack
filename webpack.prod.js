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
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const prodConfig = {
  mode: "production",
  devtool: 'cheap-module-source-map',
  optimization: {
    usedExports: true
  },
  performance: {
    hints: false
  }
}


module.exports = merge(prodConfig, commonConfig);
