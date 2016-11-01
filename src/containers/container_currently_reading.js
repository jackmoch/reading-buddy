import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentlyReading, removeFromCurrentlyReading, addToWishlist, getWishlist, addToCompleted, getCompleted } from '../actions/index'

import BookList from '../components/book_list'

class CurrentlyReading extends Component {

	componentWillMount() {
		this.props.getWishlist()
		this.props.getCurrentlyReading()
		this.props.getCompleted()
	}

	sumbitRemoveFromCurrentlyReading(id) {
		this.props.removeFromCurrentlyReading(id)
			.then(() => {
				this.props.getCurrentlyReading()
			})
	}

	submitToWishlist(book) {
		this.props.addToWishlist(book)
			.then(() => {
				this.props.getWishlist()
			})
	}

	submitToCompleted(book) {
		this.props.addToCompleted(book)
			.then(() => {
				this.props.getCompleted()
			})
	}

	render() {
		return(
			<div className="row centered-form">
				<div className="row list-group panel panel-default">
					{ this.props.CurrentlyReading ? '' : <h2>...Loading Currently Reading</h2> }
					<BookList 
						books={this.props.CurrentlyReading} 
						parentComponent={'currently_reading'}
						clickedAddToWishlist={ book => this.submitToWishlist(book)}
						clickedAddToCompleted={ book => this.submitToCompleted(book) }
						clickedRemoveFromCurrentlyReading={ id => this.sumbitRemoveFromCurrentlyReading(id)}
						/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { CurrentlyReading: state.CurrentlyReading }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getCurrentlyReading, removeFromCurrentlyReading, addToWishlist, getWishlist, addToCompleted, getCompleted }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyReading)