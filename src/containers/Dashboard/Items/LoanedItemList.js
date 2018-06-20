import React, { Component } from 'react';
import Items from './Items'

class LoanedItemList extends Component {
  getItems = function() {
    return this.props.loanedItems
        .map(itemList => (
            <Items itemList={itemList}/>
        ));
    }.bind(this)


  render() {
    const loanedItemsList = this.getItems()
    return (

      < div >
        <ul>{loanedItemsList}</ul>
      </div >
);
}
}

export default LoanedItemList;