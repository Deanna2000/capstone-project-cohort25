import React, { Component } from 'react';
import UsersList from './UsersList';
import { Grid, Row, Col } from 'react-bootstrap'


// Set container to display the users
class DisplayUsers extends Component {
  unique = 1

  constructor(props) {
    super(props)
    // Set state of the array that I'll be rendering
    this.state = {
      listOfUsers: []
    }
  }

  // Call the function that will get all users when the component loads
  componentDidMount() {
    this.loadUsers()
  }

  loadUsers = function () {
    let userList = []
    // Fetch the instances of accepters that match the current user
    fetch(`http://localhost:5001/users`)
      .then(response => response.json())
      .then(users => {
        userList.push(users)
        this.setState({ listOfUsers: userList })
      })// closes users json
  }.bind(this)

  render() {
    return (
      <div className="Users">
        {/* <NavBar /> */}
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h3 className="Users-title">Borrow App Users</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} >
              <UsersList allTheUsers={this.state.listOfUsers} friends={this.props.friends} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DisplayUsers;