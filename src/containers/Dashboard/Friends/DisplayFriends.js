import React, { Component } from 'react';
import FriendsList from './FriendsList'



class DisplayFriends extends Component {
  unique = 1

  constructor(props) {
    super(props)
    // Set state of the array that I'll be rendering
    this.state = { listOfFriends: [] }
  }

  // Call each of the functions that will get friends of the current user
  componentDidMount() {
    this.loadFriendsAccepted()
    this.loadFriendsRequested()
  }

  loadFriendsAccepted() {
    // Fetch the instances of accepters that match the current user
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(requesters => {
        // Loop over the 2 objects and get the ID of the requester
        requesters.forEach(element => {

          // Fetch the user objects for the users whose ID's match the connections above (2)
          return fetch(`http://localhost:5001/users?id=${element.RequesterId}`)
            .then(response => response.json())
            .then(information => {
              let friendsListUpdated = [`${information[0].fName} ${information[0].lName}`]
              friendsListUpdated = friendsListUpdated.concat(this.state.listOfFriends)
              this.setState({ listOfFriends: friendsListUpdated })
            })// closes FriendShips2 json object
        })// closes ConnectedFriends
      })//closes FriendShips foreach
  }

  loadFriendsRequested() {
    // Fetch the instances of requesters that match the current user
    fetch(`http://localhost:5001/friendsRelationships?RequesterId=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(accepters => {
        // Loop over the 1 object to get the ID's of the accepters
        accepters.forEach(element => {
          const accepterId = element.AccepterId

          // Fetch the user objects for the users whose ID's match the connectionAcc
          return fetch(`http://localhost:5001/users?id=${accepterId}`)
            .then(response => response.json())
            .then(information => {
              let friendsListUpdated = [`${information[0].fName} ${information[0].lName}`]
              friendsListUpdated = friendsListUpdated.concat(this.state.listOfFriends)
              this.setState({ listOfFriends: friendsListUpdated })
            })// closes information json
        })// closes connectedFriends2
      })// closes FriendShips2 foreach
  }

  render() {
    return (
      <div className="Friends">
        <header className="Friends-header">
        <FriendsList/>
        {/* <FriendsList allTheFriends={ this.state.listOfFriends }/> */}
          <h3 className="Friends-title"> List of Friends</h3>
          <ul className="Friends-List">
            {
              this.state.listOfFriends !== undefined ?
                this.state.listOfFriends.map(f => {
                  return <li key={this.unique++}>{f}</li>
                })
                :
                undefined
          }
          </ul>
        </header>
      </div>
    );
  }
}

export default DisplayFriends;