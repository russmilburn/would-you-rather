import {GET_ALL_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION} from "../actions/actionTypes";

export function questions(state = {}, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS: {
      return {
        ...state,
        ...action.questions,
      };
    }
    case ANSWER_QUESTION: {
      let question_id = action.question_id;
      let answer = action.answer;
      return {
        ...state,
        [question_id]: {
          ...state[question_id],
          [answer]: {
            ...state[question_id][answer],
            votes: state[question_id][answer].votes.concat(action.authedUser),
          }
        }
      };
    }
    case ADD_QUESTION: {
      return {
        ...state,
        [action.question.id]: action.question,
      };
    }
    default:
      return state;
  }
}