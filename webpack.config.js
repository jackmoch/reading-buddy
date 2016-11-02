module.exports = {
  // webpack options
  // webpackMiddleware takes a Compiler object as first parameter
  // which is returned by webpack(...) without callback.
  devtool: "inline-sourcemap",
  entry: "./src/index.js",
  output: {
    path: __dirname,
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
}