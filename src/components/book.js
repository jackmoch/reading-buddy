import React, { PropTypes } from 'react'

const Book = ({ volumeInfo, parentComponent, clickedAddToWishlist, clickedRemoveFromWishlist, id, clickedAddToCurrentlyReading, clickedRemoveFromCurrentlyReading, clickedAddToCompleted, clickedRemoveFromCompleted }) => {
  return(
    <div className="item col-xs-4 col-lg-4">
      <li>
        <div className="thumbnail">
          { volumeInfo.imageLinks ? <img className="group list-group-image" src={volumeInfo.imageLinks.thumbnail} /> : null }
            <div className="caption">
              <h4 className="group inner list-group-item-heading bookAuthor">{volumeInfo.title}</h4>
              <p className="group inner list-group-item-text bookTitle">{volumeInfo.authors[0]}</p>
                <div className="row">              
                  <div className="col-xs-12 col-md-6">
                    { parentComponent === 'wishlist' ? 
                      <div>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedRemoveFromWishlist(id)}>Remove From WishList</button>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> 
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button>
                      </div>  
                      : null
                    }
                    { parentComponent === 'home' ? 
                      <div>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button> 
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button>
                      </div>
                      : null
                    }
                    { parentComponent === 'currently_reading' ? 
                      <div>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> 
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToCompleted(id)}>Add To Completed</button>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedRemoveFromCurrentlyReading(id)}>Remove From Currently Reading</button>
                      </div>  
                      : null
                    }
                    { parentComponent === 'completed' ? 
                      <div>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToWishlist(id)}>Add To WishList</button> 
                        <button className="btn btn-success bookBtn" onClick={ () => clickedAddToCurrentlyReading(id)}>Add To Currently Reading</button>
                        <button className="btn btn-success bookBtn" onClick={ () => clickedRemoveFromCompleted(id)}>Remove From Completed</button>
                      </div>
                      : null
                    }
                  </div>
                </div>
            </div>
        </div>
      </li>
    </div>
  )
}

export default Book