import {
  _saveQuestionAnswer,
  _saveQuestion
} from "../services/DataAPI";


export function saveQuestionAnswer({authedUser, qid, answer}) {
  return _saveQuestionAnswer({authedUser, qid, answer})
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

