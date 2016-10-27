import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentlyReading, removeFromCurrentlyReading, addToWishlist, getWishlist } from '../actions/index'

import BookList from '../components/book_list'

class CurrentlyReading extends Component {

	componentWillMount() {
		this.props.getCurrentlyReading()
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

	render() {
		return(
			<div className="row centered-form">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="panel panel-default">
						{ this.props.CurrentlyReading ? '' : <h2>...Loading Currently Reading</h2> }
						<BookList 
							books={this.props.CurrentlyReading} 
							parentComponent={'currently_reading'}
							clickedAddToWishlist={ book => this.submitToWishlist(book)}
							clickedRemoveFromCurrentlyReading={ id => this.sumbitRemoveFromCurrentlyReading(id)}
							/>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { CurrentlyReading: state.CurrentlyReading }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getCurrentlyReading, removeFromCurrentlyReading, addToWishlist, getWishlist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentlyReading)