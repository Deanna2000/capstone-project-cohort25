import React, { Component } from 'react';
import Items from './Items'

class ItemList extends Component {
  //QUESTION: Can I add a conditional stmt here to figure out which props to grab?
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