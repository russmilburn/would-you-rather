import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../../actions/users";
import './profileStyle.css';

class UserProfile extends React.Component{

  logoutUser = (e) =>{
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(logout())
  };

  render(){
    const {user} = this.props;
    return(
      <div className='profileContainer'>
        <h2>Hello {user.name}</h2>
        <img src={user.avatarURL} height={20} width={20} alt={user.name}/>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps({currentUser, users}) {
  return {
    user: users[currentUser]
  }
}

export default connect(mapStateToProps)(UserProfile);