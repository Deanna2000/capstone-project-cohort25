import React from "react";
import Friend from "./Friend";
import styles from './Friends.css'



class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending",
            // results: friends
            results: this.props.allTheFriends
        };
        // this.handleChange = this.handleChange.bind(this)
        // this.textChange = this.textChange.bind(this)
    }

    componentDidMount() {
        this.filterResults()
    }

    handleChange =function(event) {
        console.log(this.state.searchText)
        if (event && event.key === 'Enter') {
            event.preventDefault()
            this.filterResults()
        }

    }.bind(this)

    filterResults = function() {
        console.log("flfiltered", this.props.allTheFriends)
        const friendsListFiltered = this.props.allTheFriends
            .filter(friend => friend.fName.toLowerCase() === this.state.searchText.toLowerCase() || friend.lName.toLowerCase() === this.state.searchText.toLowerCase())
        console.log("flf", friendsListFiltered)
        this.setState({ results:friendsListFiltered })
        console.log("results", this.state.results)
        // console.log("results after", results)
    }.bind(this)

    getResultsItems = function() {
        return this.state.results
            .map(friend => (
                <Friend
                    name={friend.fName}
                />
            ));
    }.bind(this)

    textChange = function(event) {
        this.setState({ searchText: event.target.value })
    }.bind(this)

    render() {
        const friendsList = this.getResultsItems()

        return (
            <div>
                <div
                    className="form-inline searchForm"
                    role="form"
                >
                    <div className="form-group">

                        <input
                            className="form-control friendsSearch"
                            onChange={this.textChange}
                            onKeyPress={this.handleChange}
                            placeholder="Search For Friends"
                            value={this.state.searchText}
                        />

                        {/* <select
                            className="input-medium"
                            onChange={this.handleChange.bind(this, "orderBy")}
                            value={this.state.orderBy}
                        >
                            <option value="name">Name</option>
                            <option value="friend_count">#Friends</option>
                        </select> */}

                        {/* <select
                            className="input-medium"
                            onChange={this.handleChange.bind(this, "order")}
                            value={this.state.order}
                        >
                            <option value={"descending"}>Descending</option>
                            <option value={"ascending"}>Ascending</option>
                        </select> */}

                    </div>
                </div>

                <ul>
                    {friendsList}
                </ul>
            </div>
        );
    }
}

export default FriendsList;