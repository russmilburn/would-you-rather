import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading'
import {users, currentUser} from './users';
import {questions} from "./questions";

export default combineReducers({
  users,
  currentUser,
  questions,
  loadingBar: loadingBarReducer
})