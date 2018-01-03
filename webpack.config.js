var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        app:'./app/main.ts',
        serve: './serve/bin/www'
    },

    output: {
        filename: '[name].bundle.js',
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
            }
        ]
    }
};