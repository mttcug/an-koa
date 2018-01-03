var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app/main.ts'
    },

    output: {
        filename: '[name].[chunkhash:8].bundle.js',
        path: path.resolve(__dirname, 'static/')
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'serve/views/index.html',
            inject: true,    //允许插件修改哪些内容，包括head与body
            hash: true,    //为静态资源生成hash值
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),

        new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
    ]
};