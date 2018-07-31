import React from 'react'
import {connect} from 'react-redux'
import ScoreCardView from '../scorecard/ScoreCardView'

class LeaderBoardView extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        {users.map((item) => {
          const numAnswered = Object.keys(item.answers).length;
          const numQuestions = item.questions.length;
          const total = numAnswered + numQuestions;
          return (
            <ScoreCardView user={item}
                           numQuestions={numQuestions}
                           numAnswered={numAnswered}
                           total={total}/>
          )
        })
        }
      </div>

    )
  }
}


function mapStateToProps({users}) {
  return {
    users: Object.keys(users).map((key) => {
      return users[key];
    })
  }
}


export default connect(mapStateToProps)(LeaderBoardView);