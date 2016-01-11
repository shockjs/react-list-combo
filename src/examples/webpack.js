const webpack = require('webpack');

module.exports = {
  entry: [
    './dist/examples/index.js'
  ],
  output: {
    path: __dirname + '/../../dist/examples/',
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
