import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Friends.css'
import profileImage from '../../../components/IMAGES/profile-icon-28.png'


class Friend extends React.Component {


    removeFriend = () => {
                    fetch("http://localhost:5001/friendsRelationships/" + this.props.relId, {
                        method: "DELETE",
                    })
                    .then(()=>
                        {this.props.loadFriends()}
                    )
                }


    render() {
        return (
            <Row>
                <Col xs={3} md={3}><img className="vertical-align profileImage" src={profileImage} alt="profile" width="40%" height="40%" />
                </Col>
                <Col xs={2} md={2} className="vertical-align friendItem">
                    {this.props.fName}
                </Col>
                <Col xs={2} md={2} className="vertical-align friendItem">
                    {this.props.lName}
                </Col>
                <Col xs={3} md={3} className="vertical-align friendItem">
                    {this.props.email}
                </Col>
                <Col xs={2} md={2} className="vertical-align">
                    <button className="removeFriendButton" onClick={()=>this.removeFriend()}>Remove</button>
                </Col>
            </Row>
        );
    }
}

export default Friend;