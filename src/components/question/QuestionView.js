import React from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from "../../actions/questions";
import PropTypes from 'prop-types';

class QuestionView extends React.Component {

  state = {
    option: '',
  };

  onChange(e) {
    const option = e.currentTarget.id;
    this.setState({
      option,
    })
  }


  handleSubmit(e) {
    e.preventDefault();
    const {dispatch, question_id, currentUser, viewStateHandler} = this.props;
    const {option} = this.state;
    dispatch(handleAnswerQuestion(
      currentUser,
      question_id,
      option
    ));

    viewStateHandler();
  }

  render() {

    const {question} = this.props;
    const {option} = this.state;

    return (
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
    )
  }
}

function mapStateToProps({questions, users, currentUser}, {question_id, viewStateHandler}) {
  // const {question_id} = props.match.params;
  return {
    currentUser: currentUser,
    user: users[questions[question_id].author],
    question_id,
    viewStateHandler,
    question: questions[question_id],
  }
}

QuestionView.propTypes = {
  viewStateHandler:PropTypes.func.isRequired,
  question_id:PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(QuestionView)