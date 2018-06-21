import React, { Component } from 'react';
import LoginRegisterUser from './register_login/LoginRegisterUser.js'
import './Home.css';
import NavBar from '../Dashboard/NavBar/NavBar'



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar/>
        <LoginRegisterUser/>
      </div>
    );
  }
}

export default Home;