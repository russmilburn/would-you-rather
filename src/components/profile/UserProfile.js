import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../../actions/users";
import {Link} from 'react-router-dom'

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
        <p className='profileTitle'>Hello {user.name}</p>
        <img src={user.avatarURL} height={20} width={20} alt={user.name}/>
        <Link to='/' onClick={this.logoutUser}><p className='nav tab'>Logout</p></Link>
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