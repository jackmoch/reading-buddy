import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUser } from '../actions/index'
import { browserHistory } from 'react-router'

class Register extends Component {

	constructor(props) {
		super(props)
		this.state = {
			existingUser: null,
			user: {
				first_name: '',
				last_name: '',
				username: '',
				password: ''
			}
		}
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onFieldChanged = this.onFieldChanged.bind(this)
	}

	onFieldChanged (event) {
    this.setState({
    	...this.state,
    	user: {
    		...this.state.user,
    		[event.target.name]: event.target.value
    	}
    })
  }

	onFormSubmit(event) {
		event.preventDefault()
		this.props.registerUser(this.state.user)
		.then(({payload}) => {
			if(payload.data.msg) {
				this.setState({
					...this.state,
					existingUser: payload.data.msg
				})
			} else {
				browserHistory.push('/test')
			}
		})
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
							{ this.state.existingUser ? <div>{this.state.existingUser}</div> : ''}
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
			                	onChange={this.onFieldChanged}/>
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
			    							onChange={this.onFieldChanged}/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
			    				<input 
			    					type="username" 
			    					name="username" 
			    					id="username" 
			    					className="form-control input-sm" 
			    					placeholder="Username" 
			    					value={this.state.user.username}
			    					onChange={this.onFieldChanged}/>
			    			</div>

	    					<div className="form-group">
	    						<input 
	    							type="password" 
	    							name="password" 
	    							id="password" 
	    							className="form-control input-sm" 
	    							placeholder="Password"
	    							value={this.state.user.password} 
	    							onChange={this.onFieldChanged}/>
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