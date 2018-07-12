export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const LOGOUT = 'LOGOUT';


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

export function logout(){
  return {
    type:LOGOUT,
  }
}
