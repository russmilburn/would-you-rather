import {saveQuestionAnswer, saveQuestion} from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading'
import {updateUsersQuestions} from "./users";

export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';



export function getAllQuestions(questions) {
  return {
    type : GET_ALL_QUESTIONS,
    questions,
  }
}

export function answerQuestion(authedUser, question_id, answer){
  return {
    type: ANSWER_QUESTION,
    authedUser,
    question_id,
    answer,
  }
}

export function addQuestion(question){
  return{
    type: ADD_QUESTION,
    question,
  }
}


export function handleAnswerQuestion(currentUser, question_id, answer) {
  return (dispatch) => {
    dispatch(answerQuestion(currentUser, question_id, answer));
    return saveQuestionAnswer({
      authedUser:currentUser,
      qid: question_id,
      answer})
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e);
        dispatch(answerQuestion(currentUser, question_id, answer));
        alert('The was an error answering the question. Try again.')
      })
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) =>{
    const {currentUser} = getState();

    dispatch(showLoading());
    return saveQuestion({
      optionOneText:optionOne,
      optionTwoText:optionTwo,
      author: currentUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(updateUsersQuestions(question));
    })
      .then(() => dispatch(hideLoading()))
  }
}