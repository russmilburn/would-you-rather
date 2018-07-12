import {GET_ALL_USERS, LOGOUT, SET_CURRENT_USER} from "../actions/users";

export function users(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...action.users
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