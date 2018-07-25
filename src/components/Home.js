import React from 'react'
import QuestionsList  from './QuestionsList';
import NavigationView  from './nav/NavigationView';

class Home extends React.Component{



  render(){
    return(
      <div>
        <NavigationView/>
        <QuestionsList/>
      </div>
    )
  }
}

export default Home;