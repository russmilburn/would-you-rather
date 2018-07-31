import React from 'react';
import PropTypes from "prop-types";

const ResultOptionView = ({votes, total, option, isSelected, percent} ) => {
  let cssTag = 'questionOption';
  if (isSelected){
    cssTag = 'questionOptionSelected badge'
  }

  return (
    <div className={cssTag}>
      <p>Would you rather {option}</p>
      <div className='percentBarBoarder'>
        <div className='percentBar' style={{width: `${percent}%`}}>
          <span className='percentNumber'>{percent}%</span>
        </div>
      </div>
      <p>{votes} out of {total} votes</p>
    </div>
  )
};

ResultOptionView.propTypes = {
  votes: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default ResultOptionView;

