import React from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from "../actions/questions";
import QuestionResult from "./question/QuestionResult";

class QuestionView extends React.Component {
  state = {
    option: '',
  };

  onChange(e) {

    let option = e.currentTarget.id;
    this.setState(() => ({
      option: option,
    }))
  }


  handleSubmit(e) {
    e.preventDefault();
    const {dispatch, question_id, currentUser} = this.props;
    const {option} = this.state;
    dispatch(handleAnswerQuestion(
      currentUser,
      question_id,
      option
    ))
  }

  render() {

    const {question, user, question_id} = this.props;
    const {option} = this.state;
    return (
      <div>
        <div className='questionContainer'>
          <h3 className='questionHeader'>{user.name} asks:</h3>
          <div className='previewColumn'>
            <div className='profileDiv'>
              <img src={user.avatarURL} height={100} width={100}/>
            </div>
            <div className='questionColumn'>
              <div className='question'>
                <h4 className='wouldYouRather'>Would you rather ...</h4>

                <p><input type='radio' id='optionOne' name='rather' onChange={(e) => {
                  this.onChange(e);
                }}/>
                  <label form='optionOne'>{question.optionOne.text}</label></p>
                <p><input type='radio' id='optionTwo' name='rather' onChange={(e) => {
                  this.onChange(e);
                }}/>
                  <label form='optionTwo'>{question.optionTwo.text}</label></p>
                <button className='viewPollBtn'
                        onClick={(e) => {
                          this.handleSubmit(e);
                        }} disabled={option === ''}>Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <QuestionResult questionId={question_id}/>
      </div>
    )
  }
}

function mapStateToProps({questions, users, currentUser}, props) {
  const {question_id} = props.match.params;
  return {
    currentUser: currentUser,
    user: users[questions[question_id].author],
    question_id,
    question: questions[question_id],
  }
}

export default connect(mapStateToProps)(QuestionView)