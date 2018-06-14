import React, { Component } from 'react';





class DisplayFriends extends Component {
  // Set state of the array that I'll be rendering
  state = { friendsList: [] }

  //
  unique = 1

  componentDidMount() {
    const friendsListTemp = []
    const allFriends = []
    // Fetch all instances of the Accepter ID matching the logged in user
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(friendShips => {
        console.log("friendShips", friendShips) //should be 2 objects
        // Loop over the 2 objects and get the ID of the requester
        friendShips.forEach(element => {
          const connection = element.RequesterId
          console.log("connectionreq",connection) // should be 2 ID's
          // Fetch the users whose ID's match the connections above (2)

          return fetch(`http://localhost:5001/users?id=${connection}`)
          .then(response => response.json())
          .then(connectedFriends => {
            // add those users to an array called allfriends
            allFriends.push(connectedFriends)
            console.log("connected friends for requesters", connectedFriends) //should return 2 user objects
            console.log("all friends first time", allFriends) // should contain 2 user objects



            // Fetch the instances of requesters that match the current user
            fetch(`http://localhost:5001/friendsRelationships?RequesterId=${this.props.ActiveUser.id}`)
            .then(response => response.json())
            .then(friendShips2 => {
              // Loop over the 1 object to get the ID's of the accepters
              friendShips2.forEach(element => {
                const connectionAcc = element.AccepterId
                console.log("connectionacc", connectionAcc) // shows ID's of accepters (1)

                // Fetch the user objects for the users whose ID's match the connectionAcc
                return fetch(`http://localhost:5001/users?id=${connectionAcc}`)
                .then(response => response.json())
                .then(connectedFriends2 => {
                  // Add those users to an array called allFriends
                  allFriends.push(connectedFriends2)
                  console.log("allfriends second time",allFriends)
                  console.log("connected friends for accepters", connectedFriends2)
                  // ConnectedFriends contains the list of friends that have
                  // requested the logged in user
                })
              })// closes connectedFriends2
            })// closes FriendShips2 foreach
            allFriends.forEach(element => {
              console.log("allfriends elements", element)
              const fullName = element.fName + " " + element.lName
              console.log("fullname", fullName)
              //push friends into something temporary and pull all to friendList at the end
              friendsListTemp.push(fullName)
        console.log("flt", friendsListTemp)
        this.setState({ friendsList: friendsListTemp })
          })// closes FriendShips2 json object
        })// closes ConnectedFriends
        })//closes FriendShips foreach
      })//closes Friendships json object

    console.log("state", this.state)
  }


  render() {
    return (
      <div className="Friends">
        <header className="Friends-header">
          <h3 className="Friends-title"> Friends List</h3>
          <ul className="Friends-List">
            {this.state.friendsList.map(f => {
              console.log(this.state.friendsList)
              return <li key={this.unique++}>{f}</li>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default DisplayFriends;