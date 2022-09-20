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
        if(this.state.text === ''){
            return this.props.setAlert({msg: 'Please provide input', type: 'light'});
        }
        return this.props.searchUsers(this.state.text);
    }

    clear = () => {
        return this.props.clearUsers();
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
<<<<<<< HEAD

                    {this.props.showClear && <button onClick={this.clear} className="btn btn-light btn-block">Clear</button>}
                    
=======
                    
                    {this.props.showClear && <button onClick={this.clear} className="btn btn-light btn-block">Clear</button>}

>>>>>>> be7c8d4b4233d9253b397fc5fd798a76a838dbb3
            </div>
        );
    }
}
export default Search;