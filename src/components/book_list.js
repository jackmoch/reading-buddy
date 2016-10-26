import React from 'react'

import Book from './book'

const BookList = ({ books, parentComponent, clickedAddToWishlist }) => {
	if(books) {
		return(
		  <ul>
		    {books.map(book =>
		      <Book
		        key={books.indexOf(book)}
		        {...book}
		        parentComponent={parentComponent}
		        clickedAddToWishlist={clickedAddToWishlist}/>
		    )}
		  </ul>
	  )
	} else {
		return null
	}
}

export default BookList