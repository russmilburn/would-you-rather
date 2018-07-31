import React from 'react'
import {Link} from 'react-router-dom'
import UserProfile from '../profile/UserProfile';

import './navStyle.css'

class NavigationView extends React.Component {

  render() {
    return (
      <div className='header'>
        <div className='navContainer'>
          <div>
            <Link to='/'><p className='nav tab'>Home</p></Link>
            <Link to='/add'><p className='nav tab'>Add Question</p></Link>
            <Link to='/leaderboard'><p className='nav tab'>Leader board</p></Link>
          </div>
          <div className='currentUserProfile'>
            <UserProfile/>
          </div>
        </div>
        <div className='navLine'/>
      </div>
    )
  }
}

export default NavigationView