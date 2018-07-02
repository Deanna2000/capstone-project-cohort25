import React, { Component } from 'react';
import DisplayFriends from './DisplayFriends';
import DisplayUsers from './DisplayUsers';
import NavBar from '../NavBar/NavBar';


// Parent container of friends and items displays
class DisplayFriendsAndUsers extends Component {
    // Set default tab for this view
    state = {
        activeTab: 0,
    }

    activateTab = function (tabIndex) {
        this.setState({ activeTab: tabIndex })
    }.bind(this)

    render() {

        return (

            <div>
                <NavBar />
                <div>
                    <ul className="nav nav-tabs">
                        <li role="presentation" className={this.state.activeTab === 0 ? "active" : ""}>
                            <a onClick={() => this.activateTab(0)}>Current Friends</a>
                        </li>
                        <li role="presentation" className={this.state.activeTab === 1 ? "active" : ""}>
                            <a onClick={() => this.activateTab(1)}>Find New Friends</a>
                        </li>
                    </ul>
                </div>
                {
                    this.state.activeTab === 0 ?
                        <DisplayFriends />
                        :
                        null
                }
                {
                    this.state.activeTab === 1 ?
                        <DisplayUsers />
                        :
                        null
                }
            </div>
        );
    }
}


export default DisplayFriendsAndUsers;