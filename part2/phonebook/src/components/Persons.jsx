function Persons ({ persons, filterKeyword, filteredPersons }) {

  return (
    <div>{
      ((filterKeyword !== '' && filterKeyword !== null && filterKeyword !==
        undefined) ? filteredPersons : persons).map(
        person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons