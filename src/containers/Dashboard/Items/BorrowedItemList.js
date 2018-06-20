import React, { Component } from 'react';
import Items from './Items'

class BorrowedItemList extends Component {
  getItems = function() {
    return this.props.borrowedItems
        .map(itemList => (
            <Items itemList={itemList}/>
        ));
    }.bind(this)


  render() {
    const BorrowedItemsList = this.getItems()
    return (

      < div >
        <ul>{BorrowedItemsList}</ul>
      </div >
);
}
}

export default BorrowedItemList;