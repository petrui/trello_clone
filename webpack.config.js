const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app-js'),
  entry: ['./js/main-app.js', './css/main.scss'],

  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'app-js', 'dist'),
    publicPath: '/dist',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },

    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
        fallback: 'style-loader',
      }),
    },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  externals: {
    Config: JSON.stringify({ apiUrl: 'http://localhost:3000/api/v1' }),
  },

  devServer: {
    clientLogLevel: 'none',
    compress: true,
    contentBase: path.resolve(__dirname, 'app-js'),
    historyApiFallback: true,
    hot: true,
    port: 3001,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
