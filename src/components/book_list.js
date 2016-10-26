import React from 'react'

import Book from './book'

const BookList = ({ books, parentComponent }) => {
	if(books) {
		return(
		  <ul>
		    {books.map(book =>
		      <Book
		        key={books.indexOf(book)}
		        {...book}
		        parentComponent={parentComponent}
		      />
		    )}
		  </ul>
	  )
	} else {
		return null
	}
}

export default BookList