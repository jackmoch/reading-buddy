import React from 'react'

import Book from './book'

const BookList = ({ books }) => {
	return(
	  <ul>
	    {books.map(book =>
	      <Book
	        key={book.id}
	        {...book}
	      />
	    )}
	  </ul>
  )
}

export default BookList