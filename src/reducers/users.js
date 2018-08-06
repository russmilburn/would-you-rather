import {GET_ALL_USERS, LOGOUT, SET_CURRENT_USER, UPDATE_USER_QUESTIONS} from "../actions/actionTypes";
import {ANSWER_QUESTION} from "../actions/actionTypes";

export function users(state = {}, action) {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...action.users
      };
    }
    case UPDATE_USER_QUESTIONS: {
      let user = action.question.author;
      let id = action.question.id;
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat([id]),
        }
      };
    }
    case ANSWER_QUESTION: {
      let user = action.authedUser;
      let id = action.question_id;
      return {
        ...state,
        [user]: {
          ...state[user],
          answers:{
            ...state[user].answers,
            [id]:action.answer,
          }
        }
      };
    }
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