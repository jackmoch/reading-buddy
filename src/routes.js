import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Register from './containers/container_register'

class Test extends Component {
	render() {
		return (
			<h1>Testing</h1>
		)
	}
}

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Register} />
		<Route component={Test} path="/test" />
	</Route>
)