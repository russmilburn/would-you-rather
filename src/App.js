import React, {Component, Fragment} from 'react';
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import AddQuestion from './components/AddQuestion'
import Leaderboard from './components/Leaderboard'
import QuestionCardView from "./components/question/QuestionCardView";
import Home from "./components/Home";
import Login from "./components/Login";

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
              ? <Login/>
              : <div>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' component={AddQuestion}/>
                <Route exact path='/question/:question_id' component={QuestionCardView}/>
                <Route exact path='/leaderboard' component={Leaderboard}/>
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
