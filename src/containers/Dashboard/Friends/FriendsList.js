import React from "react";
import Friend from "./Friend";
import styles from './Friends.css';
import { Grid, Row, Col, FormGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';



class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending",
            // results: friends
            results: []
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("next props", nextProps)
        this.filterResults(nextProps.allTheFriends)
    }

    // componentDidMount() {
    //     this.filterResults()
    // }

    handleChange = function (event) {
        console.log(this.state.searchText)
        if (event && event.key === 'Enter') {
            event.preventDefault()
            this.filterResults(this.props.allTheFriends)
        }

    }.bind(this)

    filterResults = function (allTheFriends) {
        console.log("allthefriends in filterResults", allTheFriends)
        let friendsListFiltered = allTheFriends
        if (this.state.searchText.trim() !== "") {
            friendsListFiltered = allTheFriends
                .filter(friend => this.doesFriendInformationContainSearchText(friend))
        }
        console.log("flf", friendsListFiltered)
        this.setState({ results: friendsListFiltered })
        console.log("results", this.state.results)
        // console.log("results after", results)
    }.bind(this)

    doesFriendInformationContainSearchText = function (friend) {
        return friend.fName.toLowerCase().indexOf(this.state.searchText) >= 0
            || friend.lName.toLowerCase().indexOf(this.state.searchText) >= 0
            || friend.email.toLowerCase().indexOf(this.state.searchText) >= 0;
    }.bind(this)

    getResultsItems = function () {
        console.log("results in getResultsItem function", this.state.results)
        return this.state.results
            .map((friend, index) => (
                <ListGroupItem>
                    <Friend
                        fName={friend.fName}
                        lName={friend.lName}
                        email={friend.email}
                        key={index}
                    />
                </ListGroupItem>
            ));
    }.bind(this)

    textChange = function (event) {
        this.setState({ searchText: event.target.value })
    }.bind(this)

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
                        {/* <div
                        className="form-inline searchForm"
                        role="form">
                        <div className="form-group">

                            <input
                                className="form-control friendsSearch"
                                onChange={this.textChange}
                                onKeyPress={this.handleChange}
                                placeholder="Search For Friends"
                                value={this.state.searchText} />
                        </div>
                    </div> */}
                    </Col>
                    <Col xs={3} md={3} />
                </Row>
                <Row>
                    <Col xs={12} md={12} >
                    <ListGroup>
                        {friendsList}
                    </ListGroup>
                    </Col>
                </Row>
            </Grid>

        );
    }
}

export default FriendsList;