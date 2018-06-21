import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import './Items.css'

class ItemsLoaned extends Component {


    render() {

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <img className="cardImg" src={this.props.itemList.image} />
                        <h4 className="cardTitle">Who has my {this.props.itemList.name}?</h4>
                        <p>{this.props.itemList.borrowerName}</p>
                        <button type="button" class="btn btn-info">It's Returned</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default ItemsLoaned;