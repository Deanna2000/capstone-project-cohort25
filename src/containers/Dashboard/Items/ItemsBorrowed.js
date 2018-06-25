import React, { Component } from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
import './Items.css'

class ItemsBorrowed extends Component {

    removeBorrowedItem = () => {
        fetch("http://localhost:5001/sharedItems/" + this.props.itemList.id, {
            method: "DELETE",
        })
        alert("The item has been deleted")
      //ADD A PAGE REDIRECT HERE
    }

    render() {



        return (

            <div>
                <div className="panel panel-default">
                    <div className="panel-body borrowed">
                        <img className="cardImg" alt="borroweditem" src={this.props.itemList.image} />
                        <h4 className="cardTitle">Whose {this.props.itemList.name} is this? </h4>
                        <p>{this.props.itemList.lenderName}</p>
                        <button type="button" className="btn returnButtonBorrowed" onClick={()=>this.removeBorrowedItem()}>Returned It</button>
                    </div>
                </div>
            </div>
                )
    };
}

export default ItemsBorrowed;