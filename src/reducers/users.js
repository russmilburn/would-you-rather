import {GET_ALL_USERS, LOGOUT, SET_CURRENT_USER, UPDATE_USER_QUESTIONS} from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...action.users
      };
    case UPDATE_USER_QUESTIONS:
      let user = action.question.author;
      let id = action.question.id;
      return {
        ...state,
        [user]:{
          ...state[user],
          questions : state[user].questions.concat([id]),
        }
      };
    default:
      return state;
  }
}

export function currentUser(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.id;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}