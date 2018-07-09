import React, { Component } from 'react';
import './Items.css'


// Render the borrowed items
class ItemsBorrowed extends Component {

    removeBorrowedItem = () => {
        fetch("http://localhost:5001/sharedItems/" + this.props.itemList.id, {
            method: "DELETE",
        })
            .then(() => { this.props.loadItems() }
            )
    }

    render() {

        return (

            <div>
                <div className="panel panel-default">
                    <div className="panel-body borrowed">
                        <img className="cardImg" alt="borroweditem" src={this.props.itemList.image} />
                        <h4 className="cardTitle">Whose {this.props.itemList.name} is this? </h4>
                        <p>{this.props.itemList.lenderName}</p>
                        <button type="button" className="btn returnButtonBorrowed" onClick={() => this.removeBorrowedItem()}>Returned It</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default ItemsBorrowed;