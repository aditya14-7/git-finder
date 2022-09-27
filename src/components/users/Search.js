import React, { useState, useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";

const Search = (props) => {
    const githubContext = useContext(GithubContext);
    const [text, setText] = useState('');

    const onInputChange = event => {
        setText(event.target.value);
    }

    const submit = () => {
        if(text === ''){
            return props.setAlert({msg: 'Please provide input', type: 'light'});
        }
        return githubContext.searchUsers(text);
    }

    const clear = () => {
        return githubContext.clearUsers();
    }

    return (
        <div>
                <input type="text" name="text" placeholder="Search here..." 
                onChange={onInputChange}
                />
                <button onClick={submit} className="btn btn-dark btn-block">Search</button>
                
                {props.showClear && <button onClick={clear} className="btn btn-light btn-block">Clear</button>}

        </div>
    );
}
export default Search;