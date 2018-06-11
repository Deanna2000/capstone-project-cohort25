import React, { Component } from 'react';

class LoginRegisterUser extends Component {

    state = {
        email: "",
        password: "",
    }

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
                })
        }
        else {
            alert('Please enter an email address')
        }
    }

    addUser = (evt)=>{
        evt.preventDefault()
        console.log("add user fn")
    }

    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value })
    }

    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value })
    }

    handleFirstNameChange = (evt) => {
        this.setState({ firstName: evt.target.value })
    }

    handleLastNameChange = (evt) => {
        this.setState({ lastName: evt.target.value })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.handleEmailChange} />
                    <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                    <button value="Sign In" onClick={this.validateForm}>Sign In</button>
                    <input type="first name" id="firstName" value={this.state.firstName} onChange={this.handlefirstnameChange} placeholder="First Name" />
                    <input type="last name" id="lastName" value={this.state.lastName} onChange={this.handlelastnameChange} placeholder="Last Name" />
                    <button value="Sign Up" onClick={this.addUser}>Sign Up</button>
                </form>
            </div>
        )
    }
}



export default LoginRegisterUser