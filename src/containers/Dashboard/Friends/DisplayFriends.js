import React, { Component } from 'react';





class DisplayFriends extends Component {
state = {friendsList: []}

// Get the userid of the currently logged in user
// 1. Search friend requester for current user
// Get the requested person
// 2. Search requested person for current user
// Get the friend requester
// 3. Show that list of users from each friendship object
// const userItem = sessionStorage.getItem('id')
// console.log({userItem})
    componentDidMount(){
      //embed the requestedpersonID in this fetch call
        fetch(`http://localhost:5001/friendsRelationships?requestedPersonId=${this.props.ActiveUser.id}`)
        .then(response => response.json())
        .then(friendShips => {
          console.log("friendships", friendShips)
            friendShips.forEach(element => {
              const connection = element.friendRequesterId
              console.log("connection", connection)
                return fetch(`http://localhost:5001/users?id=${connection}`)
                .then(response => response.json())
                .then(connectedFriends => {
                  console.log("connected friends", connectedFriends)
                  connectedFriends.forEach(element => {
                    console.log("connected friend", element)
                  })
                })
                }
            )
            //push friends into something temporary and pull all to friendList at the end

        })
        }

  render() {
    return (
      <div className="Friends">
        <header className="Friends-header">
          <h3 className="Friends-title"> Friends List</h3>
        </header>
      </div>
    );
  }
}

export default DisplayFriends;