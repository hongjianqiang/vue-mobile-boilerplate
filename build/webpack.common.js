const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                hotReload: true  // 显式开启热重载(默认为true)
            }
        }, { 
            test: /\.js$/, 
            loader: 'babel-loader',
            exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
            )
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { 
                        // 开启 CSS Modules
                        modules: true,
                        // 自定义生成的类名
                        localIdentName: '[local]_[hash:base64:8]',
                        importLoaders: 1,
                    }
                },
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { modules: true },  // 开启 CSS Modules
                },
                'sass-loader'
            ]
        }, {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader', 
                {
                    loader: 'sass-loader',
                    options: {
                        indentedSyntax: true,
                        sassOptions: {
                            indentedSyntax: true
                        }
                    }
                }
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: 'static', to: 'static' }]),
    ],
    resolve: {
        alias: {
            '@': path.resolve('../src')
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('../dist'),
        publicPath: '/'
    }
};
