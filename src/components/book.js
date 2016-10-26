import React, { PropTypes } from 'react'

const Book = (book) => {
  return(
    <li>
      {book.volumeInfo.title}
      { book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} /> : null }
      { book.parentComponent === 'home' ? <button className="btn btn-info btn-block">Add To WishList</button> : null}
    </li>
  )
}

export default Book