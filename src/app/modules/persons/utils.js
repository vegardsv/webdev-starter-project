const getLastId = url => url.slice(0, -1).split('/').pop()

const mapPersonList = data =>
  data.results.map(person => ({
    name: person.name,
    id: getLastId(person.url)
  }))

export default {
  getLastId,
  mapPersonList
}
