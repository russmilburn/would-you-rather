import {_getUsers, _getQuestions} from '../services/DataAPI';
import {getAllUsers} from "./users";
import {getAllQuestions} from "./questions";
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData(){
  return (dispatch) =>{
    dispatch(showLoading());
    return Promise.all([
      _getUsers(),
      _getQuestions()])
      .then(([users, questions]) =>{
        dispatch(getAllUsers(users));
        dispatch(getAllQuestions(questions));
        dispatch(hideLoading())
      })
  }
}
