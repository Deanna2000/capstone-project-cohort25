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

  loadFriends = async function () {
    this.setState({ listOfFriends: [] })
    const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    let friendsList = []
    const relationshipsAcceptedResponse = await fetch(`http://localhost:5001/friendsRelationships?AccepterId=${loggedInUser.id}`)
    const relationshipsAccepted = await relationshipsAcceptedResponse.json()

    if (relationshipsAccepted.length > 0) {
      const queryParams = relationshipsAccepted.map(r => `id=${r.RequesterId}`).join("&")
      const relationshipIDs = relationshipsAccepted.map(r => r.id)
      const requestersResponse = await fetch(`http://localhost:5001/users?${queryParams}`)
      const requesters = await requestersResponse.json()

      const requestersFixed = requesters.map((requester, index) => {
        return Object.assign({}, requester, { relationshipId: relationshipIDs[index] })
      });
      friendsList = friendsList.concat(requestersFixed)
    }

    const relationshipsRequestedResponse = await fetch(`http://localhost:5001/friendsRelationships?RequesterId=${loggedInUser.id}`)
    const relationshipsRequested = await relationshipsRequestedResponse.json()
    if (relationshipsRequested.length > 0) {
      const queryParams = relationshipsRequested.map(r => `id=${r.AccepterId}`).join("&")
      const relationshipIDs = relationshipsRequested.map(r => r.id)
      const acceptersResponse = await fetch(`http://localhost:5001/users?${queryParams}`)
      const accepters = await acceptersResponse.json()
      console.log("accepters", accepters)
      const acceptersFixed = accepters.map((accepter, index) => {
        return Object.assign({}, accepter, { relationshipId: relationshipIDs[index] })
      });
      friendsList = friendsList.concat(acceptersFixed)
    }
    this.setState({listOfFriends: friendsList})
  }.bind(this)

  render() {
    return (
      <div className="Friends">
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