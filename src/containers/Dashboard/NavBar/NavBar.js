import React, { Component } from 'react';
import { nav } from 'react-bootstrap';

class NavBar extends Component {

  render() {
    const userName = (JSON.parse(sessionStorage.getItem("ActiveUser")))
        return (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Borrow App</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li ><a href="/mycollection">My Collection </a></li>
        <li><a href="/friends">Friends</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
      <p className="welcome">Welcome {userName.fName}</p>


    </div>
  </div>
</nav>



        );
    }
}

export default NavBar;