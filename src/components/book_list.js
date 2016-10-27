import React from 'react'

import Book from './book'

const BookList = ({ books, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist, clickedAddToCurrentlyReading, clickedRemoveFromCurrentlyReading }) => {
	if(books) {
		return(
		  <ul>
		    {books.map(book =>
		      <Book
		        key={books.indexOf(book)}
		        {...book}
		        parentComponent={parentComponent}
		        clickedRemoveFromWishlist={clickedRemoveFromWishlist}
		        clickedAddToWishlist={clickedAddToWishlist}
		        clickedAddToCurrentlyReading={clickedAddToCurrentlyReading}
		        clickedRemoveFromCurrentlyReading={clickedRemoveFromCurrentlyReading}/>
		    )}
		  </ul>
	  )
	} else {
		return null
	}
}

export default BookList