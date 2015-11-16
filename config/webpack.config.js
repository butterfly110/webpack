var DEBUG             = true;
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        './app/main.js'
    ],
    resolve: {
        alias: {

        }
    },
    output: {
        path: __dirname + '/dist/',
        publicPath: DEBUG ? "/dist/" : '//aliyun.com',
        filename: 'bundle.js?v=[hash]'
    },
    plugins: [
        new ExtractTextPlugin('styles.css?v[contenthash]'),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            chunks:   '*',
            inject:   'body'
        }),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|jpe?g)$/,
            loader: 'url-loader?limit=10240&name=build/[name].[ext]'
        },
            {
                test: /\.jsx?$/,
                loader:  'babel-loader'
            }
        ]
    }
};