require('../css/base.css')

import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { counterReducer } from './reducer/counterReducer'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { createStore } from 'redux'
import Counter from './components/counter'
import About from './components/about'
import Home from './components/home'

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
      </ul>
    </nav>
  </header>

const Main = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/about" component={About} />
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
