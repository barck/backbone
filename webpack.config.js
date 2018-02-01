const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './data.json', to: 'data.json' },
      { from: './img', to: 'img' },
      { from: './style.css', to: 'style.css' },
      { from: './book.html', to: 'book.html' },
      { from: './favicon.ico', to: 'favicon.ico' }
    ]),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
    module: {
        rules: [ {
            test: /\.html$/,
            loader: 'mustache-loader'
            // loader: 'mustache-loader?minify'
            // loader: 'mustache-loader?{ minify: { removeComments: false } }'
            // loader: 'mustache-loader?noShortcut'
        } ]
    }

};
