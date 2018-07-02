import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';


class Dashboard extends Component {
  render() {

    const userName = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    return (

          <NavBar />
    );
  }
}

export default Dashboard;