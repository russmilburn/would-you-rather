import React from 'react'
import {Link} from 'react-router-dom'
import UserProfile from '../profile/UserProfile';

import './navStyle.css'

class NavigationView extends React.Component{

  render(){
    return(
      <div className='navContainer'>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Question</Link>
        <Link to='/leaderboard'>Leader board</Link>
        <UserProfile/>
      </div>
    )
  }
}

export default NavigationView