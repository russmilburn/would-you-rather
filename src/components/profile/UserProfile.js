import React from 'react'
import {connect} from 'react-redux'
import {logout} from "../../actions/users";
import {Link} from 'react-router-dom'

import './profileStyle.css';


const UserProfile = ({logout, user: {name, avatarURL}}) => (
  (
    <div className='profileContainer'>
      <p className='profileTitle'>Hello {name}</p>
      <img src={avatarURL} height={20} width={20} alt={name}/>
      <Link to='/' onClick={() => logout()}><p className='nav tab'>Logout</p></Link>
    </div>
  )
);

const mapDispatchToProps = dispatch =>({
  logout : () => dispatch(logout())
});

function mapStateToProps({currentUser, users}) {
  return {
    user: users[currentUser]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);