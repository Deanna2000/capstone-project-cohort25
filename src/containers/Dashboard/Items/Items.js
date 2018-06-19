import React, { Component } from 'react';
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";


class Items extends Component {


    render() {

            let cardStyles = {
                margin: '20px',
                width: '250px',
                height: '250px',
                display: 'grid-inline',
              };
    return (

        < div >
            <Card style={cardStyles}>
                <ImageHeader imageSrc={this.props.itemList.image} />
                <CardBody>
                <h3>Who has my {this.props.itemList.name}?</h3>
                <h3>{this.props.itemList.borrowerName}</h3>
                </CardBody>
                {/* <CardFooter>{this.props.itemList.name}</CardFooter> */}
            </Card>
        </ div >
            )
        }
}

export default Items;