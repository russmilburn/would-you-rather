import React from 'react'
import QuestionsList  from './QuestionsListView';
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