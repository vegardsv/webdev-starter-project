import React from 'react'
import { connect } from 'react-redux'
import { commands } from '../modules/counter'

let Counter = ({ increment, decrement, num }) =>
  <div>
    <input value={num} type="text" />
    <button onClick={increment}> + </button>
    <button onClick={decrement}> - </button>
  </div>

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(commands.increment()),
  decrement: () => dispatch(commands.decrement())
})

const mapStateToProps = state => ({
  num: state.counter.num
})

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
