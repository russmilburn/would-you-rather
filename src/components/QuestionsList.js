import React from 'react'
import {connect} from 'react-redux';

import QuestionPreview from './question/QuestionPreview';

class QuestionsList extends React.Component{
  render(){
    return(
      <div>Question Page
        {
          this.props.data.map((item) =>(
            <QuestionPreview key={item.question.id} question={item.question} user={item.user} />
          ))
        }
      </div>
    )
  }
}

function mapStateToProps({questions, users}) {
  return {
    data: Object.keys(questions).map((key)=>{
      return {
        question:questions[key],
        user: users[questions[key].author]
      }
    }),
  }
}

export default connect(mapStateToProps)(QuestionsList);