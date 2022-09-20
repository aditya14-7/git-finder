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
        if(this.state.text === ''){
            return this.props.setAlert({msg: 'Please provide input', type: 'light'});
        }
        return this.props.searchUsers(this.state.text);
    }

    clear = () => {
        return this.props.clearUsers();
    }

    render() {
        return (
            <div>
                    <input type="text" name="text" placeholder="Search here..." 
                    onChange={this.onInputChange}
                    />
                    <button onClick={this.submit} className="btn btn-dark btn-block">Search</button>
                    
                    {this.props.showClear && <button onClick={this.clear} className="btn btn-light btn-block">Clear</button>}

            </div>
        );
    }
}
export default Search;