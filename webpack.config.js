const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'client/src/index.js'),

  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },

  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    compress: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, 'client/dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    
    proxy: {
      '/test': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      // '/login': {
      //   target: 'http://localhost:3000/',
      //   secure: false,
      // },
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

};