import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/counterActions'

let Counter = ({ increment, decrement, num }) =>
  <div>
    <input value={num} type="text" />
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>
  </div>

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement())
})

const mapStateToProps = state => ({
  num: state
})

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
