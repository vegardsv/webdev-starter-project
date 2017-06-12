import Counter from './components/counter'
import About from './components/About'
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

const Routing = () =>
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Counter} />
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
    </Router>
  </div>

export default Routing
