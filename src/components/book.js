import React, { PropTypes } from 'react'

const Book = ({ volumeInfo, parentComponent, clickedAddToWishlist }) => {
  return(
    <li>
      { volumeInfo.title }
      { volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail} /> : null }
      { parentComponent === 'home' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(volumeInfo)}>Add To WishList</button> : null}
    </li>
  )
}

export default Book