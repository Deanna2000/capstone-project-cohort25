import React from "react";
import friends from "./friends";
import Friend from "./Friend";
import DisplayFriends from "./DisplayFriends";



class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            orderBy: "name",
            order: "ascending",
            results: friends
        };
        this.handleChange = this.handleChange.bind(this)
        this.textChange = this.textChange.bind(this)
    }

    componentDidMount(){
        this.filterResults()
    }

    handleChange(event) {
        console.log(this.state.searchText)
        if(event && event.key === 'Enter'){
            event.preventDefault()
            this.filterResults()
        }

    }

    filterResults(){
        const friendsListFiltered = friends
        // const friendsListFiltered = this.props.allTheFriends
        .filter( friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1 )
        .sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] ? 1 : -1 )
        this.setState({ results: friendsListFiltered})
    }

    getResultsItems(){
        return this.state.results
        .map( friend => (
            <Friend
                name={ friend.name }
            />
        ) );
    }

    textChange(event){
        this.setState({ searchText: event.target.value })
    }

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
                            className="form-control"
                            onChange={this.textChange}
                            onKeyPress={this.handleChange}
                            placeholder="Search For Friends"
                            value={this.state.searchText}
                        />

                        <select
                            className="input-medium"
                            onChange={this.handleChange.bind(this, "orderBy")}
                            value={this.state.orderBy}
                        >
                            <option value="name">Name</option>
                            <option value="friend_count">#Friends</option>
                        </select>

                        <select
                            className="input-medium"
                            onChange={this.handleChange.bind(this, "order")}
                            value={this.state.order}
                        >
                            <option value={"descending"}>Descending</option>
                            <option value={"ascending"}>Ascending</option>
                        </select>

                    </div>
                </div>

                <ul>
                    { friendsList }
                </ul>
            </div>
        );
    }
}

export default FriendsList;