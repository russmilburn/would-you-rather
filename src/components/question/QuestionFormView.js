import React from 'react'
import {connect} from 'react-redux';
import {handleAddQuestion} from "../../actions/questions";
import {Redirect} from 'react-router-dom';

class QuestionFormView extends React.Component {

  state = {
    optionOne: '',
    optionTwo: '',
    isDisabled: true,
    toHome: false,
  };


  onChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    const id = e.target.id;
    this.setState(() => ({
      [id]: text,
    }));

    this.isDisabled();
  };

  handleSubmit = (e) =>{
    e.preventDefault();
    const {optionOne, optionTwo} = this.state;
    const {dispatch} = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState((currentState) => ({
      optionOne:'',
      optionTwo:'',
      isDisabled: true,
      toHome: true,
    }));
  };

  isDisabled() {
    const {optionOne, optionTwo} = this.state;
    if (optionOne !== '' && optionTwo !== ''){
      this.setState(() => ({
        isDisabled: false,
      }))
    }
  }


  render() {
    const {isDisabled, toHome} = this.state;
    if (toHome === true){
      return <Redirect to='/'/>
    }
    return (
      <div>
        <h2>Create New Question</h2>

        <p>Complete the question:</p>

        <h3>Would you rather</h3>

        <input id='optionOne' type='text' placeholder='Enter option one here' onChange={(e) => {
          this.onChange(e)
        }}/>

        <h3>or</h3>

        <input id='optionTwo' type='text' placeholder='Enter option two here' onChange={(e) => {
          this.onChange(e)
        }}/>

        <button className='viewPollBtn'
                disabled={isDisabled}
                onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}


export default connect()(QuestionFormView);