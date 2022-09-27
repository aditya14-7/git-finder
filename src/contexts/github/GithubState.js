import { useReducer } from "react";
import axios from "axios";
import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USERS
} from "../types";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";

const GithubState = props => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    /**
     * Makes API call to fetch user by name
     * 
     * @param {*} val 
     * @returns 
     */
    const searchUsers = async val => {
        dispatch({
            type: SET_LOADING
        });
        const response = await axios.get(`${process.env.REACT_APP_GIT_BASE_URL}search/users?q=${val}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
        dispatch({
            type: SEARCH_USER,
            payload: response.data.items
        })
        return;
    }

    /**
     * Clears users state
     */
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        });
    }

    return (<GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
        }}>
            {props.children}    
    </GithubContext.Provider>)
}
export default GithubState;