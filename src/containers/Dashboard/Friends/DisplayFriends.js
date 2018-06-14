import React, { Component } from 'react';





class DisplayFriends extends Component {
  unique = 1


  constructor(props) {
    super(props)
    // Set state of the array that I'll be rendering
    this.state = { friendsList: [] }
  }

  componentDidMount() {
    this.loadFriendsAccepted()
    this.loadFriendsRequested()
  }

  loadFriendsAccepted() {
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(requesters => {
        // console.log("friendShips", friendShips) //should be 2 objects
        // Loop over the 2 objects and get the ID of the requester
        requesters.forEach(element => {
          // console.log("connectionreq",connection) // should be 2 ID's
          // Fetch the users whose ID's match the connections above (2)

          return fetch(`http://localhost:5001/users?id=${element.RequesterId}`)
            .then(response => response.json())
            .then(information => {
              let friendsListUpdated = [information[0].fName + " " + information[0].lName]
              friendsListUpdated = friendsListUpdated.concat(this.state.friendsList)
              this.setState({ friendsList: friendsListUpdated })
              // add those users to an array called allfriends
              // console.log("connected friends for requesters", connectedFriends) //should return 2 user objects
              // console.log("all friends first time", allFriends) // should contain 2 user objects



              // Fetch the instances of requesters that match the current user
              console.log(this.props.ActiveUser)

              // allFriends.forEach(element => {
              // console.log("allfriends elements", element)
              // console.log("fullname", fullName)
              //push friends into something temporary and pull all to friendList at the end
              // console.log("flt", friendsListTemp)
            })// closes FriendShips2 json object
        })// closes ConnectedFriends
      })//closes FriendShips foreach
  }

  loadFriendsRequested() {
    fetch(`http://localhost:5001/friendsRelationships?RequesterId=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(accepters => {
        // Loop over the 1 object to get the ID's of the accepters
        accepters.forEach(element => {
          const accepterId = element.AccepterId
          // console.log("connectionacc", connectionAcc) // shows ID's of accepters (1)

          // Fetch the user objects for the users whose ID's match the connectionAcc
          return fetch(`http://localhost:5001/users?id=${accepterId}`)
            .then(response => response.json())
            .then(information => {
              let friendsListUpdated = [information[0].fName + " " + information[0].lName]
              friendsListUpdated = friendsListUpdated.concat(this.state.friendsList)
              this.setState({ friendsList: friendsListUpdated })
              // Add those users to an array called allFriends
              // allFriends.push(connectedFriends2)
              // console.log("allfriends second time",allFriends)
              // console.log("connected friends for accepters", connectedFriends2)
              // ConnectedFriends contains the list of friends that have
              // requested the logged in user
            })
        })// closes connectedFriends2
      })// closes FriendShips2 foreach
  }

  render() {
    return (
      <div className="Friends">
        <header className="Friends-header">
          <h3 className="Friends-title"> Friends List</h3>
          <ul className="Friends-List">
            {
              this.state.friendsList !== undefined ?
                this.state.friendsList.map(f => {
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