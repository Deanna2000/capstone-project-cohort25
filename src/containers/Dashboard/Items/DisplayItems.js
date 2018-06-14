import React, { Component } from 'react';


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
        console.log("loaned items", loanedItems) //should be 2 objects
        // Loop over the 2 objects and get the details
        loanedItems.forEach(element => {
          console.log("item element", element)
          const itemDetails = element.name
          tempBorrowedItemsList.push(itemDetails)
          console.log("item details", itemDetails) // should be 2 ID's
          console.log(tempBorrowedItemsList)
          this.setState({ borrowedItemsList: tempBorrowedItemsList })

        })// Closes loanedItems foreach
      })// Closes loanedItems json

    console.log("state", this.state)
  }


  render() {
    return (
      <div className="Items">
        <header className="Items-header">
          <h3 className="Items-title"> Items List</h3>
          <ul className="Items-List">
            {this.state.borrowedItemsList.map(f => {
              console.log("rendering", this.state.borrowedItemsList)
              return <li key={this.unique++}>{f}</li>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default DisplayItems;
