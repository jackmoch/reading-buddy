const express = require('express')
const webpackMiddleware = require("webpack-dev-middleware")
const webpack = require('webpack')
const { json } = require('body-parser')
const { connect } = require('./db/database')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('client'))
app.use(json())
app.use(webpackMiddleware(webpack({
  // webpack options
  // webpackMiddleware takes a Compiler object as first parameter
  // which is returned by webpack(...) without callback.
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
}), {
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    publicPath: "/assets/",
}));

app.use(routes)

connect()
  .then(() => {
    app.listen(port, () =>
      console.log(`Listening on port: ${port}`)
    )
  })
  .catch(console.error)