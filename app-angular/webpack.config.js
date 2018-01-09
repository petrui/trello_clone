const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: ['./coffee/main-app.coffee', '../vendor/css/main.scss'],

  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },

  module: {
    rules: [ {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
            // options: {
            //   transpile: {
            //     presets: ['env']
            //   }
            // }
          }
        ]
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
    contentBase: path.resolve(__dirname),
    historyApiFallback: true,
    hot: true,
    port: 3002,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
