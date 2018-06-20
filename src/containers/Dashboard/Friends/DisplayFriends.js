import React, { Component } from 'react';
import FriendsList from './FriendsList';
import NavBar from '../NavBar/NavBar';
import { Grid, Row, Col } from 'react-bootstrap'




class DisplayFriends extends Component {
  unique = 1

  constructor(props) {
    super(props)
    // Set state of the array that I'll be rendering
    this.state = {
      listOfFriends: []
    }
  }

  // Call each of the functions that will get friends of the current user
  componentDidMount() {
    this.loadFriends()
  }

  loadFriends = function () {
    const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    let friendsList = []
    // Fetch the instances of accepters that match the current user
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${loggedInUser.id}`)
      .then(response => response.json())
      .then(requesters => {
        const queryParams = ""
        // Loop over the 2 objects and get the ID of the requester
        requesters.forEach(requester => {
          // Fetch the user objects for ID's the match the connections above
          this.queryParams = requesters.map(r => `id=${r.RequesterId}`).join("&")
        })// closes requesters foreach
        return fetch(`http://localhost:5001/users?${this.queryParams}`)
      })// closes requesters json
      .then(response => response.json())
      .then(requesterUsers => {
        friendsList = friendsList.concat(requesterUsers)
        return fetch(`http://localhost:5001/friendsRelationships?RequesterId=${loggedInUser.id}`)
      })// closes requesters foreach
      .then(response => response.json())
      .then(accepters => {
        // Loop over the 1 object to get the ID's of the accepters
        accepters.forEach(accepter => {
          // Fetch the user objects for the users whose ID's match the connectionAcc
          return fetch(`http://localhost:5001/users?id=${accepter.AccepterId}`)
            .then(response => response.json())
            .then(accepterUsers => {
              friendsList = friendsList.concat(accepterUsers)
              console.log("friendslist afteraccepterUsers", friendsList)
              console.log("friendslist3", friendsList)
              this.setState({ listOfFriends: friendsList })
              console.log("LOF4", this.state.listOfFriends)
            })// closes accepterUsers json
        })// closes accepterUsers foreach

        //QUESTION: friendsList has 3 items in it, but when I setState, there are only 2 items showing (outside the scope of the foreach it has only 2 items in friendsList - scope issue? )

      })//closes FriendShips foreach
  }.bind(this)

  render() {
    return (
      <div className="Friends">
        <NavBar />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h3 className="Friends-title">My Friends</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} >
              <FriendsList allTheFriends={this.state.listOfFriends} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DisplayFriends;