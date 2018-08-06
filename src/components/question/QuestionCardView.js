import React from 'react';
import {connect} from 'react-redux'

import QuestionResult from './QuestionResultView';
import QuestionView from './QuestionView'


const QUESTION_STATE = 1;
const RESULT_STATE = 2;

class QuestionCardView extends React.Component {

  constructor(){
    super();

    this.viewStateHandler = this.changeToResultView.bind(this);
  }

  state = {
    cardState: QUESTION_STATE,
    displayResult: false,
  };

  componentWillMount(){
    const {userVotes, currentUser} = this.props;
    if (userVotes.indexOf(currentUser) > -1){
      this.changeToResultView();
    }else{
      this.changeToQuestionView();
    }
  }


  changeView(viewState){
    this.setState(()=>({
      cardState: viewState,
    }))
  }

  changeToResultView(){
    this.changeView(RESULT_STATE);
  }

  changeToQuestionView(){
    this.changeView(QUESTION_STATE)
  }


  render() {
    const {question_id, user} = this.props;
    const {cardState} = this.state;

    return (
      <div>
        <div className='questionContainer'>
          <h3 className='questionHeader'>{user.name} asks:</h3>

          <div className='previewColumn'>
            <div className='profileDiv'>
              <img src={user.avatarURL} height={100} width={100} alt={user.name}/>
            </div>
            {
              cardState === QUESTION_STATE
                ? <QuestionView question_id={question_id} viewStateHandler={this.viewStateHandler}/>
                : cardState === RESULT_STATE
                ? <QuestionResult question_id={question_id}/>
                : null
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users, currentUser}, props) {
  const {question_id} = props.match.params;
  let userVotes = questions[question_id].optionOne.votes.concat(questions[question_id].optionTwo.votes);
  
  return {
    user: users[questions[question_id].author],
    question_id,
    userVotes,
    currentUser
  }
}




export default connect(mapStateToProps)(QuestionCardView)
