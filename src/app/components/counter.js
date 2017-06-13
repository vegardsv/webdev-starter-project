import React from 'react'
import { connect } from 'react-redux'
import { counterCommands } from '../modules/counter'

let Counter = ({ increment, decrement, num }) =>
  <div>
    <input value={num} type="text" />
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>
  </div>

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterCommands.increment()),
  decrement: () => dispatch(counterCommands.decrement())
})

const mapStateToProps = state => ({
  num: state.counter
})

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
