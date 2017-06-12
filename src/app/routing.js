import Counter from './components/counter'
import About from './components/About'
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

const Routing = () => (
    <Router history={hashHistory}>
      <Route path="/about" component={About}/>
      <Route path="/counter" component={Counter}/>
    </Router>
  )

export default Routing
