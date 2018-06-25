import React from "react";
import User from "./User";
import './Friends.css';
import { Grid, Row, Col, FormGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';



class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            results: []
        };
    }

    componentWillReceiveProps(nextProps) {
        this.filterResults(nextProps.allTheUsers)
    }

    handleChange = function (event) {
        if (event && event.key === 'Enter') {
            event.preventDefault()
            this.filterResults(this.props.allTheUsers)
        }

    }.bind(this)


    filterResults = function (allTheUsers) {
        let usersListFiltered = allTheUsers[0]
        if (this.state.searchText.trim() !== "") {
            usersListFiltered = allTheUsers[0]
                .filter(user => this.searchForAUser(user))
        }
        this.setState({ results: usersListFiltered})
    }.bind(this)

    searchForAUser = function (user) {
            return user.fName.toLowerCase().indexOf(this.state.searchText) >= 0
            || user.lName.toLowerCase().indexOf(this.state.searchText) >= 0
            || user.email.toLowerCase().indexOf(this.state.searchText) >= 0;
        }.bind(this)



    getResultsItems = function () {
        if(!this.state.results){
            return console.log("this use does not exist")
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
                            />
                        </ListGroupItem>
                    </Col>
                </Row>
            ));
    }.bind(this)

    textChange = function (event) {
        this.setState({ searchText: event.target.value })
    }.bind(this)

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