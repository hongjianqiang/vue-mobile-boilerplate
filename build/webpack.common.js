const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const package = require('../package.json');

const utils = {
    externals() {
        const externals = package.externals;

        let ret = {};
        for (var k in externals) {
            ret[k] = externals[k].var;
        }

        return ret;
    }
};

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
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            use: [
                '@kazupon/vue-i18n-loader',
                'yaml-loader',
            ]
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
                        importLoaders: 1,
                    }
                },
                'postcss-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
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
        new CopyWebpackPlugin([{ 
            from: 'static', to: 'static' 
        }, {
            from: 'src/images/favicon.png', to: '.'
        }]),
    ],
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
        alias: {
            'vux': path.resolve(__dirname, '../src/components/vux'),
            '@': path.resolve(__dirname, '../src')
        }
    },
    externals: utils.externals(),  // 从输出的 bundle 中排除依赖的外部扩展
    output: {
        filename: 'bundle/[name].min.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};
