import React, { useState, useEffect } from 'react'
import Persons from './Components/Persons'
import FilterForm from './Components/FilterForm'
import NewPersonForm from './Components/NewPersonForm'
import personService from './services/personService'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addNewPerson = ( event ) => {
    event.preventDefault()
    if (persons.find(person => (person.name === newName))) {alert(`${newName} is already added to phonebook`)}
    else {
      const personObject = {
          name: newName,
          number: newNumber,
        }
      personService.create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          
        })
      }
      setNewName('')
      setNewNumber('')  
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    console.log('Person to delete', personToDelete)
    if (window.confirm(`Delete contacts for ${personToDelete.name}?`)) {
    personService.deletePerson(id)
    .then(response=> {
      setPersons(persons.filter(p => id !== p.id))
    })
  }}

  const handleNameChange = ( event ) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilterText(event.target.value)
    persons.filter(p => !p.name.toLowerCase().includes(event.target.value.toLowerCase()))
      .map(p => p.show = false)
    persons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase()))
      .map(p => p.show = true)  
  }

  return (
  <div>
    <h2>Phonebook</h2>
        
    <NewPersonForm
      addNewPerson = {addNewPerson}         
      handleNameChange={handleNameChange} 
      handleNumberChange = {handleNumberChange}
      newNumber = {newNumber} 
      newName = {newName}
    /> 
    <FilterForm input={filterText} handleFilterChange={handleFilterChange} /> 
    
    <div>
      <h2>Numbers</h2>
        <ul>
          <Persons persons = {persons} deletePerson ={deletePerson} />
        </ul>
    </div>
    </div>
  )
}


export default App