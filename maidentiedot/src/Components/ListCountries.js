
import React from 'react'
import CountryDetails from './CountryDetails';
import Country from "./Country"


const ListCountries = ( props ) => {
    console.log('Listaa maat')
    console.log(props)
    const apiKey = process.env.REACT_APP_WEATHER_API
console.log(apiKey)


    const rows = []

    props.countries.forEach((country) => {
      if (!country.name.toLowerCase().includes(props.filterText.toLowerCase())) {
        return;
      }
      
      rows.push(
        <Country
          key={country.name}
          country={country}
          handleClick={props.handleClick}
        />
      )
    })
    
    if (rows.length > 10) {
      return(
        <div>
          <p> Too many </p>
        </div>
      )
    } else if (rows.length === 1) {
      return (<CountryDetails country = {rows[0].props.country}/>)
    } else return (<ul>{rows}</ul>)
    
    

    
    
      
  }
export default ListCountries