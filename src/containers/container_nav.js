
import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser, logout } from '../actions/index'

class Nav extends Component {

  componentWillMount() {
    this.props.getUser()
  }

  submitLogout() {
    this.props.logout()
      .then(() => {
          browserHistory.push('/')
        })
  }

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="navbar-brand navbar-brand-centered">Reading Buddy</div>
            </div>

            <div className="collapse navbar-collapse" id="navbar-brand-centered">

            { this.props.User ? <ul className="nav navbar-nav">
              <li><Link to={'home'}>Home</Link></li>
              <li><Link to={'wishlist'}>Wishlist</Link></li>
              <li><Link to={'currentlyReading'}>Currently Reading</Link></li>
              <li><Link to={'completed'}>Completed</Link></li>
            </ul> : null }

            { this.props.User ? <ul className="nav navbar-nav navbar-right">
              <li><a className="navbar-right logoutLink" onClick={this.submitLogout.bind(this)}>Logout</a></li>
            </ul> : null }
            

          </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { User: state.User }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUser, logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)