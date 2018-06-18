import React, { Component } from 'react';
import FriendsList from './FriendsList'



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

  loadFriends = function() {
    let friendsList = []
    // Fetch the instances of accepters that match the current user
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${this.props.ActiveUser.id}`)
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
        friendsList=friendsList.concat(requesterUsers)
        return fetch(`http://localhost:5001/friendsRelationships?RequesterId=${this.props.ActiveUser.id}`)
      })// closes requesters foreach
      .then(response => response.json())
      .then(accepters => {
        // Loop over the 1 object to get the ID's of the accepters
        accepters.forEach(accepter => {
          // Fetch the user objects for the users whose ID's match the connectionAcc
          return fetch(`http://localhost:5001/users?id=${accepter.AccepterId}`)
            .then(response => response.json())
            .then(accepterUsers => {
              friendsList=friendsList.concat(accepterUsers)
              console.log("friendslist afteraccepterUsers", friendsList)
            })// closes accepterUsers json
          })// closes accepterUsers foreach

          //QUESTION: friendsList has 3 items in it, but when I setState, there are only 2 items showing (outside the scope of the foreach it has only 2 items in friendsList - scope issue? )

          console.log("friendslist3", friendsList)
          console.log("LOF4", this.state.listOfFriends)
          this.setState({ listOfFriends: friendsList })
        })
        //closes FriendShips foreach
      }.bind(this)

  render() {
    return (
      <div className="Friends">
        <header className="Friends-header">
        <FriendsList allTheFriends={ this.state.listOfFriends }/>
          <h3 className="Friends-title"> List of Friends</h3>
          <ul className="Friends-List">
            {
              this.listOfFriends !== undefined ?
                this.state.listOfFriends.map(f => {
                   <li key={f.id}>{f}</li>
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