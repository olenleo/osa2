import React from 'react'
import Person from './Person'


const Persons = ( {persons, deletePerson} ) => {
  
    const personsToShow = persons.filter(person => person.show)
    
    const rows = () => personsToShow.map(person =>
      <li key ={person.name}><Person person={person} deletePerson = {() => deletePerson(person.id)}/></li>)
    return (
        <div>
          {rows()}
        </div>
    )
  }
  export default Persons