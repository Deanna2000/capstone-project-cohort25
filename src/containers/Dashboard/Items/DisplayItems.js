import React, { Component } from 'react';
import LoanedItemList from './LoanedItemList'
import BorrowedItemList from './BorrowedItemList'
import { Tabs, Tab } from 'react-bootstrap-tabs';
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
            <LoanedItemList loanedItems={this.state.loanedItemsList} />
            :
            null
        }
        {
          this.state.activeTab === 1 ?
            <BorrowedItemList borrowedItems={this.state.borrowedItemsList} />
            :
            null
        }
        {
          this.state.activeTab === 2 ?
            <AddItem />
            :
            null
        }

        {/* <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
          <Tab className="tabName" label="Stuff I Shared">
            <ul className="Items-List">
            </ul>
          </Tab>
          <Tab className="tabName" label="Stuff I Borrowed">
            <ul className="Items-List">
              <ItemList borrowedItemsDetail={this.state.borrowedItemsList} />
            </ul>
          </Tab>
          <Tab className="tabName" label="Loan a New Item">
          </Tab>
        </Tabs> */}
      </div>
    );
  }
}

export default DisplayItems;
