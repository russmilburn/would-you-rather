import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading'
import {users, currentUser} from './users';

export default combineReducers({
  users,
  currentUser,
  loadingBar: loadingBarReducer
})