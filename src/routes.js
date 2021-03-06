import React, { Component } from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import App from './components/app'
import Register from './containers/container_register'
import Login from './containers/container_login'
import Home from './containers/container_home'
import Wishlist from './containers/container_wishlist'
import CurrentlyReading from './containers/container_currently_reading'
import Completed from './containers/container_completed'

export default class Routes extends Component {
	render() {
		return (
			<Router history={browserHistory} >
				<Route path="/" component={App}>
					<IndexRoute component={Login} />
					<Route path="register" component={Register} />
					<Route path="home" component={Home} />
					<Route path="wishlist" component={Wishlist} />
					<Route path="currentlyReading" component={CurrentlyReading} />
					<Route path="completed" component={Completed} />
				</Route>
			</Router >
		)
	}
}