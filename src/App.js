import React, {Component, Fragment} from 'react';
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import NavigationView from './components/nav/NavigationView'
import LoginView from "./components/login/LoginView";

import QuestionsListView from './components/question/QuestionsListView';
import QuestionFormView from './components/question/QuestionFormView';
import LeaderBoardView from './components/leaderboard/LeaderBoardView';
import QuestionCardView from './components/question/QuestionCardView';

import {handleInitialData} from "./actions/appInit";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div>
            {this.props.currentUser === true
              ? <LoginView/>
              : <div>
                <NavigationView/>
                <div className='App-content'>
                  <Route exact path='/' component={QuestionsListView}/>
                  <Route exact path='/add' component={QuestionFormView}/>
                  <Route exact path='/question/:question_id' component={QuestionCardView}/>
                  <Route exact path='/leaderboard' component={LeaderBoardView}/>
                </div>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({currentUser}) {
  return {
    currentUser: currentUser === null
  }
}

export default connect(mapStateToProps)(App);
