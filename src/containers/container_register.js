import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from '../actions/index'

class Register extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: {
				first_name: '',
				last_name: '',
				username: '',
				password: ''
			}
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onFirstNameChange = this.onFirstNameChange.bind(this)
		this.onLastNameChange = this.onLastNameChange.bind(this)
		this.onUsernameChange = this.onUsernameChange.bind(this)
		this.onPasswordChange = this.onPasswordChange.bind(this)
	}

	onFirstNameChange(event) {
		this.setState({
			user: {
				...this.state.user,
				first_name: event.target.value
			}
		})
	}

	onLastNameChange(event) {
		this.setState({
			user: {
				...this.state.user,
				last_name: event.target.value
			}
		})
	}

	onUsernameChange(event) {
		this.setState({
			user: {
				...this.state.user,
				username: event.target.value
			}
		})
	}

	onPasswordChange(event) {
		this.setState({
			user: {
				...this.state.user,
				password: event.target.value
			}
		})
	}

	onFormSubmit(event) {
		event.preventDefault()
		this.props.registerUser(this.state.user)
		this.setState({ 
			user: {
				first_name: '',
				last_name: '',
				username: '',
				password: ''
			}
		})
	}

	render() {
		return(
			<div className="row centered-form">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Sign up for Reading Buddy</h3>
						</div>

						<div className="panel-body">
			    		<form 
			    			role="form" 
			    			onSubmit={this.onFormSubmit}>
			    			<div className="row">
			    				
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input 
			                	type="text" 
			                	name="first_name" 
			                	id="first_name" 
			                	className="form-control input-sm" 
			                	placeholder="First Name" 
			                	value={this.state.user.first_name}
			                	onChange={this.onFirstNameChange}/>
			    					</div>
			    				</div>
			    				
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input 
			    							type="text" 
			    							name="last_name" 
			    							id="last_name" 
			    							className="form-control input-sm" 
			    							placeholder="Last Name" 
			    							value={this.state.user.last_name}
			    							onChange={this.onLastNameChange}/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
			    				<input 
			    					type="email" 
			    					name="email" 
			    					id="email" 
			    					className="form-control input-sm" 
			    					placeholder="Email Address" 
			    					value={this.state.user.username}
			    					onChange={this.onUsernameChange}/>
			    			</div>

	    					<div className="form-group">
	    						<input 
	    							type="password" 
	    							name="password" 
	    							id="password" 
	    							className="form-control input-sm" 
	    							placeholder="Password"
	    							value={this.state.user.password} 
	    							onChange={this.onPasswordChange}/>
	    					</div>
			    			
			    			<input type="submit" value="Register" className="btn btn-info btn-block" />
			    		
			    		</form>
			    	</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ registerUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)