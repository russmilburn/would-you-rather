import React from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import ResultOptionView from './ResultOptionView';

class QuestionResultView extends React.Component {

  render() {
    const {currentUser, question, total} = this.props;
    const optionOnePercent = ((question.optionOne.votes.length / total) * 100).toFixed(0);
    const optionTwoPercent = ((question.optionTwo.votes.length / total) * 100).toFixed(0);


    return (
      <div className='questionColumn'>
        <div className='question'>

          <h4 className='wouldYouRather'>Results</h4>


          <ResultOptionView votes={question.optionOne.votes.length}
                            total={total}
                            percent={optionOnePercent}
                            option={question.optionOne.text}
                            isSelected={question.optionOne.votes.indexOf(currentUser) !== -1 ? true : false}/>

          <ResultOptionView votes={question.optionTwo.votes.length}
                            total={total}
                            percent={optionTwoPercent}
                            option={question.optionTwo.text}
                            isSelected={question.optionTwo.votes.indexOf(currentUser) !== -1 ? true : false}/>
        </div>
      </div>
    )
  }
};

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