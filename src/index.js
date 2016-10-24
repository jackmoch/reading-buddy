import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createLogger from 'redux-logger'

import reducers from './reducers'
import App from './components/app'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider >,
	document.getElementById('entry')
)