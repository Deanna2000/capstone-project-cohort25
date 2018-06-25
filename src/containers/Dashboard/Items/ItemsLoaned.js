import React, { Component } from 'react';
import './Items.css'

class ItemsLoaned extends Component {

    removeLoanedItem = () => {
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
                    <div className="panel-body loaned">
                        <img className="cardImg" alt="loanedItem" src={this.props.itemList.image} />
                        <h4 className="cardTitle">Who has my {this.props.itemList.name}?</h4>
                        <p>{this.props.itemList.borrowerName}</p>
                        <button type="button" className="btn returnButtonLoaned" onClick={()=>this.removeLoanedItem()}>It's Returned</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default ItemsLoaned;