import React, { Component } from 'react';

// Set up the component to add a new loaned item
class AddItem extends Component {
    unique = 1
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            lenderUserid: '',
            borrowerName: '',
            borrowerUserid: '',
            lenderName: '',
            dueDate: '',
            image: '',
            lendDate: '',
            listOfFriends: []
        }
    };

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
        const acceptersFixed = accepters.map((accepter, index) => {
          return Object.assign({}, accepter, { relationshipId: relationshipIDs[index] })
        });
        friendsList = friendsList.concat(acceptersFixed)
      }
      this.setState({listOfFriends: friendsList})
      console.log("LOF TOP", this.state.listOfFriends)
    }.bind(this)



    addItem = (evt) => {
        evt.preventDefault();
        const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
        if (this.state.name.length > 0 && this.state.borrowerName.length > 0) {
            console.log("id", this.state.borrowerName.key)
            fetch("http://localhost:5001/sharedItems", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.state.name, description: this.state.description, borrowerName: this.state.borrowerName, borrowerUserid: this.state.borrowerName, lenderName: loggedInUser.fName + " " + loggedInUser.lName, lenderUserid: loggedInUser.id,
                    dueDate: this.state.dueDate, image: this.state.image, lendDate: this.state.lendDate, archived: false, returnedDate: ""
                })
            })
                .then(response => response.json())
                .then(newItem => {
                    sessionStorage.setItem("NewItem", JSON.stringify({ newItem }));
                })
                .then(() => {
                    this.props.loadItems()
                })
            // .then(() =>  this.setState({ name: this.state.name }))
        }
        else {
            alert("Please enter an item name and a borrower name.")
        }
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value })
    }

    handleDescriptionChange = (evt) => {
        this.setState({ description: evt.target.value })
    }

    handleLendDateChange = (evt) => {
        this.setState({ lendDate: evt.target.value })
    }

    handleDueDateChange = (evt) => {
        this.setState({ dueDate: evt.target.value })
    }

    handleImageChange = (evt) => {
        this.setState({ image: evt.target.value })
    }

    createSelectItems() {
        let items = []
        const userFriends = this.state.listOfFriends
        userFriends.map(friend =>{
            console.log("friend", friend.id)
            items.push(<option key={friend.id} value={friend.fName+" "+friend.lName}>{friend.fName+" "+friend.lName}</option>
            )
        }
    )
    return items;
}


    onDropdownSelected = (evt) => {
        console.log("THE VAL", evt.target.key);
        this.setState({ borrowerName: evt.target.value })
        console.log("key", this.state.key)
    }

    render() {


        return (


            <div className="addItemContainer">
                <form className="newItemForm">
                    <h3>New Item to Loan</h3>
                    <p>Please enter some info about the item you are loaning.</p>
                    <input type="text" id="name" value={this.state.name || ''} onChange={this.handleNameChange} placeholder=" Item Name" />
                    <input type="text" id="description" value={this.state.description || ''} onChange={this.handleDescriptionChange} placeholder="Description" />

                    <select type="select" placeholder="Select a Friend" value={this.state.borrowerName || ''} onChange={this.onDropdownSelected} label="Select Borrower" >
                        <option>Select a Borrower</option>
                        {this.createSelectItems()}
                    </select>

                    <label>Lend Date    <input type="date" id="lendDate" value={this.state.lendDate || ''} onChange={this.handleLendDateChange} placeholder="Lend Date" /></label>
                    <label>Due Date    <input type="date" id="dueDate" value={this.state.dueDate || ''} onChange={this.handleDueDateChange} placeholder="Due Date" /></label>
                    <input type="text" id="image" value={this.state.image || ''} onChange={this.handleImageChange} placeholder="Image Url" />
                    <button className="addItemButton" type="submit" value="Add Loan Item" onClick={this.addItem}>Confirm Loan</button>
                </form>
            </div>
        )
    }
}



export default AddItem;

