import { useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 1,
    },
  ])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [filterKeyword, setFilterKeyword] = useState('')

  function filterPersons (people, filteredCharacters) {
    return people.filter(
      (person) => person.includes(filteredCharacters))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons}
              setFilterKeyword={setFilterKeyword}
              filterPersons={filterPersons}/>
      <h3>Add a new person:</h3>
      <PersonForm persons={persons} setPersons={setPersons}
                  filterKeyword={filterKeyword}
                  setFilteredPersons={setFilteredPersons}
                  filterPersons={filterPersons}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filterKeyword={filterKeyword}
               filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App