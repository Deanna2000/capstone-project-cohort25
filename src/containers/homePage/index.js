import React, { Component } from 'react';
import LoginRegisterUser from './register_login/LoginRegisterUser.js'
import Dashboard from '../Dashboard/Dashboard'
import './Home.css';



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-title"> Borrow</h1>
        </header>
        <LoginRegisterUser/>
      </div>
    );
  }
}

export default Home;