import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchBooks, addToWishlist, getWishlist, addToCurrentlyReading, getCurrentlyReading, addToCompleted, getCompleted } from '../actions/index'

import SearchBar from '../components/search_bar'
import BookList from '../components/book_list'

class Home extends Component {

	componentWillMount() {
		this.props.getWishlist()
		this.props.getCurrentlyReading()
		this.props.getCompleted()
	}

	constructor(props) {
		super(props);
		this.state = { term: '' }
	}

	bookSearch (term) {
		this.setState({
    	term: term
    })
	}

	submitSearch(searchTerm) {
		this.props.searchBooks(searchTerm)
	}

	formatSearch() {
		this.submitSearch(this.state.term.split(' ').join('+'))
	}

	submitToWishlist(book) {
		this.props.addToWishlist(book)
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

	submitToCompleted(book) {
		this.props.addToCompleted(book)
			.then(() => {
				this.props.getCompleted()
			})
	}

	render() {
		return(
			<div className="row centered-form">
				<div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
					<div className="panel panel-default">
						<SearchBar onSearchTermChange={this.bookSearch.bind(this)} />
						<input onClick={this.formatSearch.bind(this)} type="submit" value="Search" className="btn btn-info btn-block" />
						<BookList 
							books={this.props.searchedBooks} 
							parentComponent={'home'}
							clickedAddToWishlist={ book => this.submitToWishlist(book)}
							clickedAddToCurrentlyReading={ book => this.submitToCurrentlyReading(book) }
							clickedAddToCompleted={ book => this.submitToCompleted(book) }/>
					</div>
				</div>
			</div>	
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchBooks, addToWishlist, getWishlist, addToCurrentlyReading, getCurrentlyReading, addToCompleted, getCompleted }, dispatch)
}

function mapStateToProps(state) {
  return { searchedBooks: state.searchedBooks }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)