const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

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

module.exports = {
  mode: "development",
  optimization: {
    usedExports: true
  },
  entry: './index.js',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["@babel/preset-react"]
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./index.html"
  }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
