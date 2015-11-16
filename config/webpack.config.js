var DEBUG = true;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        './app/main.js'
    ],
    output: {
        path: __dirname + '/dist/',
        publicPath: DEBUG ? "/dist/" : '//aliyun.com',
        filename: 'bundle.js?v=[chunkhash]'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            chunks:   '*',
            inject:   'body'
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader:  'style-loader!css-loader'
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