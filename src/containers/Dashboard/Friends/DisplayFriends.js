import React, { Component } from 'react';
import FriendsList from './FriendsList';
import DisplayUsers from './DisplayUsers'
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

  // Call the function that will get friends of the current user when the component loads
  componentDidMount() {
    this.loadFriends()
  }

  loadFriends = function () {
    const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    let friendsList = []
    let relationshipIDs = []
    // Fetch the instances of accepters that match the current user
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${loggedInUser.id}`)
    .then(response => response.json())
    .then(requesters => {
      // Loop over the objects and get the ID of the requester
      requesters.forEach(requester => {
        // Fetch the user objects for ID's the match the connections above
        const queryParams = ""
          this.queryParams = requesters.map(r => `id=${r.RequesterId}`).join("&")
          relationshipIDs.push(requester.id)
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
              this.setState({ listOfFriends: friendsList })
            })// closes accepterUsers json
        })// closes accepterUsers foreach
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
              <DisplayUsers/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DisplayFriends;