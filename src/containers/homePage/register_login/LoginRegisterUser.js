import React, { Component } from 'react';

// Set up the component to login and register a user
class LoginRegisterUser extends Component {
    //What are we bringing in here?
    constructor(props) {
        super(props);

        this.state = {
            user: {
                fName: '',
                lName: '',
                username: '',
                password: ''
            },
            onClick: false
        }
    };



    validateForm = (evt) => {
        evt.preventDefault()
        if (this.state.email.length > 0) {
            return fetch(`http://localhost:5001/users?email=${this.state.email}&${this.state.password}`)
                .then((response) => {
                    return response.json();
                }).then((user) => {
                    console.log(user[0])
                    const userItem = user[0]
                    sessionStorage.setItem("ActiveUser", JSON.stringify({ userItem }))
                    console.log("login redirect to dash");
                })
            }
            else {
                alert('Please enter an email address')
            }
    }

    addUser = (evt) => {
        evt.preventDefault();
        if (this.state.email.length > 0) {
            fetch("http://localhost:5001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fName: this.state.fName, lName: this.state.lName, email: this.state.email, password: this.state.password })

            })
                .then(response => response.json())
                .then(user => {
                    sessionStorage.setItem("ActiveUser", JSON.stringify({ user }));
                })

        }
    }

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

    render() {
        return (
            <div>
                <form>
                    <input type="email" id="email" value={this.state.email || ''} onChange={this.handleEmailChange} placeholder="Email" />
                    <input type="password" id="password" value={this.state.password || ''} onChange={this.handlePasswordChange} placeholder="Password" />
                    <button value="Sign In" onClick={this.validateForm}>Sign In</button>
                    <input type="text" id="fName" value={this.state.fName || ''} onChange={this.handleFirstNameChange} placeholder="First Name" />
                    <input type="text" id="lName" value={this.state.lName || ''} onChange={this.handleLastNameChange} placeholder="Last Name" />
                    <button value="Sign Up" onClick={this.addUser}>Sign Up</button>
                </form>
            </div>
        )
    }
}



export default LoginRegisterUser;
