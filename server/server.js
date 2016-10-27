const express = require('express')
const webpackMiddleware = require("webpack-dev-middleware")
const webpack = require('webpack')
const { json } = require('body-parser')
const { connect } = require('./db/database')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const routes = require('./routes')

const debug = true

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('client'))
app.use(json())
app.use(webpackMiddleware(webpack({
  // webpack options
  // webpackMiddleware takes a Compiler object as first parameter
  // which is returned by webpack(...) without callback.
  devtool: debug ? "inline-sourcemap" : null,
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

app.use(session({
  'store': new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }),
  'secret': 'supersecretkey' //fine to put this on github
}))


app.use((req, res, next) => {
  app.locals.userId = req.session.userId
  next()
})

app.use(routes)

connect()
  .then(() => {
    app.listen(port, () =>
      console.log(`Listening on port: ${port}`)
    )
  })
  .catch(console.error)