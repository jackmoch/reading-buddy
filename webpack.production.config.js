var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'client/dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'latest', 'stage-0']
      }
    }]
  },
};