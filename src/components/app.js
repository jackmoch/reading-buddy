import React, { Component } from 'react'
import Nav from './nav'

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