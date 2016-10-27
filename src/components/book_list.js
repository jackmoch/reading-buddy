import React from 'react'

import Book from './book'

const BookList = ({ books, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist }) => {
	if(books) {
		return(
		  <ul>
		    {books.map(book =>
		      <Book
		        key={books.indexOf(book)}
		        {...book}
		        parentComponent={parentComponent}
		        clickedRemoveFromWishlist={clickedRemoveFromWishlist}
		        clickedAddToWishlist={clickedAddToWishlist}/>
		    )}
		  </ul>
	  )
	} else {
		return null
	}
}

export default BookList