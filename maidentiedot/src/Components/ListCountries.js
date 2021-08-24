
import React from 'react'
import CountryDetails from './CountryDetails';
import Country from "./Country"

const ListCountries = ( {countries, filterText}) => {
    const rows = []

    countries.forEach((country) => {
      if (!country.name.toLowerCase().includes(filterText.toLowerCase())) {
        return;
      }
      
      rows.push(
        <Country
          country={country}
          key={country.name}
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
    } else return (<ul><li>{rows}</li></ul>)
    
    

    
    
      
  }
export default ListCountries