import React from 'react'





const Country = ({ country, handleClick } ) => {
 
    console.log('Before CLICK! ', country)
    return (   <p> {country.name} {<button value={country.name} onClick={handleClick}>show</button>}</p>)

}

export default Country
