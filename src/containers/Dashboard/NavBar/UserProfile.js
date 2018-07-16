import React, { Component } from 'react';
import './NavBar.css';
import {Modal} from 'react-bootstrap'
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
            shouldDashboardBeDisplayed: false,
            open: true
        }
        console.log("in the user profile")
    }


    updateUserProfile = (evt) => {
        evt.preventDefault();
        console.log("in update user profile function", this.state.email)
        //how can I set a condition for "anything that has changed?"
        if (this.state.email.length > 0) {
            fetch("http://localhost:5001/users", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, password: this.state.password, profileImage: this.state.profileImage, location: this.state.location })

            })
                .then(response => response.json())
                .then(user => {
                    sessionStorage.setItem("ActiveUser", JSON.stringify(user));
                    this.setState({ shouldDashboardBeDisplayed: true })

                })

        }
    };




    handleEmailChange = (evt) => {
      if(evt.target.value !== ''){
        this.setState({ email: evt.target.value })
      }
      else {
        this.setState({ email: this.loggedInUser.email})
        console.log("loggedIn", this.loggedInUser.email)
      }
    }

    handlePasswordChange = (evt) => {
      if(evt.target.value !== ''){
        this.setState({ password: evt.target.value })
      }
      else {
        this.setState({ password: this.loggedInUser.value })
      }
    }

    handleFirstNameChange = (evt) => {
      if(evt.target.value !== ''){
        this.setState({ fName: evt.target.value })
      }
      else {
        this.setState({ fName: this.loggedInUser.value })
      }
    }

    handleLastNameChange = (evt) => {
      if(evt.target.value !== ''){
        this.setState({ lName: evt.target.value })
      }
      else {
        this.setState({ lName: this.loggedInUser.value })
      }
    }

    handlelocationChange = (evt) => {
      if(evt.target.value !== ''){
        this.setState({ location: evt.target.value })
      }
      else {
        this.setState({ location: this.loggedInUser.value })
      }
    }

    handleProfileImage = (evt) => {
      if(evt.target.value !== ''){
        this.setState({ profileImage: evt.target.value })
      }
      else {
        this.setState({ profileImage: this.loggedInUser.value })
      }
    }

    render() {
      const loggedInUser = (JSON.parse(sessionStorage.getItem("ActiveUser")))

        let closeModal = () => this.setState({ open: false })

        console.log("in the profile")
        // console.log(this.loggedInUser.email)
        return (
          <div>

            <Modal
              show={this.state.open}
              onHide={closeModal}
              aria-labelledby="ModalHeader"
            >
            {/* <Modal.Dialog> */}
              <Modal.Header closeButton>
                <Modal.Title>Update Your Profile</Modal.Title>              </Modal.Header>
              <Modal.Body>
              <img className="vertical-align" src={profileImage} alt="profile" width="60px" height="60px" />
                            <input className="editProfileField" type="email" id="email" value={this.state.email || ''} onChange={this.handleEmailChange} placeholder={loggedInUser.email} />
                            <input className="editProfileField" type="password" id="password" value={this.state.password || ''} onChange={this.handlePasswordChange} placeholder="********" />
                            <input className="editProfileField" type="text" id="fName" value={this.state.fName || ''} onChange={this.handleFirstNameChange} placeholder={loggedInUser.fName} />
                            <input className="editProfileField" type="text" id="lName" value={this.state.lName || ''} onChange={this.handleLastNameChange} placeholder={loggedInUser.lName} />
                            <input className="editProfileField" type="text" id="location" value={this.state.location || ''} onChange={this.handlelocationChange} placeholder={loggedInUser.location || 'Add a location'} />
              </Modal.Body>
                  <Modal.Footer>
                        <button className="updateProfile" value="Update Profile" onClick={this.updateUserProfile}>Update</button>
                  </Modal.Footer>
                  {/* </Modal.Dialog> */}
            </Modal>
          </div>
        );
    }
  }





export default UserProfile;