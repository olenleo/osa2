import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from "./Components/FilterForm"
import CountryDetails from './Components/CountryDetails'
import ListCountries from './Components/ListCountries'


const App = () => {
  const [countryData, setCountryData] = useState([])
  const [filterText, setFilterText] = useState('')
  const [countryList, setCountryList] = useState('')
  
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

  const handleFilterChange = ( event ) => {
    event.preventDefault()
    setFilterText(event.target.value)
    
  }
  

  return (
  <div>
    <FilterForm input={filterText} handleFilterChange={handleFilterChange} /> 
    <ul>
    
    <ListCountries countries={countryData} filterText = {filterText}></ListCountries>
    </ul>
  </div>  );
}

export default App;
