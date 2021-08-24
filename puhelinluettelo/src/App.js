import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Components/Persons'
import FilterForm from './Components/FilterForm'
import NewPersonForm from './Components/NewPersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const addNewPerson = ( event ) => {
    
    event.preventDefault()
    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
      } else {
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
          show : true
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }   
    })
  }
    
  const handleNameChange = ( event ) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    
    event.preventDefault()
    setFilterText(event.target.value)
    console.log('filtertext ', filterText)
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
          <Persons persons = {persons}/>
        </ul>
    </div>
    </div>
  )
}


export default App