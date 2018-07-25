import {
  _saveQuestionAnswer
} from "../services/DataAPI";


export function saveQuestionAnswer({authedUser, qid, answer}) {
  return _saveQuestionAnswer({authedUser, qid, answer})
}