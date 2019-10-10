const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackAssetsInjectPlugin = require('../plugins/webpack/HtmlWebpackAssetsInjectPlugin');
const package = require('../package.json');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            title: package.description,
            template: './src/template.html',
            filename: './index.html',
            inject: 'body',
            minify: true
        }),
        new HtmlWebpackAssetsInjectPlugin(package.externals),
        new VueLoaderPlugin(),
        new UglifyJSPlugin({
            test: /\.js(\?.*)?$/i,
        })
    ]
});
