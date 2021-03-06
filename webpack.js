const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: 'react-list-combo.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
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
