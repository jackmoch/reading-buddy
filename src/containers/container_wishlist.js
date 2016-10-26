import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getWishlist } from '../actions/index'

import BookList from '../components/book_list'

class Wishlist extends Component {

	componentWillMount() {
		this.props.getWishlist()
	}

	render() {
		return(
			<div className="row centered-form">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="panel panel-default">
						{ this.props.Wishlist ? '' : <h2>...Loading Wishlist</h2> }
						<BookList 
							books={this.props.Wishlist} 
							parentComponent={'wishlist'}/>
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
	return bindActionCreators({ getWishlist }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)