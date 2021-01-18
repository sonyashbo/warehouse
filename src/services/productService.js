import axios from 'axios'

//const baseUrl = 'https://bad-api-assignment.reaktor.com/v2/products'
const baseUrl = 'http://localhost:3001/api/products'
const getProducts = async (type) => {
    const response = await axios.get(`${baseUrl}/${type}`)
    return response.data
}

export default {getProducts}