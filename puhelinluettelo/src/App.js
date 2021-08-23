import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNewPerson = ( event ) => {
    event.preventDefault()
    console.log('add New Pers method', newName)
    persons.forEach(name => console.log(name))
    persons.forEach(person => {
        if (person.name === newName) {
          alert(`${newName} is already added to phonebook`)
        } else {
          const personObject = {
            name: newName,
            id: persons.length + 1,
          }
          setPersons(persons.concat(personObject))
        }
        setNewName('')
    })
  }

  const handleNameChange = ( event ) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <form onSubmit={addNewPerson}>
          <div>
            name: <input
              name = {newName}
              onChange={handleNameChange}/>
            <button type="submit">add</button>
          </div>
        </form>
      
      <h2>Numbers</h2>
        <div>
        <ul>
          {
          persons.map(person =>
             <li key = {person.id}>{person.name}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App