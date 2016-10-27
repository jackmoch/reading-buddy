import React, { PropTypes } from 'react'

const Book = ({ volumeInfo, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist, id }) => {
  return(
    <li>
      { volumeInfo.title }
      { volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail} /> : null }
      { parentComponent === 'home' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> : null}
      { parentComponent === 'wishlist' ? <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromWishlist(id)}>Remove From WishList</button> : null}
    </li>
  )
}

export default Book