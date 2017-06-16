import React from 'react'
import { connect } from 'react-redux'
import { commands } from '../modules/persons'

class Person extends React.Component {
  componentDidMount() {
    this.props.fetchPerson(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <h1> Person </h1>
        <pre>
          {this.props.person && JSON.stringify(this.props.person, null, '\t')}
        </pre>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPerson: id => dispatch(commands.fetchPerson(id))
})

const mapStateToProps = state => ({
  person: state.people.selected
})

Person = connect(mapStateToProps, mapDispatchToProps)(Person)

export default Person
