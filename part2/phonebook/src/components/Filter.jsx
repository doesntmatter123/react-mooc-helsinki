function Filter ({
  setFilterKeyword,
  setFilteredPersons,
  persons,
  filterPersons,
}) {

  const handleFilterChange = (event) => {
    if (!event.target.value || event.target.value.trim() === '') {
      setFilterKeyword('')
      console.log('filter off')
    } else {
      console.log('filter on')
      const filteredCharacters = event.target.value
      setFilterKeyword(filteredCharacters)
      setFilteredPersons(filterPersons(persons, filteredCharacters))
    }
  }

  return (
    <input name={'filter'} onChange={handleFilterChange}/>
  )

}

export default Filter