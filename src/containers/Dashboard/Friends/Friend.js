import React from "react";
import { Row, Col} from 'react-bootstrap';
import profileImage from '../../../components/IMAGES/profile-icon-28.png'


class Friend extends React.Component {

    render() {
        return (
            <Row>
                <Col xs={3} md={3}><img className="profileImage" src={profileImage} width="40%" height="40%"/>
                </Col>
                <Col xs={3} md={3} className="vertical-align">
                    {this.props.fName}
                </Col>
                <Col xs={3} md={3} className="vertical-align">
                    {this.props.lName}
                </Col>
                <Col xs={3} md={3} className="vertical-align">
                    {this.props.email}
                </Col>
            </Row>
        );
    }
}

export default Friend;