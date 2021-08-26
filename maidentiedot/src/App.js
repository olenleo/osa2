import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from "./Components/FilterForm"
import ListCountries from './Components/ListCountries'

const App = () => {
  const [countryData, setCountryData] = useState([])
  const [filterText, setFilterText] = useState('')
  
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountryData(response.data)
      })
  }, [])
  
  console.log('render', countryData.length, 'notes')

  const filterCountries = () => {
    return countryData.filter(country => country.name.includes(filterText))
  }


  const handleButton = (event) => {
    console.log(event.target.value)
    setFilterText(event.target.value)
  }

  const handleTargetChange = (event) => {
    setFilterText(event.target.value)
  }
  
  
  return (
  <div>
    
    <FilterForm filterText ={filterText} handleFilterChange={handleTargetChange} /> 
    <ul>
    
    <ListCountries countries={filterCountries()} filterText = {filterText} handleClick ={handleButton}></ListCountries>
    </ul>
  </div>  );
}

export default App;
