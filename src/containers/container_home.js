import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchBooks, addToWishlist, getWishlist, addToCurrentlyReading, getCurrentlyReading, addToCompleted, getCompleted } from '../actions/index'

import SearchBar from '../components/search_bar'
import BookList from '../components/book_list'

class Home extends Component {

	componentWillMount() {
		this.submitSearch('The old man and the sea')
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
				<div className="col-md-10 col-md-offset-1 searchDiv">
        	<div id="custom-search-input">
            <div className="input-group col-md-12">
								<SearchBar onSearchTermChange={this.bookSearch.bind(this)} />
                <span className="input-group-btn">
										<button onClick={this.formatSearch.bind(this)} className="btn btn-info btn-lg" type="button">
                        <i className="glyphicon glyphicon-search"></i>
										</button>
                </span>
            </div>
        	</div>
				</div>
				<div className="centered-form">
					<div className="row list-group panel panel-default">
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