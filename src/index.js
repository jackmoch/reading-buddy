import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger'
import ReduxPromise from 'redux-promise'

import reducers from './reducers'
import Routes from './routes'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Routes />
	</Provider >,
	document.getElementById('entry')
)