import React, { Component } from 'react';
import LoanedItemList from './LoanedItemList'
import BorrowedItemList from './BorrowedItemList'
import AddItem from './AddItem'
import NavBar from '../NavBar/NavBar'

class DisplayItems extends Component {
  // Set state of the array that I'll be rendering
  state = {
    loanedItemsList: [],
    borrowedItemsList: [],
    activeTab: 0,
  }

  unique = 1
  componentDidMount() {
    this.loadItems()
  }

  loadItems = async function () {
    const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
    const tempLoanedItemsList = []
    // Fetch all instances of the Lender ID matching the logged in user
    fetch(`http://localhost:5001/shareditems?lenderUserid=${loggedInUser.id}`)
      .then(response => response.json())
      .then(loanedItems => {
        // Loop over the objects and get the details
        loanedItems.forEach(element => {
          // const itemDetails = element.name
          tempLoanedItemsList.push(element)
          this.setState({ loanedItemsList: tempLoanedItemsList })
        })// Closes loanedItems foreach
      })// Closes loanedItems json

    const tempBorrowedItemsList = []
    // Fetch all instances of the Lender ID matching the logged in user
    fetch(`http://localhost:5001/shareditems?borrowerUserid=${loggedInUser.id}`)
      .then(response => response.json())
      .then(borrowedItems => {
        // Loop over the objects and get the details
        borrowedItems.forEach(element => {
          // const itemDetails = element.name
          tempBorrowedItemsList.push(element)
          this.setState({ borrowedItemsList: tempBorrowedItemsList })
        })// Closes borrowedItems foreach
      })// Closes borrowedItems json

  }.bind(this)

  activateTab = function (tabIndex) {
    this.setState({ activeTab: tabIndex })
  }.bind(this)



  render() {


    return (
      <div>
        <NavBar />
        <div>
          <ul className="nav nav-tabs">
            <li role="presentation" className={this.state.activeTab === 0 ? "active" : ""}>
              <a onClick={() => this.activateTab(0)}>Stuff I Shared</a>
            </li>
            <li role="presentation" className={this.state.activeTab === 1 ? "active" : ""}>
              <a onClick={() => this.activateTab(1)}>Stuff I Borrowed</a>
            </li>
            <li role="presentation" className={this.state.activeTab === 2 ? "active" : ""}>
              <a onClick={() => this.activateTab(2)}>Loan a New Item</a>
            </li>
          </ul>
        </div>
        {
          this.state.activeTab === 0 ?
            <LoanedItemList loanedItems={this.state.loanedItemsList} loadItems={()=> this.loadItems()} />
            :
            null
        }
        {
          this.state.activeTab === 1 ?
            <BorrowedItemList borrowedItems={this.state.borrowedItemsList} loadItems={()=> this.loadItems()}/>
            :
            null
        }
        {
          this.state.activeTab === 2 ?
            <AddItem loadItems={()=> this.loadItems()} />
            :
            null
        }
      </div>
    );
  }
}

export default DisplayItems;
