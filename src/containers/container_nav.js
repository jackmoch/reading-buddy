
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="navbar-brand navbar-brand-centered">Brand</div>
            </div>

            <div className="collapse navbar-collapse" id="navbar-brand-centered">

            { this.props.User ? <ul className="nav navbar-nav">
              <li><Link to={'home'}>Home</Link></li>
              <li><Link to={'wishlist'}>Wishlist</Link></li>
              <li><Link to={'currentlyReading'}>Currently Reading</Link></li>
              <li><Link to={'completed'}>Completed</Link></li>
            </ul> : null }

            { this.props.User ? <ul className="nav navbar-nav navbar-right">
              <li><Link to={'/'} className="navbar-right">Logout</Link></li>
            </ul> : null }
            

          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { User: state.User }
}

export default connect(mapStateToProps, null)(Nav)