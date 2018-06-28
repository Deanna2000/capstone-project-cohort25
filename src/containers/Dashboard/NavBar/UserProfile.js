import React, { Component } from 'react';
import './NavBar.css';
import { Modal } from 'react-bootstrap';
import profileImage from '../../../components/IMAGES/profile-icon-28.png'


// Set up the component to login and register a user
class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            profileImage: '',
            location: '',
            onClick: false,
            shouldDashboardBeDisplayed: false
        }
    }




    updateUserProfile = (evt) => {
        evt.preventDefault();
        if (this.state.email.length > 0) {
            fetch("http://localhost:5001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, password: this.state.password, profileImage: this.state.profileImage, location: this.state.location})

            })
                .then(response => response.json())
                .then(user => {
                    sessionStorage.setItem("ActiveUser", JSON.stringify( user ));
                    this.setState({ shouldDashboardBeDisplayed: true })

                })

        }
    };


    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value })
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value })
    }

    handleFirstNameChange = (evt) => {
        this.setState({ fName: evt.target.value })
    }

    handleLastNameChange = (evt) => {
        this.setState({ lName: evt.target.value })
    }

    handlelocationChange = (evt) => {
        this.setState({ location: evt.target.value })
    }

    handleProfileImage = (evt) => {
        this.setState({ profileImage: evt.target.value})
    }

    render() {


        return (
            <div className="static-modal">
                <Modal.Dialog className="editProfileModal">
                    <Modal.Header>
                        <Modal.Title>Update Your Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <img className="vertical-align profileImage" src={profileImage} alt="profile" width="40%" height="40%" />
                            <input className="editProfileField" type="email" id="email" value={this.props.email || ''} onChange={this.handleEmailChange} placeholder={this.props.email} />
                            <input className="editProfileField" type="password" id="password" value={this.props.password || ''} onChange={this.handlePasswordChange} placeholder="********" />
                            <input className="editProfileField" type="text" id="fName" value={this.state.fName || ''} onChange={this.handleFirstNameChange} placeholder={this.state.fName} />
                            <input className="editProfileField" type="text" id="lName" value={this.state.lName || ''} onChange={this.handleLastNameChange} placeholder={this.state.lName} />
                            <input className="editProfileField" type="text" id="location" value={this.state.location || ''} onChange={this.handlelocationChange} placeholder={this.state.location || ''} />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="updateProfile" value="Update Profile" onClick={this.updateUserProfile}>Update</button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            );
    }
}



export default UserProfile;

