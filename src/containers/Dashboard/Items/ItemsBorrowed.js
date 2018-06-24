import React, { Component } from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import './Items.css'

class ItemsBorrowed extends Component {


    render() {



        return (

            <div>
                <div className="panel panel-default">
                    <div className="panel-body borrowed">
                        <img className="cardImg" alt="borroweditem" src={this.props.itemList.image} />
                        <h4 className="cardTitle">Whose {this.props.itemList.name} is this? </h4>
                        <p>{this.props.itemList.lenderName}</p>
                        <button type="button" className="btn returnButtonBorrowed">Returned It</button>
                    </div>
                </div>
            </div>
                )
    };
}

export default ItemsBorrowed;