import React, { Component } from 'react'
import { Link } from 'react-router'

import SearchBar from '../components/search_bar'

export default class Home extends Component {

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
		console.log(searchTerm)
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