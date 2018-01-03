var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main.ts'
    },

    output: {
        filename: '[name].[chunkhash:8].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /(\.css | \.sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_module/'
            },
            {
                test: /\.js?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: 'serve/views/index.html'
    })]
};