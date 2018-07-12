import React from 'react'

class Question extends React.Component{
  render(){
    return(
      <div>

        <input type='radio' id='optionOne' name='rather'/>
        <label form='optionOne'>Select A</label>
        <input type='radio' id='optionTwo' name='rather'/>
        <label form='optionTwo'>Select B</label>


        <button>Submit</button>

      </div>
    )
  }
}

export default Question;