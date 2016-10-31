import React, { PropTypes } from 'react'

const Book = ({ volumeInfo, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist, id, clickedAddToCurrentlyReading, clickedRemoveFromCurrentlyReading, clickedAddToCompleted, clickedRemoveFromCompleted }) => {
  return(
    <li>
      { volumeInfo.imageLinks ? <img src={volumeInfo.imageLinks.thumbnail} /> : null }
      { volumeInfo.title }
      { parentComponent === 'wishlist' ? <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromWishlist(id)}>Remove From WishList</button> : null}
      { parentComponent === 'wishlist' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> : null}
      { parentComponent === 'wishlist' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button> : null}
      { parentComponent === 'home' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> : null}
      { parentComponent === 'home'  ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> : null}
      { parentComponent === 'home'  ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button> : null}
      { parentComponent === 'currently_reading' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> : null}
      { parentComponent === 'currently_reading' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button> : null}
      { parentComponent === 'currently_reading' ? <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromCurrentlyReading(id)}>Remove From Currently Reading</button> : null}
      { parentComponent === 'completed' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> : null}
      { parentComponent === 'completed' ? <button className="btn btn-info btn-block" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> : null}
      { parentComponent === 'completed' ? <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromCompleted(id)}>Remove From Completed</button> : null}
    </li>
  )
}

export default Book