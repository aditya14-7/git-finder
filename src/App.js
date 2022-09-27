import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import GithubState from './contexts/github/GithubState';

class App extends Component {
  state = {
    user: {},
    alert: null,
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
    const {alert} = this.state;
    return (
      <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Git Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert}/>
            <Routes>

              <Route exact path='/' element={<Fragment>
                <Search setAlert={this.setAlert}/>
                <Users/>
              </Fragment>}>
              </Route>
              
              <Route path='/about' element={<About/>}>
              </Route>
            
            </Routes>
          </div>
        </div>
      </Router>
      </GithubState>
    );
  }
}

export default App;