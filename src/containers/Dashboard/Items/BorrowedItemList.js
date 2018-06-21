import React, { Component } from 'react';
import ItemsBorrowed from './ItemsBorrowed'

class BorrowedItemList extends Component {
  getItems = function() {
    return this.props.borrowedItems
        .map(itemList => (
            <ItemsBorrowed itemList={itemList} key={itemList.id}/>
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