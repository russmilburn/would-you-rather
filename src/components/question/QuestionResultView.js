import React from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import ResultOptionView from './ResultOptionView';

const getPercentage = (option, total) =>{
  return ((option.votes.length)/ total * 100).toFixed(0);
};

const questionStats = (option, total, currentUser) => ({
 votes: option.votes.length,
  total: total,
  percent : getPercentage(option, total),
  option : option.text,
  isSelected: option.votes.indexOf(currentUser) !== -1 ? true : false
});


const QuestionResultView = ({currentUser, question: {optionOne, optionTwo}, total}) => {
  return (
    <div className='questionColumn'>
      <div className='question'>

        <h4 className='wouldYouRather'>Results</h4>

        <ResultOptionView questionStats={questionStats(optionOne, total, currentUser)}/>
        <ResultOptionView questionStats={questionStats(optionTwo, total, currentUser)}/>

      </div>
    </div>
  )
}

function mapStateToProps({questions, currentUser}, {question_id}) {
  let total = questions[question_id].optionOne.votes.length +
    questions[question_id].optionTwo.votes.length;
  return {
    currentUser,
    question: questions[question_id],
    total: total
  }
}

QuestionResultView.propTypes = {
  question_id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(QuestionResultView);