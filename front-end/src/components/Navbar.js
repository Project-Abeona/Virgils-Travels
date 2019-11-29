import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import headerLogo from '../static/images/VT_logo.png'
import '../static/css/Navbar.css'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </>
    )

    const userLink = (
      <>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </>
    )

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark " id="bg-darker">
      <div className="container">
      <a className="navbar-brand" href="/"><img alt="logo" src={headerLogo} height="70px"></img></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end " id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Features
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/flights">Flights</a>
                <a className="dropdown-item" href="/hotels">Hotels</a>
                <a className="dropdown-item" href="/events">Events</a>
                <a className="dropdown-item" href="/food">Food</a>
              </div>
            </li>
            {localStorage.usertoken ? userLink : loginRegLink}
          </ul>
        </div>
      </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
