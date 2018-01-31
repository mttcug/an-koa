var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helper');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.[chunkhash:8].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      "/api": {
        target: "http://localhost:4300",
        secure: false
      }
    }
  }
});
