import React from 'react'
import UserProfile  from './UserProfile';
import Question  from './Question';

class Home extends React.Component{



  render(){
    return(
      <div>
        <UserProfile/>
        <Question/>
      </div>
    )
  }
}

export default Home;