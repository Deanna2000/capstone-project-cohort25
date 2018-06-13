import React, { Component } from 'react';





class DisplayFriends extends Component {
  // Set state of the array that I'll be rendering
  state = { friendsList: [] }

  //
  unique = 1
  // Get the userid of the currently logged in user
  // 1. Search friend requester for current user
  // Get the requested person
  // 2. Search requested person for current user
  // Get the friend requester
  // 3. Show that list of users from each friendship object
  // const userItem = sessionStorage.getItem('id')
  // console.log({userItem})
  componentDidMount() {
    //embed the requestedpersonID in this fetch call
    const friendsListTemp = []
    const friends = []
    const friends2 = []
    const allFriends = []
    fetch(`http://localhost:5001/friendsRelationships?AccepterId=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(friendShips => {
        console.log("friendShips", friendShips)
        friendShips.forEach(element => {
          const connection = element.RequesterId
          console.log("connectionreq",connection)
          return fetch(`http://localhost:5001/users?id=${connection}`)
          .then(response => response.json())
          .then(connectedFriends => {
            allFriends.push(connectedFriends)
            console.log("connected friends for requesters", connectedFriends)
            console.log("all friends first time", allFriends)



        fetch(`http://localhost:5001/friendsRelationships?RequesterId=${this.props.ActiveUser.id}`)
          .then(response => response.json())
          .then(friendShips2 => {
            friendShips2.forEach(f => {
              console.log("f",f)
              friends2.push(f)

          })
            friends2.forEach(element => {
              const connection = element.AccepterId
              console.log("connectionacc", connection)

              return fetch(`http://localhost:5001/users?id=${connection}`)
              .then(response => response.json())
              .then(connectedFriends2 => {
                allFriends.push(connectedFriends2)
                console.log("allfriends second time",allFriends)
                  console.log("connected friends for accepters", connectedFriends)
                  // ConnectedFriends contains the list of friends that have
                  // requestsed the logged in user
                  allFriends.forEach(element => {
                    //push friends into something temporary and pull all to friendList at the end
                    friendsListTemp.push(element.fName + " " + element.lName)
                  })
                  this.setState({ friendsList: friendsListTemp })
                })
              })
              })
            }
            )

          })
      })
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