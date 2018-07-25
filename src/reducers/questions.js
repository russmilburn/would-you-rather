import {GET_ALL_QUESTIONS, ANSWER_QUESTION} from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
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
    default:
      return state;
  }
}