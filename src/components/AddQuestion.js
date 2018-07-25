import React from 'react'
import {connect} from 'react-redux';

class AddQuestion extends React.Component{

  state = {
    optionOne: '',
    optionTwo: '',
  };


  render(){
    return(
      <div>
        <h2>Create New Question</h2>

        <p>Complete the question:</p>

        <h3>Would you rather</h3>

        <input type='text' placeholder='Enter option one here'/>

        <h3>or</h3>

        <input type='text' placeholder='Enter option two here'/>

        <button className='viewPollBtn'>Submit</button>
      </div>
    )
  }
}

function mapStateToProps({}) {
 return {
 }
}

export default connect(mapStateToProps)(AddQuestion);