import React, { Component } from 'react';
import ItemsLoaned from './ItemsLoaned'

class LoanedItemList extends Component {
  getItems = function() {
    return this.props.loanedItems
        .map(itemList => (

            <ItemsLoaned itemList={itemList} key={itemList.id}/>
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