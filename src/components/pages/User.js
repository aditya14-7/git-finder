import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>{this.props.match.params.username}</div>
    )
  }
}

export default User