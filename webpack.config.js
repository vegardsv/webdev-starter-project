const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpack = require('webpack')

var isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: _getPlugins(),

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react'] }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}

function _getPlugins() {
  var plugins = []
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV
      }
    })
  )
  plugins.push(
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'index_template.ejs'
    })
  )
  if (isProd) {
    plugins.push(new webpack.optimize.UglifyJsPlugin())
  }

  return plugins
}
