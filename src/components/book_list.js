import React from 'react'

import Book from './book'

const BookList = ({ books, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist, clickedAddToCurrentlyReading, clickedRemoveFromCurrentlyReading, clickedAddToCompleted, clickedRemoveFromCompleted }) => {
	if(books) {
		return(
		  <ul>
		    {books.map(book =>
		      <Book
		        key={books.indexOf(book)}
		        {...book}
		        parentComponent={parentComponent}
		        clickedRemoveFromWishlist={clickedRemoveFromWishlist}
		        clickedRemoveFromCompleted={clickedRemoveFromCompleted}
		        clickedAddToWishlist={clickedAddToWishlist}
		        clickedAddToCurrentlyReading={clickedAddToCurrentlyReading}
		        clickedAddToCompleted={clickedAddToCompleted}
		        clickedRemoveFromCurrentlyReading={clickedRemoveFromCurrentlyReading}/>
		    )}
		  </ul>
	  )
	} else {
		return null
	}
}

export default BookList