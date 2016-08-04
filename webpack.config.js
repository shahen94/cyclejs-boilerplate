const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8888;

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${HOST}:${PORT}/`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    noInfo: true,
    hot: true,
    inline: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './src/index.html' }
    ])
  ],
};
