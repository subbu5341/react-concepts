import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../home'
import projectList from '../components/projectList'
class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home }/>
          <Route path="/projectList/:id" component={ projectList }/>
        </div>
      </Router>
    )
  }
}

export default Routes;
