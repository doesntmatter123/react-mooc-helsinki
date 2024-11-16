/* eslint-disable react/prop-types */
import { useState } from 'react'

function PersonForm ({
  setPersons,
  persons,
  setFilteredPersons,
  filterKeyword,
  filterPersons,
}) {

  const [newPerson, setNewPerson] = useState({ name: '', number: '' })

  const handleInputChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.name]: event.target.value,
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!isPersonInfoValid(newPerson)) {
      alert('Cannot add to phonebook - personal info not complete')
      return
    }
    if (isPersonInfoUnique(newPerson)) {
      setPersons(
        (prevPersons) => {
          const updatedPersons = [
            ...prevPersons,
            { ...newPerson, id: persons.length + 1 }]
          if (filterKeyword && filterKeyword.trim() !== '') {
            setFilteredPersons(filterPersons(updatedPersons, filterKeyword))
          }
          return updatedPersons
        })
      setNewPerson({ name: '', number: '' })

    } else {
      alert('Name or number is already in the phonebook')
    }

  }

  function isPersonInfoUnique (personObject) {
    return !persons.some((person) => {
      return (
        person.number === personObject.number ||
        person.name === personObject.name)
    })
  }

  function isPersonInfoValid (person) {
    return (person.name.trim().length > 0 && person.number.trim().length > 0)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      name: <input name="name" onChange={handleInputChange}
                   value={newPerson.name}/>
      phone: <input name="number" onChange={handleInputChange}
                    value={newPerson.number}/>
      <button type="submit">add</button>
    </form>
  )
}

export default PersonForm