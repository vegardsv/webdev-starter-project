import React from 'react'
import { connect } from 'react-redux'
import { commands } from '../modules/persons'
import { selectors } from '../modules/persons'
import { Link } from 'react-router-dom'
import Loading from '../components/loading'

class Persons extends React.Component {
  componentDidMount() {
    this.props.fetchPersons()
  }

  render() {
    if (this.props.persons.length == 0) {
      return <Loading />
    }

    return (
      <div>
        <h1>Persons</h1>
        <label>
          Filter:<input
            value={this.props.filter}
            onChange={this.props.changeFilter}
            type="text"
          />
        </label>
        <ul>
          {this.props.persons &&
            this.props.persons
              .filter(
                x =>
                  x.name
                    .toUpperCase()
                    .indexOf(this.props.filter.toUpperCase()) != -1
              )
              .map(person =>
                <li key={person.id}>
                  <Link to={'person/' + person.id}>{person.name}</Link>
                </li>
              )}
        </ul>

        <p>
          Data from: SWAPI - The Star Wars API{' '}
          <a href="http://swapi.co/">swapi.co/</a>
        </p>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPersons: () => dispatch(commands.fetchPersons()),
  changeFilter: e => dispatch(commands.setPersonsFilter(e.target.value))
})

const mapStateToProps = state => ({
  persons: state.people.persons,
  filter: state.people.filter
})

Persons = connect(mapStateToProps, mapDispatchToProps)(Persons)

export default Persons
