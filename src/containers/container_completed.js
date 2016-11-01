import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentlyReading, getCompleted, removeFromCompleted, addToWishlist, getWishlist } from '../actions/index'

import BookList from '../components/book_list'

class CurrentlyReading extends Component {

	componentWillMount() {
		this.props.getCompleted()
	}

	sumbitRemoveFromCompleted(id) {
		this.props.removeFromCompleted(id)
			.then(() => {
				this.props.getCompleted()
			})
	}

	submitToWishlist(book) {
		this.props.addToWishlist(book)
			.then(() => {
				this.props.getWishlist()
			})
	}

	render() {
		return(
			<div className="row centered-form bookListDiv">
				<div className="row list-group panel panel-default">
					{ this.props.Completed ? '' : <h2>...Loading Completed</h2> }
					<BookList 
						books={this.props.Completed} 
						parentComponent={'completed'}
						clickedAddToWishlist={ book => this.submitToWishlist(book)}
						clickedRemoveFromCompleted={ id => this.sumbitRemoveFromCompleted(id)}
						/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { Completed: state.Completed }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getCurrentlyReading, getCompleted, removeFromCompleted, addToWishlist, getWishlist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyReading)