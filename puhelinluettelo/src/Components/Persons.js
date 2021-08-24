import React from 'react'
import Person from './Person'
const Persons = ( {persons}) => {
    const personsToShow = persons.filter(person => person.show)
    const rows = () => personsToShow.map(person =>
      <Person key={person.name} person={person} />)
    return (
        <div>
          {rows()}
        </div>
      
    
    )
  }
  export default Persons