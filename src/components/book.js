import React, { PropTypes } from 'react'

const Book = (book) => {
  return(
    <li>
      {book.volumeInfo.title}
    </li>
  )
}

export default Book