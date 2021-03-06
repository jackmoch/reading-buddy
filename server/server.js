const path = require('path')
const express = require('express')
const webpackConfig = require('../webpack.config.js')
const webpack = require('webpack')
const { json } = require('body-parser')
const { connect } = require('./db/database')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
var history = require('connect-history-api-fallback');
const routes = require('./routes')

const app = express()
app.use(history())
const port = process.env.PORT || 3000



app.set('port', port)
app.use(express.static('client'))
app.use(json())

if(process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require("webpack-dev-middleware")
  app.use(webpackMiddleware(webpack(webpackConfig), {
      watchOptions: {
          aggregateTimeout: 300,
          poll: true
      },
      publicPath: "/assets/",
  }));
}

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