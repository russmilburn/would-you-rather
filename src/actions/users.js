import {GET_ALL_USERS, UPDATE_USER_QUESTIONS, SET_CURRENT_USER, LOGOUT} from "./actionTypes";


export function setCurrentUser(id) {
  return {
    type: SET_CURRENT_USER,
    id: id,
  }
}

export function getAllUsers(users) {
  return {
    type : GET_ALL_USERS,
    users: users,
  }
}

export function updateUsersQuestions(question){
  return {
    type: UPDATE_USER_QUESTIONS,
    question
  }
}

export function logout(){
  return {
    type:LOGOUT,
  }
}
