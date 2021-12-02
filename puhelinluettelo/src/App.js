import React, { useState, useEffect } from 'react'
import Persons from './Components/Persons'
import FilterForm from './Components/FilterForm'
import NewPersonForm from './Components/NewPersonForm'
import personService from './services/personService'
import Notification from './Components/Notification'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState('')
  const [ notificationType, setNotificationType ] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response) 
    })
  }, [])

  const createInteger = () => {
      return Math.floor(Math.random() * 100000);
  }
 
  const showNotification = () => {
    console.log('Klick')
    setTimeout(() => {
      setNotificationMessage(null)
      setNotificationType(null)
    }, 5000)
  }

  const handlePersonUpdate = (id) => {
    if (window.confirm(`${newName} is already added to phonebook. Update phone number?`)) {
      const updatedPersonObject = {
        id: id,
        name: newName,
        number: newNumber
      }
      personService.update(id, updatedPersonObject)
        .then(response => {
        setPersons(persons.map(person => person.id !== id ? person : response.data))
        setNotificationMessage(`${newName} updated!`)
        setNotificationType('success')
      }).catch(error => {
        setNotificationMessage(`${newName} already removed from server!`)
        setNotificationType('error')
      })
      showNotification()
    }
  }

  const addNewPerson = ( event ) => {
    event.preventDefault()
    if (persons.find(person => (person.name === newName))) {
      const persID = persons.find(p => p.name === newName).id
      console.log('AddNewPerson persID.id', persID)
      handlePersonUpdate(persID) // find persons id
      event.target.reset()
    } else {
      const newId = createInteger()
    const personObject = {
        id: newId,
        name: newName,
        number: newNumber
      }
      personService.create(personObject)
      .then(response => {
        console.log("Logging pers object" , personObject)
        console.log('Logging db', persons.find(p => p.name === newName))
        setNotificationMessage(`${newName} added!`)
        setNotificationType('success')
        setPersons([...persons, personObject])
      }).catch(error => {       
        console.log('THIS IS THE ERROR:')
        console.log(error.response.data)
        console.log("Tämä:" , error.response.data.error)
        let s = error.response.data.error
        setNotificationMessage(`Input error: \n${s}`)
        setNotificationType('error') 
    })
    event.target.reset()
    showNotification()
    }
  }
  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    console.log('Person to delete', personToDelete, 'id', personToDelete.id)
    if (window.confirm(`Delete contacts for ${personToDelete.name}?`)) {
    personService.deletePerson(id)
    .then(response=> {
      setPersons(persons.filter(p => id !== p.id))
      setNotificationMessage(`${personToDelete.name} deleted!`)
      setNotificationType('success')
      showNotification()
    })
    .catch(error => {
      setNotificationMessage(`${personToDelete.name} already removed from server!`)
      setNotificationType('error')
    })
    showNotification()
  }
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
   
    <Notification message = {notificationMessage} notificationType = {notificationType} />
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