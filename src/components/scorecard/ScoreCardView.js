import React from 'react'
import PropTypes from 'prop-types';
import './scoreCardStyle.css'

class ScoreCardView extends React.Component {
  render() {
    const {user, numQuestions, numAnswered, total} = this.props;

    return (
      <div className='scoreCardContainer'>
        <div className='columnA'>
          <div className='scoreCardProfile'>
          <img src={user.avatarURL} height={100} width={100} alt={user.name}/>
          </div>
        </div>
        <div className='columnB'>

          <div className='scoreCardContent'>
            <h3 className='scoreCardName'>{user.name}</h3>
            <p>Questions answered: {numAnswered}</p>
            <hr className='line'/>
            <p>Questions created: {numQuestions}</p>
          </div>
        </div>
        <div className='columnC'>
          <div>
            <h4 className='scoreHeader'>Score</h4>
            <div className='scoreContainer'>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

ScoreCardView.propTypes = {
  user: PropTypes.object.isRequired,
  numQuestions: PropTypes.number.isRequired,
  numAnswered: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ScoreCardView