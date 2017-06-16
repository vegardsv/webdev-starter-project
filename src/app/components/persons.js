import React from 'react'
import { connect } from 'react-redux'
import { commands } from '../modules/persons'
import { Link } from 'react-router-dom'
class Persons extends React.Component {
  componentDidMount() {
    this.props.fetchPersons()
  }

  render() {
    if (!this.props.persons) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <h1>Persons</h1>
        <ul>
          {this.props.persons &&
            this.props.persons.map(person =>
              <li><Link to={'person/' + person.id}>{person.name}</Link></li>
            )}
        </ul>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPersons: () => dispatch(commands.fetchPersons())
})

const mapStateToProps = state => ({
  persons: state.people.persons
})

Persons = connect(mapStateToProps, mapDispatchToProps)(Persons)

export default Persons
