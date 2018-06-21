import React from "react";
import { Row, Col} from 'react-bootstrap';
import './Friends.css'
import profileImage from '../../../components/IMAGES/profile-icon-28.png'


class Friend extends React.Component {

removeFriend = function (){
    // const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))


}

    render() {
        return (
            <Row>
                <Col xs={3} md={3}><img className="vertical-align profileImage" src={profileImage} alt="profile" width="40%" height="40%"/>
                </Col>
                <Col xs={2} md={2} className="vertical-align">
                    {this.props.fName}
                </Col>
                <Col xs={2} md={2} className="vertical-align">
                    {this.props.lName}
                </Col>
                <Col xs={3} md={3} className="vertical-align">
                    {this.props.email}
                </Col>
                <Col xs={2} md={2} className="vertical-align">
                    <button className="removeFriendButton btn-warning" onClick={this.removeFriend()}>Remove Friend</button>
                </Col>
            </Row>
        );
    }
}

export default Friend;