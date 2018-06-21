import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Items.css'

class ItemsLoaned extends Component {


    render() {



        return (


            <div>
            <Card>
              <CardImg top width="100%" src={this.props.itemList.image}alt="Card image cap" />
              <CardBody>
                <CardTitle>Who has my {this.props.itemList.name}?</CardTitle>
                <CardSubtitle>{this.props.itemList.borrowerName}</CardSubtitle>
                <Button>It's Returned</Button>
              </CardBody>
            </Card>
          </div>
                )
            };
    }

export default ItemsLoaned;