require('../css/base.css')

import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Counter from './containers/counter'
import About from './containers/about'
import Home from './containers/home'
import Persons from './containers/persons'
import Person from './containers/person'
import counterReducer from './modules/counter'
import personReducer from './modules/persons'

const store = createStore(
  combineReducers({
    counter: counterReducer,
    people: personReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const App = () =>
  <div>
    <Header />
    <Main />
  </div>

const Header = () =>
  <header>
    <h1> webdev starter pack </h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>
    </nav>
  </header>

const Main = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/about" component={About} />
      <Route path="/people" component={Persons} />
      <Route path="/person/:id" component={Person} />
    </Switch>
  </main>

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root_element')
)
