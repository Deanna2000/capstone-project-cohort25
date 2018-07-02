import React, { Component } from 'react';
import { Redirect, } from "react-router-dom";
import './LoginRegisterUser.css'


// Set up the component to login and register a user
class LoginRegisterUser extends Component {
    constructor(props) {
        super(props);

        // Set initial values for form fields and event listeners
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
    };

    // validate an existing user for Login process
    validateForm = (evt) => {
        evt.preventDefault()
        if (this.state.email.length > 0) {
            return fetch(`http://localhost:5001/users?email=${this.state.email}&${this.state.password}`)
                .then((response) => {
                    return response.json();
                }).then((user) => {
                    if (user <= 0) {
                        alert("Please enter a valid email and password")
                    } else {
                        sessionStorage.setItem("ActiveUser", JSON.stringify(user[0]))
                        this.setState({ shouldDashboardBeDisplayed: true })
                    }
                })
        }
        else {
            alert("Please enter an email address and password")
        }
    }

    // Add a new user for registration
    addUser = (evt) => {
        evt.preventDefault();
        if (this.state.email.length > 0) {
            fetch("http://localhost:5001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, password: this.state.password, profileImage: '', location: '' })
            })
                .then(response => response.json())
                .then(user => {
                    sessionStorage.setItem("ActiveUser", JSON.stringify(user));
                    this.setState({ shouldDashboardBeDisplayed: true })
                })
        } else {
            alert("Please fill in all the fields to register")
        }
    }

    // Functions for event listeners
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

    // Login and Registration forms
    render() {

        if (this.state.shouldDashboardBeDisplayed) {
            return <Redirect to='/mycollection' />
        }
        return (

            <div className="loginView">
                <form className="loginForm">
                    <div className="loginFields">
                        <div className="loginFieldsWrapper">
                            <input className="loginInputField" type="email" id="email" value={this.state.email || ''} onChange={this.handleEmailChange} placeholder="Email" />
                            <input className="loginInputField" type="password" id="password" value={this.state.password || ''} onChange={this.handlePasswordChange} placeholder="Password" />
                        </div>
                        <button className="signIn" value="Sign In" onClick={this.validateForm}>Sign In</button>
                    </div>
                    <div className="registerFields">
                        <div className="registerFieldsWrapper">
                            <input type="text" id="fName" value={this.state.fName || ''} onChange={this.handleFirstNameChange} placeholder="First Name" />
                            <input type="text" id="lName" value={this.state.lName || ''} onChange={this.handleLastNameChange} placeholder="Last Name" />
                        </div>
                        <button className="signUp" value="Sign Up" onClick={this.addUser}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default LoginRegisterUser;

