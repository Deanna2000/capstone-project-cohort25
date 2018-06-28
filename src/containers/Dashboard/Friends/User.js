import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Friends.css';
import profileImage from '../../../components/IMAGES/profile-icon-28.png';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accepterId: '',
            requesterId: '',
        }
    };
    addFriend = () => {
        const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))
        fetch("http://localhost:5001/friendsRelationships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                AccepterId: this.props.friendId, RequesterId: loggedInUser.id, friendshipConfirmed: ""
            })

        })
            .then(response => response.json())
            .then(newFriend => {
                sessionStorage.setItem("NewFriend", JSON.stringify({ newFriend }));
                //redirect to find new friends view?

            })
    }


    render() {


        return (
            <Row>
                <Col xs={3} md={3}><img className="vertical-align profileImage" alt="profile" src={profileImage} width="40%" height="40%" />
                </Col>
                <Col xs={2} md={2} className="vertical-align userItem">
                    {this.props.fName}
                </Col>
                <Col xs={2} md={2} className="vertical-align userItem">
                    {this.props.lName}
                </Col>
                <Col xs={3} md={3} className="vertical-align userItem">
                    {this.props.email}
                </Col>
                <Col xs={2} md={2} className="vertical-align">
                    <button className="addFriendButton" onClick={() => this.addFriend()}>Add</button>
                </Col>
            </Row>
        );
    }
}


export default User;