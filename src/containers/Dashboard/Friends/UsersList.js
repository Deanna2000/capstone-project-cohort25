import React from "react";
import User from "./User";
import './Friends.css';
import { Grid, Row, Col, FormGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';


// User search and display of users view
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            results: [],
            noResultsLabelDisplay: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.filterResults(nextProps.allTheUsers)
    }

    // Event listener for the search field
    handleChange = function (event) {
        if (event && event.key === 'Enter') {
            event.preventDefault()
            this.filterResults(this.props.allTheUsers)
        }
    }.bind(this)

    // Call in the search function and display the results
    filterResults = function (allTheUsers) {
        let usersListFiltered = allTheUsers[0]
        if (this.state.searchText.trim() !== "") {
            usersListFiltered = allTheUsers[0]
                .filter(user => this.searchForAUser(user))
        }
        this.setState({ results: usersListFiltered })
        if (usersListFiltered.length === 0 && this.state.searchText.trim() !== "") {
            this.setState({ noResultsLabelDisplay: true })
        } else {
            this.setState({ noResultsLabelDisplay: false })
        }
    }.bind(this)

    // Perform the search across the fields firstname, lastname and email
    searchForAUser = function (user) {
        return user.fName.toLowerCase().indexOf(this.state.searchText) >= 0
            || user.lName.toLowerCase().indexOf(this.state.searchText) >= 0
            || user.email.toLowerCase().indexOf(this.state.searchText) >= 0;
    }.bind(this)

    // Set the format to the display the results
    getResultsItems = function () {
        if (!this.state.results) {
            return null
        }
        return this.state.results
            .map((user, index) => (
                <Row key={index}>
                    <Col>
                        <ListGroupItem key={index}>
                            <User
                                fName={user.fName}
                                lName={user.lName}
                                email={user.email}
                                friendId={user.id}
                                key={user.id}
                                loadUsers={() => this.props.loadUsers()}
                            />
                        </ListGroupItem>
                    </Col>
                </Row>
            ));
    }.bind(this)

    // Event handler to capture the search input
    textChange = function (event) {
        this.setState({ searchText: event.target.value })
    }.bind(this)

    // Render the search bar and the list of all users (initial result)
    render() {

        const usersList = this.getResultsItems()

        return (

            <Grid>
                <Row>
                    <Col xs={3} md={3} />
                    <Col xs={6} md={6}>
                        <form>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search For A New Friend" onChange={this.textChange}
                                    onKeyPress={this.handleChange} value={this.state.searchText} />
                            </FormGroup>
                        </form>
                    </Col>
                    <Col xs={3} md={3} />
                </Row>
                <Row>
                    <Col xs={3} md={3} />
                    <Col xs={6} md={6} >
                        {
                            this.state.noResultsLabelDisplay ?
                                <p>{this.state.searchText} is not found, please try inviting them!</p>
                                :
                                null
                        }
                    </Col>
                    <Col xs={3} md={3} />
                </Row>
                <Row>
                    <Col xs={12} md={12} >
                        <ListGroup>
                            {usersList}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default UsersList;