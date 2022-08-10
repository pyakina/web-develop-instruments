const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 1
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
entry: './src/main.js',
output: {
path: resolve(__dirname, 'build'),
filename: 'main.[contenthash].js'
},
plugins: [
new HtmlWebpackPlugin(),
new MiniCssExtractPlugin({ // 2
filename: '[name].[contenthash].css' // 3
}),
new BundleAnalyzerPlugin(),

],
module: {
rules: [
{ test: /\\.css$/,
use:
[MiniCssExtractPlugin.loader, 'css-loader']
},
{ test: /\\.s[ac]ss$/i,
use: [
MiniCssExtractPlugin.loader, // 4
'scss-loader',
'sass-loader'
]
}
],

    
}
        
    };
    