import React from 'react'
import {connect} from 'react-redux';

import QuestionPreview from './QuestionPreview';
// import {currentUser} from "../reducers/users";

class QuestionsListView extends React.Component {
  render() {
    const {questionList} = this.props;

    const unanswered = questionList.filter(q => q.isAnsweredByCurrentUser === false);
    const answered = questionList.filter(q => q.isAnsweredByCurrentUser === true);
    return (
      <div>
        <h3>Unanswered</h3>
        <div>
        {
          unanswered.map((item) => (
            <QuestionPreview key={item.question.id} question={item.question} user={item.user}/>
          ))
        }
        </div>
        <h3>answered</h3>
        <div>
          {
            answered.map((item) => (
              <QuestionPreview key={item.question.id} question={item.question} user={item.user}/>
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users, currentUser}) {

  let isAnswered;
  const user = users[currentUser];

  const data = {
    questionList: Object.keys(questions).map((key) => {
      isAnswered = questions[key].optionOne.votes.includes(user.id);
      if (!isAnswered){
        isAnswered = questions[key].optionTwo.votes.includes(user.id);
      }
      return {
        question: questions[key],
        user: users[questions[key].author],
        isAnsweredByCurrentUser: isAnswered,
      }
    })
  };
  return data
}

export default connect(mapStateToProps)(QuestionsListView);