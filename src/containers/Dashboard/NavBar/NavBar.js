import React, { Component } from 'react';
import { nav } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../../components/IMAGES/Borrow-Logo.png';
import UserProfile from './UserProfile'

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loggedInUser: {},
    }
  }

  logoutUser = (evt) => {
    sessionStorage.removeItem("ActiveUser")
  }

  openProfile = (evt) => {
    console.log("user profile")
    return (
            <div>
            <UserProfile myProfile={this.state.loggedInUser}/>
            </div>
    )
  }



  render() {
    const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    if (sessionStorage.length < 1) {
  }
    else {
      return (
        <nav className="navbar navbar-default">
      {/* <img className="logo vertical-align-÷welcome" alt="logo" src={logo} /> */}
          <div className="container-fluid navbarHeight">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <img className="logo" alt="logo" src={logo} />
              {/* <a className="navbar-brand" href="/">Borrow App</a> */}
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li ><a href="/mycollection">My Collection </a></li>
                <li><a href="/friends">Friends</a></li>
                <li><a href="/" onClick={(evt) => this.logoutUser(evt)}>Logout</a></li>
              </ul>
              <button className="text-muted navbar-right vertical-align-welcome" onClick={(evt) => this.openProfile(evt)}>Welcome {loggedInUser.fName} </button>

            </div>
          </div>
      </nav>
     );
      }}}

  export default NavBar;