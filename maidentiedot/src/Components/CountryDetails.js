import React from 'react'

const CountryDetails = ({ country }) => {
    console.log("Sisällä country props" , country.props)
    console.log("Pelkkä' country " ,country)
    
      return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
        {country.languages.map(lang => (
            <li key = {lang.name}>{lang.name}</li>
        ))
        }
        </ul>

        <h2>Official flag</h2>
        <img src={country.flag} width="200"/>
      </div>
    )
  }

export default CountryDetails