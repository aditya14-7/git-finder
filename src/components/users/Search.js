import axios from "axios";
import React, { Component } from "react";

class Search extends Component {
    state = {
        text: ''
    };

    onInputChange = event => {
        this.setState({
            text: event.target.value
        });
    }

    submit = e => {
       /*  const res = axios.get(`https://api.github.com/search/users?q=${this.state.text}`).then(result => console.log('data', result.data));  */
       return this.props.searchUsers(this.state.text);
    }

    

    render() {
        return (
            <div>
                    <input type="text" name="text" placeholder="Search here..." 
                    onChange={this.onInputChange}
                    />
                    <button onClick={this.submit} className="btn btn-dark btn-block">Search</button>
                    
            </div>
        );
    }
}
export default Search;