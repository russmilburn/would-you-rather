import React from 'react';
import PropTypes from 'prop-types';
import './questionStyle.css'
import {Link} from 'react-router-dom'


const QuestionPreview = ({question, user}) => {

  return (
    <div>
      <div className='questionContainer'>
        <h3 className='questionHeader'>{user.name} asks:</h3>

        <div className='previewColumn'>
          <div className='profileDiv'>
            <img src={user.avatarURL} height={100} width={100} alt={user.name}/>
          </div>

          <div className='questionColumn'>
            <div className='question'>
            <h4 className='wouldYouRather'>Would you rather ...</h4>
            <p>{question.optionOne.text}</p>
              <Link to={`/question/${question.id}`} className='viewPollBtn'>View Poll</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

QuestionPreview.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default QuestionPreview;