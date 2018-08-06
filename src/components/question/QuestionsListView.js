import React from 'react'
import {connect} from 'react-redux';

import QuestionPreview from './QuestionPreview';

class QuestionsListView extends React.Component {

  state = {
    displayUnanswered: true,
  };

  onClick(e){
    e.preventDefault();
    const {id} = e.target;
    let b = id === 'unanswered' ? true : false;
    this.setState({
      displayUnanswered: b
    })
  }


  render() {
    console.log('render');
    const {unanswered, answered} = this.props;
    const {displayUnanswered} = this.state;
    const list = displayUnanswered ? unanswered : answered;
    const qList = list.sort((a, b) => {
      return b.question.timestamp - a.question.timestamp;
    });
    return (
      <div>
        <button id='unanswered'
                className={displayUnanswered ? 'qBtnFilterSelected' : 'qBtnFilter'}
                onClick={(e) =>(this.onClick(e))}>Unanswered</button>

        <button id='answered'
                className={displayUnanswered ? 'qBtnFilter' : 'qBtnFilterSelected'}
                onClick={(e) =>(this.onClick(e))}>Answered</button>
        <div>
          {
            qList.map((item) => (
              <QuestionPreview key={item.question.id} question={item.question} user={item.user}/>
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users, currentUser}) {

  const user = users[currentUser];
  let questionList = Object.keys(questions).map((key) => {
    let isAnswered = questions[key].optionOne.votes.includes(user.id);
    if (!isAnswered) {
      isAnswered = questions[key].optionTwo.votes.includes(user.id);
    }
    return {
      question: questions[key],
      user: users[questions[key].author],
      isAnsweredByCurrentUser: isAnswered,
    }
  });
  const unanswered = questionList.filter(q => q.isAnsweredByCurrentUser === false);
  const answered = questionList.filter(q => q.isAnsweredByCurrentUser === true);

  const data = {
    unanswered,
    answered
  };
  return data
}

export default connect(mapStateToProps)(QuestionsListView);