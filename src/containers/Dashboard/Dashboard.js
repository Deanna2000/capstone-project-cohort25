import React, { Component } from 'react';
import DisplayFriends from './Friends/DisplayFriends'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dash">
        <header className="Dash-header">
          <h1 className="Dash-title"> Dashboard for Logged In View</h1>
          <DisplayFriends/>
        </header>
      </div>
    );
  }
}

export default Dashboard;