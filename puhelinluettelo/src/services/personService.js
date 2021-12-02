import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    console.log('service here \n you called \n update Person method for id ' , newObject)
    return axios.put(`${baseUrl}/${id}`, newObject)
  }
  
  const deletePerson = (id) => {
    console.log('service here \n you called \n deletePerson method for id ' , id )
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
    
  }

  const exportedObject = { getAll, create, update, deletePerson }
  export default exportedObject


