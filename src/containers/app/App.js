import '../../index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import React from 'react';
import Home from '../homePage/index'
import './App.css';
import Friends from '../Dashboard/Friends/DisplayFriendsAndUsers'
import MyCollection from '../Dashboard/Items/DisplayItems'
// import bootstrap from 'bootstrap'
// import $ from 'jquery'

//add some conditions to view to redirect to login if they are not logged in
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/mycollection" component={MyCollection}/>

        </div>
        </Router>
      </div>
    );
  }
}

export default App;
