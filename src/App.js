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
    loading: false
  }

  searchUsers = async val => {
    this.setState({loading: true});
    const response = await axios.get(`${process.env.REACT_APP_GIT_BASE_URL}search/users?q=${val}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
    this.setState({ users: response.data.items, loading: false })
    return;
  }

  clearUsers = () => {
    this.setState({users:[]})
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Git Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert />
          <Search searchUsers={this.searchUsers} showClear={(this.state.users.length > 0)?true:false} clearUsers={this.clearUsers}/>
          <Users userData={this.state.users} loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}

export default App;
