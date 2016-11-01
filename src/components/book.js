import React, { PropTypes } from 'react'

const Book = ({ volumeInfo, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist, id, clickedAddToCurrentlyReading, clickedRemoveFromCurrentlyReading, clickedAddToCompleted, clickedRemoveFromCompleted }) => {
  return(
    <li className="col-md-3 row bookDiv">
        <p className="text-center bookTitle">{volumeInfo.title}</p>
        { volumeInfo.imageLinks ? <img className="img-responsive bookThumb" src={volumeInfo.imageLinks.thumbnail} /> : null }
        <p className="text-center bookAuthor">{volumeInfo.authors[0]}</p>
        { parentComponent === 'wishlist' ? 
          <div>
            <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromWishlist(id)}>Remove From WishList</button>
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> 
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button>
          </div>  
          : null
        }
        { parentComponent === 'home' ? 
          <div>
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> 
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button>
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button>
          </div>
          : null
        }
        { parentComponent === 'currently_reading' ? 
          <div>
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> 
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button>
            <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromCurrentlyReading(id)}>Remove From Currently Reading</button>
          </div>  
          : null
        }
        { parentComponent === 'completed' ? 
          <div>
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> 
            <button className="btn btn-info btn-block" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button>
            <button className="btn btn-info btn-block" onClick={ () => clickedRemoveFromCompleted(id)}>Remove From Completed</button>
          </div>
          : null
        }
    </li>
  )
}

export default Book