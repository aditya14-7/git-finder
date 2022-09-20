import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  }

  /**
   * Makes API call to fetch user by name
   * 
   * @param {*} val 
   * @returns 
   */
  searchUsers = async val => {
    this.setState({loading: true});
    const response = await axios.get(`${process.env.REACT_APP_GIT_BASE_URL}search/users?q=${val}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
    this.setState({ users: response.data.items, loading: false })
    return;
  }

  /**
   * Clears users state
   */
  clearUsers = () => {
    this.setState({users: []});
  }

  /**
   * Initializes Alert state
   * @param {*} alert 
   */
  setAlert = (alert) => {
    this.setState({alert: {
      msg: alert.msg,
      type: alert.type
    }});
    setTimeout(() => {
      this.setState({alert: null});
    }, 3000);
  }

  /**
   * Renders App component (lifecycle method)
   * @returns 
   */
  render() {
    const {alert, users, loading} = this.state;
    return (
      <div className='App'>
        <Navbar title='Git Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert alert={alert}/>
          <Search searchUsers={this.searchUsers} showClear={(users.length > 0) ? true : false} clearUsers={this.clearUsers} setAlert={this.setAlert}/>
          <Users userData={users} loading={loading}/>
        </div>
      </div>
    );
  }
}

export default App;
