import React, { Component } from 'react';
import ItemList from './ItemList'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import AddItem from './AddItem'
import NavBar from '../NavBar/NavBar'

class DisplayItems extends Component {
  // Set state of the array that I'll be rendering
  state = {
    loanedItemsList: [],
  }

  unique = 1

  componentDidMount() {
    const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    const tempLoanedItemsList = []
    // Fetch all instances of the Lender ID matching the logged in user
    fetch(`http://localhost:5001/shareditems?lenderUserid=${loggedInUser.id}`)
      .then(response => response.json())
      .then(loanedItems => {
        console.log("loaned items", loanedItems)
        // Loop over the objects and get the details
        loanedItems.forEach(element => {
          // const itemDetails = element.name
          tempLoanedItemsList.push(element)
          this.setState({ loanedItemsList: tempLoanedItemsList })
          console.log("loaned items in state", this.state.loanedItemsList)
        })// Closes loanedItems foreach
      })// Closes loanedItems json

    const tempBorrowedItemsList = []
    // Fetch all instances of the Lender ID matching the logged in user
    fetch(`http://localhost:5001/shareditems?borrowerUserid=${loggedInUser.id}`)
      .then(response => response.json())
      .then(borrowedItems => {
        console.log("loaned items", borrowedItems)
        // Loop over the 2 objects and get the details
        borrowedItems.forEach(element => {
          // const itemDetails = element.name
          tempBorrowedItemsList.push(element)
          this.setState({ borrowedItemsList: tempBorrowedItemsList })
          console.log("borrowed items in state", this.state.borrowedItemsList)

        })// Closes borrowedItems foreach
      })// Closes borrowedItems json

    }



    // addItemButton() {
    //   console.log("button")
    //   return <AddItem/>
    // }




  render() {


    return (
      <div>
        <NavBar/>
        <AddItem/>
          <button className="add-loaned-item" onClick={this.addItemButton}>Add New Loaned Item</button>
        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
          <Tab className="tabName" label="Stuff I Shared">
            <ul className="Items-List">
              <ItemList loanedItemsDetail={this.state.loanedItemsList} />
            </ul>
          </Tab>
          <Tab className="tabName" label="Stuff I Borrowed">
            <ul className="Items-List">
              <ItemList borrowedItemsDetail={this.state.borrowedItemsList} />
            </ul>
          </Tab>
          <Tab className="tabName" label="Loan a New Item">
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default DisplayItems;
