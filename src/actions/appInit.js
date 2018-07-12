import {_getUsers} from '../services/DataAPI';
import {getAllUsers} from "./users";
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData(){
  return (dispatch) =>{
    dispatch(showLoading());
    return _getUsers()
      .then((users) =>{




        dispatch(getAllUsers(users));
        dispatch(hideLoading())
      })
  }
}
