import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import React, { Component } from 'react';
import Home from '../homePage/index'
import './App.css';
import Dashboard from '../Dashboard/Dashboard';

//add some conditions to view to redirect to login if they are not logged in
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>

        </div>
        </Router>
      </div>
    );
  }
}

export default App;
