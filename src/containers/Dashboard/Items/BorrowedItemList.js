import React, { Component } from 'react';
import ItemsBorrowed from './ItemsBorrowed'
import { Row, Col } from 'react-bootstrap'

class BorrowedItemList extends Component {
  getItems = function () {
    return this.props.borrowedItems
      .map(itemList => (
        <Col xs={3} md={3} className="padding-zero" key={itemList.id}>
          <ItemsBorrowed
          itemList={itemList}
          loadItems={() => this.props.loadItems()}
           />
        </Col>
      ));
  }.bind(this)


  render() {
    const BorrowedItemsList = this.getItems()
    return (

      < div >
        <Row className="items-container padding-zero">{BorrowedItemsList}</Row>
      </div >
    );
  }
}

export default BorrowedItemList;