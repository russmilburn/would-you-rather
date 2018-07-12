import React from 'react'
import {connect} from 'react-redux'

import {setCurrentUser} from "../actions/users";

class Login extends React.Component {

  onSelectUser = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(setCurrentUser(e.target.value))
  };

  render() {
    const {users} = this.props;
    return (
      <div>
        <h2>Please select a user to login</h2>
        <select defaultValue='none' onChange={(e) =>{this.onSelectUser(e)}}>

          <option value='none' disabled='true' key='none'>Select User</option>
          {
            users.map((user) => (
              <option value={user.id} key={user.id}>{user.name}</option>
            ))
          }
        </select>
      </div>
    )

  }
}

function mapStateToProps({users}) {
  return {
    users: Object.keys(users).map((item) => {
      return users[item];
    }),
  }
}

export default connect(mapStateToProps)(Login)
