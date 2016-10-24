import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Register from './containers/container_register'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Register} />
	</Route>
)