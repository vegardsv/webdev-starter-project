require('../css/base.css')

import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { counterReducer } from './reducer/counterReducer'
import Routing from './routing'
import { createStore } from 'redux'

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <div>
      <Routing />
    </div>
  </Provider>,
  document.getElementById('root_element')
)
