import React from 'react'
import {connect} from 'react-redux'
import './loginStyles.css';

import {setCurrentUser} from "../../actions/users";

class LoginView extends React.Component {

  onSelectUser = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(setCurrentUser(e.target.value))
  };

  render() {
    const {users} = this.props;
    return (
      <div className='contentContainer'>
        <div className='loginContainer'>
          <div className='loginHeaderContainer'>
            <h3 className='login'>Welcome to the Would You Rather App</h3>
            <h5 className='login'>Please select a user to login</h5>
          </div>


          <div className='imageContainer'>
            <img src='/assets/images/logo.svg' height={200} width={200} alt='logo'/>
          </div>

          <h4 className='login'>Sign in</h4>
          <div className='imageContainer'>
            <div className='selectDiv'>
              <select defaultValue='none' onChange={(e) => {
                this.onSelectUser(e)
              }}>
                <option value='none' disabled='true' key='none'>Select User</option>
                {
                  users.map((user) => (
                    <option value={user.id} key={user.id}>{user.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(LoginView)
