import React, { Component } from 'react';

// Set up the component to add a new loaned item
class AddItem extends Component {
    constructor(props) {
        super(props);



        this.state = {
                name: '',
                description: '',
                lenderUserid: '',
                borrowerName: '',
                lenderName: '',
                dueDate: '',
                image: '',
                lendDate: ''
            }
    };

componentDidMount(){
    console.log("on the add item page")
}


    addItem = (evt) => {
        evt.preventDefault();
        const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
        if (this.state.name.length > 0) {
            fetch("http://localhost:5001/sharedItems", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({ name: this.state.name, description: this.state.description, borrowerName: this.state.borrowerName, lenderName: loggedInUser.fName&loggedInUser.lName, lenderUserid: loggedInUser.id,
                    dueDate: this.state.dueDate, image: this.state.image, lendDate: this.state.lendDate, archived: false, returnedDate: "" })

            })
                .then(response => response.json())
                .then(newItem => {
                    sessionStorage.setItem("NewItem", JSON.stringify({ newItem }));
                    // return <Redirect to='/mycollection';

                })
        }
        else {
            alert("Please enter an item.")
        }
    }

    handleNameChange = (evt) => {
        this.setState({ name: evt.target.value })
    }

    handleDescriptionChange = (evt) => {
        this.setState({ description: evt.target.value })
    }

    handleBorrowerChange = (evt) => {
        this.setState({ borrowerName: evt.target.value })
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

    render() {


        return (


            <div className="addItemContainer">
                <form className="newItemForm">
                    <h3>New Item to Loan</h3>
                    <p>Please enter some info about the item you are loaning.</p>
                    <input type="text" id="name" value={this.state.name || ''} onChange={this.handleNameChange} placeholder="Name" />
                    <input type="text" id="description" value={this.state.description || ''} onChange={this.handleDescriptionChange} placeholder="Description" />
                    <input type="text" id="borrower" value={this.state.borrowerName || ''} onChange={this.handleBorrowerChange} placeholder="Borrower Name" />
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



