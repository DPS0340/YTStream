var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    mode: 'development',
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    entry: './src/main.js',
    resolve: {
      extensions: ['.webpack.js', '.js']
    },
    output: {
      path: __dirname + '/dist',
      filename: 'app.js'
    }
  },
  {
    mode: 'development',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    entry: './app/src/index.js',
    resolve: {
      extensions: ['.webpack.js', '.js']
    },
    output: {
      path: __dirname + '/dist',
      filename: 'index.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'YTStream Player',
        minify: {
          collapseWhitespace: true
        },
        hash: true,
        template: './app/index.html'
      })
    ]
  }
]
