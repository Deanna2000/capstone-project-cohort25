import React from "react";
import Friend from "./Friend";
import './Friends.css';
import { Grid, Row, Col, FormGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

// Friends search and display of the friends view
class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending",
            results: [],
            noResultsLabelDisplay: false,
        };
    }

    // Set initial view of all friends
    componentWillReceiveProps(nextProps) {
        this.filterResults(nextProps.allTheFriends)
    }

    // Bring in the filter function after a search term is entered
    handleChange = function (event) {
        if (event && event.key === 'Enter') {
            event.preventDefault()
            this.filterResults(this.props.allTheFriends)
        }
    }.bind(this)

    // Display the filtered results
    filterResults = function (allTheFriends) {
        let friendsListFiltered = allTheFriends
        if (this.state.searchText.trim() !== "") {
            friendsListFiltered = allTheFriends
                .filter(friend => this.searchForAFriend(friend))
        }
        this.setState({ results: friendsListFiltered })
        if (friendsListFiltered.length === 0 && this.state.searchText.trim() !== "") {
            this.setState({ noResultsLabelDisplay: true })
        } else {
            this.setState({ noResultsLabelDisplay: false })
        }
    }.bind(this)

    // Perform the search across the fields firstname, lastname and email
    searchForAFriend = function (friend) {
        return friend.fName.toLowerCase().indexOf(this.state.searchText) >= 0
            || friend.lName.toLowerCase().indexOf(this.state.searchText) >= 0
            || friend.email.toLowerCase().indexOf(this.state.searchText) >= 0;
    }.bind(this)

    // Set the format to the display the results
    getResultsItems = function () {
        if (!this.state.results) {
            return null
        }
        return this.state.results
            .map((friend, index) => (
                <Row key={index}>
                    <Col>
                        <ListGroupItem key={index}>
                            <Friend
                                fName={friend.fName}
                                lName={friend.lName}
                                email={friend.email}
                                friendId={friend.id}
                                relId={friend.relationshipId}
                                key={friend.id}
                                loadFriends={() => this.props.loadFriends()}
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

        const friendsList = this.getResultsItems()

        return (
            <Grid>
                <Row>
                    <Col xs={3} md={3} />
                    <Col xs={6} md={6}>
                        <form>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search For Friends" onChange={this.textChange}
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
                                <p>{this.state.searchText} is not found, please try adding them!</p>
                                :
                                null
                        }
                    </Col>
                    <Col xs={3} md={3} />
                </Row>
                <Row>
                    <Col xs={12} md={12} >
                        <ListGroup className="friendsView">
                            {friendsList}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default FriendsList;