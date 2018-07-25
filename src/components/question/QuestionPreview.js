import React from 'react';
import PropTypes from 'prop-types';
import ProfilePicture from './ProfilePicture';


const QuestionPreview = ({question, user}) =>{

  // const {}

  return (
    <div className='questionContainer'>

      <h3>{user.name} asks:</h3>

      <div>

      </div>

      <h4>Would you rather</h4>

      <ProfilePicture src={user.avatarURL} height={100} width={100}/>

      <p>{question.optionOne.text}</p>

      <button>View Poll</button>
      {/*<input type='radio' id='optionOne' name='rather'/>*/}
      {/*<label form='optionOne'>Select A</label>*/}
      {/*<input type='radio' id='optionTwo' name='rather'/>*/}
      {/*<label form='optionTwo'>Select B</label>*/}


      {/*<button>Submit</button>*/}

    </div>
  )
}
// class QuestionPreview extends React.Component{
//   render(){
//     return(
//
//     )
//   }
// }

QuestionPreview.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default QuestionPreview;