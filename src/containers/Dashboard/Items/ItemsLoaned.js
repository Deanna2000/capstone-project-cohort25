import React, { Component } from 'react';
import './Items.css'

class ItemsLoaned extends Component {


    render() {

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body loaned">
                        <img className="cardImg" alt="loanedItem" src={this.props.itemList.image} />
                        <h4 className="cardTitle">Who has my {this.props.itemList.name}?</h4>
                        <p>{this.props.itemList.borrowerName}</p>
                        <button type="button" className="btn returnButtonLoaned">It's Returned</button>
                    </div>
                </div>
            </div>
        )
    };
}

export default ItemsLoaned;