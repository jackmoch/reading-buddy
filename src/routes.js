import React, { Component } from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import App from './components/app'
import Register from './containers/container_register'
import Login from './containers/container_login'

class Test extends Component {
	render() {
		return (
			<h1>Testing</h1>
		)
	}
}

export default class Routes extends Component {
	render() {
		return (
			<Router history={browserHistory} >
				<Route path="/" component={App}>
					<IndexRoute component={Register} />
					<Route path="login" component={Login} />
					<Route path="test" component={Test} />
				</Route>
			</Router >
		)
	}
}