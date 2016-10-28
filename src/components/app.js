import React, { Component } from 'react'
import Nav from '../containers/container_nav'

export default class App extends Component {
	render() {

	 const childComponents = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        ...this.props
      }))

		return (
			<div>
				<Nav />
				{childComponents}
			</div>
		)
	}
}