import React from 'react'
import { connect } from 'react-redux'
import { commands } from '../modules/persons'
import Loading from '../components/loading'

class Person extends React.Component {
  componentDidMount() {
    this.props.fetchPerson(this.props.match.params.id)
  }

  render() {
    if (this.props.isFetching) {
      return <Loading />
    }
    return (
      <div>
        <h1> Person </h1>
        <pre>
          {this.props.person && JSON.stringify(this.props.person, null, '\t')}
        </pre>

        <p>
          Data from: SWAPI - The Star Wars API{' '}
          <a href="http://swapi.co/">swapi.co/</a>
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPerson: id => dispatch(commands.fetchPerson(id))
})

const mapStateToProps = state => ({
  person: state.people.selected,
  isFetching: state.people.fetchingPerson
})

Person = connect(mapStateToProps, mapDispatchToProps)(Person)

export default Person
