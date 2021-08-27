import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }
  
  const deletePerson = (id) => {
    console.log('service here \n you called \n deletePerson method for id ' , id )
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
    
  }

  const exportedObject = { getAll, create, update, deletePerson }
  export default exportedObject


