import React, { Component } from 'react';
import { Card, CardBody, ImageHeader } from "react-simple-card";
import styles from './Items.css'


class Items extends Component {


    render() {

            let cardStyles = {
                margin: '20px',
                width: '250px',
                height: '300px',
                padding: '20px',
              };



    return (

        < div className="cards" >
            <Card style={cardStyles}>
                <ImageHeader imageSrc={this.props.itemList.image} />
                <CardBody>
                <h4>Who has my {this.props.itemList.name}?</h4>
                <h4>{this.props.itemList.borrowerName}</h4>
                </CardBody>
            </Card>
        </ div >
            )
        }
}

export default Items;