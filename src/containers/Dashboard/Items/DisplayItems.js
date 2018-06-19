import React, { Component } from 'react';
import ItemList from './ItemList'


class DisplayItems extends Component {
  // Set state of the array that I'll be rendering
  state = { borrowedItemsList: [] }

  //
  unique = 1

  componentDidMount() {
    const tempBorrowedItemsList = []
    // Fetch all instances of the Lender ID matching the logged in user
    fetch(`http://localhost:5001/shareditems?lenderUserid=${this.props.ActiveUser.id}`)
      .then(response => response.json())
      .then(loanedItems => {
        console.log("loaned itemss", loanedItems)
        // Loop over the 2 objects and get the details
        loanedItems.forEach(element => {
          // const itemDetails = element.name
          tempBorrowedItemsList.push(element)
          this.setState({ borrowedItemsList: tempBorrowedItemsList })
          console.log("borrowed items in state", this.state.borrowedItemsList)

        })// Closes loanedItems foreach
      })// Closes loanedItems json

  }




  render() {
    return (
      <div className="Items">
        <header className="Items-header">
          <button className="add-loaned-item">Add Borrowed Item</button>
          <h3 className="Items-title"> Items List</h3>
          <ul className="Items-List">
          <ItemList borrowedItemsDetail={this.state.borrowedItemsList}/>
          </ul>
        </header>
      </div>
    );
  }
}

      export default DisplayItems;
