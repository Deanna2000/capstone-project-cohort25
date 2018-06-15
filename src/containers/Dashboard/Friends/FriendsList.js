import React from "react";
import friends from "./friends";
import Friend from "./Friend";



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
        // else if (event && event.key !== 'Enter') {
        //     event.preventDefault()
        //     this.setState({ searchText:event.target.value });
        // }

        //this.setState ({
        //     ["searchText"]: event(just injected from react).target.value
        // })
    }

    filterResults(){
        const friendsListFiltered = friends
        .filter( friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1 )
        .sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] ? 1 : -1 )
        this.setState({ results: friendsListFiltered})
    }

    getResultsItems(){
        return this.state.results
        .map( friend => (
            <Friend
                currentLocation={ friend.current_location || {} }
                friendCount={ friend.friend_count }
                key={ friend.$$hashKey }
                name={ friend.name }
                pictureUrl={ friend.pic_square }
                status={ friend.status ? friend.status.message : "" }
            />
        ) );
    }

    textChange(event){
        this.setState({ searchText: event.target.value })
    }

        render() {
            const friendsList = this.getResultsItems()
            // .filter( friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1 )
            // .sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] ? 1 : -1 )

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