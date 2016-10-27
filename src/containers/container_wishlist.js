import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getWishlist, removeFromWishlist, addToCurrentlyReading, getCurrentlyReading } from '../actions/index'

import BookList from '../components/book_list'

class Wishlist extends Component {

	componentWillMount() {
		this.props.getWishlist()
	}

	sumbitRemoveFromWishlist(id) {
		this.props.removeFromWishlist(id)
			.then(() => {
				this.props.getWishlist()
			})
	}

	submitToCurrentlyReading(book) {
		this.props.addToCurrentlyReading(book)
			.then(() => {
				this.props.getCurrentlyReading()
			})
	}

	render() {
		return(
			<div className="row centered-form">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="panel panel-default">
						{ this.props.Wishlist ? '' : <h2>...Loading Wishlist</h2> }
						<BookList 
							books={this.props.Wishlist} 
							parentComponent={'wishlist'}
							clickedAddToCurrentlyReading={ book => this.submitToCurrentlyReading(book) }
							clickedRemoveFromWishlist={ id => this.sumbitRemoveFromWishlist(id)}/>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { Wishlist: state.Wishlist }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getWishlist, removeFromWishlist, addToCurrentlyReading, getCurrentlyReading }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)