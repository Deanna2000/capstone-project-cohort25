import React, { Component } from 'react';
import LoginRegisterUser from './register_login/LoginRegisterUser.js'
import './Home.css';
import NavBar from '../Dashboard/NavBar/NavBar'
import logo from '../../components/IMAGES/Borrow-Logo.png'
import clothing from '../../components/IMAGES/Clothing.png'
import books from '../../components/IMAGES/books.png'
import lawnmower from '../../components/IMAGES/lawnmower.png'
import home from '../../components/IMAGES/home.png'
import borrowView from '../../components/IMAGES/itemsView.png'
import fbicon from '../../components/IMAGES/facebookicon.png'
import twicon from '../../components/IMAGES/twittericon.png'
import picon from '../../components/IMAGES/pinteresticon.png'
import linkicon from '../../components/IMAGES/linkedinicon.png'


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
        <div className="secondSectionText">
          <h3>Loan and borrow with friends and family, without wondering "who has that?" or "where did this come from?" </h3>
        </div>
        <div className="secondSection">
        </div>
        <div className="thirdSection">
          <img className="borrowView" alt="borrowscreenshot" src={borrowView} />
          <h3>Keep track of everything you have loaned or borrowed. You just set a due date and we will handle reminding both you and the borrower/loaner when it's time to get an item back.  </h3>
        </div>
        <div className="footer">
          <p>@2018 Borrow App  </p>
          <p>Follow us on social media</p>
          <img className="socialicon" alt="fbicon" src={fbicon} />
          <img className="socialicon" alt="twicon" src={twicon} />
          <img className="socialicon" alt="picon" src={picon} />
          <img className="socialicon" alt="liicon" src={linkicon} />

        </div>
      </div>
    );
  }
}

export default Home;