import React, { PropTypes } from 'react'

const Book = ({ volumeInfo, parentComponent, clickedAddToWishlist, id }) => {
  return(
    <li>
      { volumeInfo.title }
      { volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail} /> : null }
      { parentComponent === 'home' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> : null}
    </li>
  )
}

export default Book