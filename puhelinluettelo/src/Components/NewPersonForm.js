import React from 'react'


const NewPersonForm = ({addNewPerson, newName, handleNameChange, newNumber, handleNumberChange}) =>  {
    return(
        <form onSubmit={addNewPerson}>
            <div>
                <p>
                    name: <input
                    name = {newName}
                    onChange={handleNameChange}/>
                </p>
            </div>
            <div> 
                <p>
                    number: <input
                    number = {newNumber}
                    onChange = {handleNumberChange}/>
                </p>
            </div>
            <button type="submit">add</button>
        </form>
    )
}


export default NewPersonForm