import React, { Component } from 'react';
import LoginRegisterUser from './register_login/LoginRegisterUser.js'
import './Home.css';
import NavBar from '../Dashboard/NavBar/NavBar'
import logo from '../../components/IMAGES/Borrow-Logo.png'
import clothing from '../../components/IMAGES/Clothing.png'
import books from '../../components/IMAGES/books.png'
import lawnmower from '../../components/IMAGES/lawnmower.png'
import home from '../../components/IMAGES/home.png'



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="homeLogo">
          <img className="mainLogo" alt="logo" src={logo} />
        </div>
        <div className="mainSection">
          <div className="promo">
            <h1>It's About Sharing Stuff</h1>
            <div className="promoImages">
              <img className="promoImage" alt="promo" src={clothing} />
              <img className="promoImage" alt="promo" src={books} />
              <img className="promoImage" alt="promo" src={lawnmower} />
              <span className="backAndForth">&#x021C4;</span>
              <img className="promoImage" alt="promo" src={home} />
              <h1>And Getting It Back</h1>

            </div>
          </div>
          <LoginRegisterUser />
        </div>
      </div>
    );
  }
}

export default Home;