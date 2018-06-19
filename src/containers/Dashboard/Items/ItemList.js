import React, { Component } from 'react';
// import { render } from "react-dom";
import Items from './Items'

class ItemList extends Component {
  getItems = function() {
    return this.props.loanedItemsDetail
        .map(itemList => (
            <Items itemList={itemList}/>
        ));

      // else {
      //   return this.props.borrowedItemsDetail
      //   .map(itemList => (
      //     <Items itemList={itemList}/>
      // ));
      // }
    }.bind(this)


  render() {
    const itemsList = this.getItems()
    return (

      < div >
        <ul>{itemsList}</ul>
      </div >
);
}
}

export default ItemList;