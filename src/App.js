import React, {Component, Fragment} from 'react';
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import AddQuestion from './components/AddQuestion'
import QuestionPage from './components/QuestionPage'
import Leaderboard from './components/Leaderboard'
import Home from "./components/Home";
import Login from "./components/Login";

import {handleInitialData} from "./actions/appInit";

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
            <LoadingBar/>

        <div>
          { this.props.currentUser === true
            ? <Login/>
            : <Home/>
          }


          <Route path='/add' component={AddQuestion}/>
          <Route path='/question/:question_id' component={QuestionPage}/>
          <Route path='/leaderboard' component={Leaderboard}/>
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
