import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Items.css'

class ItemsBorrowed extends Component {


    render() {



        return (


            <div>
            <Card>
              <CardImg top width="100%" src={this.props.itemList.image}alt="Card image cap" />
              <CardBody>
                <CardTitle>Who did I borrow {this.props.itemList.name} from? </CardTitle>
                <CardSubtitle>{this.props.itemList.lenderName}</CardSubtitle>
                <Button>Returned It</Button>
              </CardBody>
            </Card>
          </div>
                )
            };
    }

export default ItemsBorrowed;