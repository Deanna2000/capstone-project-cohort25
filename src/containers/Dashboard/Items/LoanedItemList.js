import React, { Component } from 'react';
import ItemsLoaned from './ItemsLoaned'
import {Row, Col} from 'react-bootstrap'

class LoanedItemList extends Component {
  getItems = function() {
    return this.props.loanedItems
        .map(itemList => (
            <Col xs={3} md={3} className="padding-zero" key={itemList.id}>
              <ItemsLoaned itemList={itemList} />
            </Col>
        ));
    }.bind(this)


  render() {
    const loanedItemsList = this.getItems()
    return (

      < div >
        <Row className="items-container padding-zero">{loanedItemsList}</Row>
      </div >
);
}
}

export default LoanedItemList;