import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import PollView from './PollView';
import Main from './Main';
import CreatePoll from './CreatePoll';

function Routeall() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Main} />
        <Route path="/polls" component={PollView} />
        <Route path="/createpoll" component={CreatePoll} />
       
  

      </div>
    </Router>
  );
}

export default Routeall;