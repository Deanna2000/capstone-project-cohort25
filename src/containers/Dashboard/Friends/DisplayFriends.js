import React, { Component } from 'react';





class DisplayFriends extends Component {
state = {friendsList: []}

    componentDidMount(){
        // Get the userid of the currently logged in user
        // 1. Search friend requester for current user
        // Get the requested person
        // 2. Search requested person for current user
        // Get the friend requester
        // 3. Show that list of users from each friendship object
        const userItem = sessionStorage.getItem('id')
        console.log({userItem})
        fetch('http://localhost:5001/friendsRelationships?friendRequesterId={currentUserId}')
        .then(response => response.json())
        .then(friendShips => {
            friendShips.forEach(element => {
                console.log(element)
                if(element.friendRequester.id === element.id) {
                    console.log(element.requestedPerson)
                }
            });

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