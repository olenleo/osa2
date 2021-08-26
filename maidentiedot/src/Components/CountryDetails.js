import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
      const apiKey = process.env.REACT_APP_WEATHER_API
      const [weather, setWeather] = useState([])
      useEffect(() => {
        console.log('effect')
        axios
          .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query= ${country.capital}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data.current)
          })
      }, [apiKey, country.capital])
      
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
        <img src={country.flag} width="200" alt= {`Flag of ${country.name}`}/>
        <h2>Weather in {country.capital} at {weather.observation_time} </h2>
        <img src={weather.weather_icons} alt={`Weather icon decipting ${weather.weather_descriptions}`}/>
          <p><b>Weather</b>: {weather.weather_descriptions}</p>
          <p><b>Temperature: </b>{weather.temperature} degrees celsius</p>
          <p><b>Wind: </b> {weather.wind_speed} mph {weather.wind_dir}</p>
      </div>
    )
  }

export default CountryDetails