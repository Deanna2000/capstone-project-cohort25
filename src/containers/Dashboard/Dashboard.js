import React, { Component } from 'react';
import DisplayFriends from './Friends/DisplayFriends'
import DisplayItems from './Items/DisplayItems'
import styles from './Dashboard.css'

class Dashboard extends Component {
  render() {
    const userName = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    return (
      <div className="Dash">
        <header className="Dash-header">
          <h1 className="Dash-title"> Borrow App</h1>
          <p className="welcome">Welcome {userName.fName}</p>
          <DisplayFriends ActiveUser={userName}/>
          <DisplayItems ActiveUser={userName}/>
        </header>
      </div>
    );
  }
}

export default Dashboard;