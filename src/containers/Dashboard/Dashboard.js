import React, { Component } from 'react';
// import DisplayFriends from './Friends/DisplayFriends'
import DisplayItems from './Items/DisplayItems'

class Dashboard extends Component {
  render() {
    const userName = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    return (
      <div className="Dash">
        <header className="Dash-header">
          <h1 className="Dash-title"> Dashboard for Logged In View</h1>
          <p className="welcome">Welcome {userName.fName}</p>
          {/* <DisplayFriends ActiveUser={userName}/> */}
          <DisplayItems ActiveUser={userName}/>
        </header>
      </div>
    );
  }
}

export default Dashboard;