import React from 'react'
import {connect} from 'react-redux'
import ScoreCardView from '../scorecard/ScoreCardView'

class LeaderBoardView extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        {users.map((item) => {
          return (
            <ScoreCardView user={item.user}
                           key={item.user.id}
                           numQuestions={item.numQuestions}
                           numAnswered={item.numAnswered}
                           total={item.total}/>
          )
        })
        }
      </div>

    )
  }
}


function mapStateToProps({users}) {

  let list = Object.keys(users).map((key) => {
    const user = users[key];
    const numAnswered = Object.keys(user.answers).length;
    const numQuestions = user.questions.length;
    const total = numAnswered + numQuestions;
    return {
      user,
      numQuestions,
      numAnswered,
      total,
    }
  });

  return {
    users: list.sort((a,b) => {
      return b.total - a.total
    })
  }
}


export default connect(mapStateToProps)(LeaderBoardView);