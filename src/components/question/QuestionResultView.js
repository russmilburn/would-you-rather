import React from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";

class QuestionResult extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {currentUser, question} = this.props;


    return (
      <div className='questionColumn'>
        <div className='question'>

          <h4 className='wouldYouRather'>Results</h4>

          <p>{question.optionOne.text}</p>
          {question.optionOne.votes.indexOf(currentUser) !== -1 ?
            <p>{currentUser}</p> : null}
          <p>{question.optionOne.votes.length}</p>
          <p>{question.optionTwo.text}</p>
          {question.optionTwo.votes.indexOf(currentUser) !== -1 ?
            <p>{currentUser}</p> : null}
          <p>{question.optionTwo.votes.length}</p>
        </div>
      </div>
    )
  }
};

function mapStateToProps({questions, currentUser}, {question_id}) {
  return {
    currentUser,
    question: questions[question_id],
  }
}

QuestionResult.propTypes = {
  question_id: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(QuestionResult);