import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users
    return (
      <div>
        <ul>
          Users!
          {users.map(user => <li>{user.username}</li>)}
        </ul>
        <ul>
          User Count!
          <h1>{this.props.userCount}</h1>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
