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

  async validateInput(e) {
    await this.onChange(e);
    this.isDisabled()
  }

  onChange = (e) => {
    e.preventDefault();
    const {value, id} = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {optionOne, optionTwo} = this.state;
    const {dispatch} = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState({
      optionOne: '',
      optionTwo: '',
      isDisabled: true,
      toHome: true,
    });
  };

  isDisabled() {
    const {optionOne, optionTwo} = this.state;
    if (optionOne !== '' && optionTwo !== '') {
      this.setState({
        isDisabled: false,
      });
    }
  }


  render() {
    const {isDisabled, toHome} = this.state;
    if (toHome) {
      return <Redirect to='/'/>
    }
    return (
      <div className='questionFormContainer'>
        <div className='questionFormHeader'>
          <h2 className='questionForm'>Create New Question</h2>
        </div>

        <div className='questionFormContent'>
          <p>Complete the question:</p>

          <h4 className='wouldYouRather'>Would you rather...</h4>

          <form onSubmit={this.handleSubmit}>

            <input className='addQuestion' id='optionOne' type='text' placeholder='Enter option one here'
                   onChange={(e) => {
                     this.validateInput(e)
                   }}/>

            <h4 className='qForm'>OR</h4>

            <input className='addQuestion' id='optionTwo' type='text' placeholder='Enter option two here'
                   onChange={(e) => {
                     this.validateInput(e)
                   }}/>

            <button className='viewPollBtn'
                    disabled={isDisabled}
                    type='submit'>Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}


export default connect()(QuestionFormView);