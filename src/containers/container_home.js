import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchBooks } from '../actions/index'

import SearchBar from '../components/search_bar'

class Home extends Component {

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

	render() {
		return(
			<div>
				<SearchBar onSearchTermChange={this.bookSearch.bind(this)} />
				<input onClick={this.formatSearch.bind(this)} type="submit" value="Search" className="btn btn-info btn-block" />
				<Link to="home" className="btn btn-info btn-block">
					Home
				</Link>
			</div>	
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchBooks }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)