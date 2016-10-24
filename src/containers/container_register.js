import React, { Component } from 'react'

export default class Register extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: {
				firstName: '',
				lastName: '',
				username: '',
				password: ''
			}
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	onFormSubmit(event) {
		event.preventDefault()
		console.log(this.state.user)
	}

	render() {
		return(
			<form
				onSubmit={this.onFormSubmit}>
				<input />
				<input />
				<input />
				<input />
				<span>
					<button>Submit</button>
				</span>
			</form>
		)
	}

}